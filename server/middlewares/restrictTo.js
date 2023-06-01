import { AppError } from '../utils/index.js';

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action')
      );
    }

    next();
  };
};

export default restrictTo;
