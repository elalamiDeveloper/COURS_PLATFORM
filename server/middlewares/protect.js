import { promisify } from 'util';

import { User } from '../models/index.js';
import { AppError } from '../utils/index.js';

const protect = async () => {
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
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.env.JWT_SECRET
    );

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

export default protect;
