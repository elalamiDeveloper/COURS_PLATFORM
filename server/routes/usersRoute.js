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
  getMe,
  updateMe,
} from '../controllers/usersControllers.js';

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/').get(protect, restrictTo('admin'), getAllUsers);

router.route('/getMe').get(protect, getMe);
router.route('/updateMe').patch(protect, updateMe);
router.route('/updatePassword').post(protect, updatePassword);

export { router as usersRouter };
