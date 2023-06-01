import jwt from 'jsonwebtoken';

import { User } from '../models/index.js';
import { AppError } from '../utils/index.js';

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
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
      throw new AppError('Please provide email and password', 400);

    // Check if user already exist & password correct
    const user = await User.findOne({ email }).select('password');
    const correct = user
      ? await user.correctPassword(password, user.password)
      : false;

    if (!user || !correct) {
      throw new AppError('Incorrect email or password', 401);
    }

    // everything is ok, send token to client
    const token = signToken(user._id);
    res.status(200).json({
      status: 'success',
      token,
    });
  } catch (err) {
    next(err);
  }
};

export { signup, login };
