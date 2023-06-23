import User from '../models/userModel.js';
import APIFeatures from '../utils/APIFeatures.js';

const getAllUsers = async (req, res, next) => {
  try {
    const query = new APIFeatures(User.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const users = await query.query;

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    next(err);
  }
};

const getMe = async (req, res, next) => {
  try {
    const fields = req.query.fields?.split(',');
    let user = {};

    if (fields) {
      fields.forEach((element) => {
        user[element] = req.user[element];
      });
    } else {
      user = req.user;
    }

    res.status(200).json({
      status: 'success',
      data: { user },
    });
  } catch (err) {
    next(err);
  }
};

const updateMe = async (req, res, next) => {
  try {
    if (req.body.password || req.body.passwordConfirm) {
      throw new AppError(
        'This route is not for password updates. Please use /updateMyPassword'
      );
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  } catch (err) {
    next(err);
  }
};

export { getAllUsers, getMe, updateMe };
