import { query } from 'express';
import User from '../models/userModel.js';

import APIFeatures from '../utils/APIFeatures.js';

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

const createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'success',

      data: { user: newUser },
    });
  } catch (err) {
    next(err);
  }
};

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
    const fields = req.query.fields.split(',');
    const user = {};

    fields.forEach((element) => {
      user[element] = req.user[element];
    });

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

    const filtredBody = filterObj(
      req.body,
      'email',
      'firstName',
      'lastName',
      'entreprise',
      'photo'
    );

    const updatedUser = await User.findByIdAndUpdate(req.user.id, filtredBody, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        user: filtredBody,
      },
    });
  } catch (err) {
    next(err);
  }
};

export { createUser, getAllUsers, getMe, updateMe };
