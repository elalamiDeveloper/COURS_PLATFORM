import express from 'express';

import {
  signup,
  login,
  protect,
  restrictTo,
  updatePassword,
} from '../controllers/authControllers.js';
import {
  getAllUsers,
  createUser,
  getMe,
  updateMe,
} from '../controllers/usersControllers.js';

const router = express.Router();

router.route('/').get(protect, restrictTo('admin'), getAllUsers);
router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/getMe').get(protect, getMe);
router.route('/updateMe').patch(protect, updateMe);
router.route('/updatePassword').post(protect, updatePassword);

// router.route('/').get(getAllUsers).post(createUser);

export { router as usersRouter };
