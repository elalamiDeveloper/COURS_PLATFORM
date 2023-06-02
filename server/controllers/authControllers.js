import { promisify } from 'util';
import jwt from 'jsonwebtoken';

import { User } from '../models/index.js';
import { AppError } from '../utils/index.js';

const sendTokenToClient = (res, id) => {
  const token = signToken(id);

  res.status(200).json({
    status: 'success',
    token,
  });
};

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN * 24 * 60 * 60,
  });

  return token;
};

const protect = async (req, res, next) => {
  try {
    // GET token & check it
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      throw new AppError(
        'You are not logged in, Please connect to your account',
        401
      );
    }

    // Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      throw new AppError(
        'The user belonging to this token does no longer exist',
        401
      );
    }

    // Check if user changed password after the token was issued
    // if (currentUser.changerPasswordAfterToken(decoded.iat)) {
    //   throw new AppError('User recently changed password! Please log in again');
    // }

    // All is OK
    req.user = currentUser;
    next();
  } catch (err) {
    next(err);
  }
};

const signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const token = signToken(newUser._id);

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check email and password exists
    if (!email || !password)
      throw new AppError('Adresse e-mail ou mot de passe non valides.', 400);

    // Check if user already exist & password correct
    const user = await User.findOne({ email }).select('password');
    const correct = user
      ? await user.correctPassword(password, user.password)
      : false;

    if (!user || !correct) {
      throw new AppError('Incorrect email or password', 401);
    }

    // everything is ok, send token to client
    sendTokenToClient(res, user._id);
  } catch (err) {
    next(err);
  }
};

export { signup, login, protect };
