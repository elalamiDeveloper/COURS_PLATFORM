import express from 'express';

import { signup, login, protect } from '../controllers/authControllers.js';
import {
  getAllUsers,
  createUser,
  getMy,
} from '../controllers/usersControllers.js';

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/getMy').get(protect, getMy);

// router.route('/').get(getAllUsers).post(createUser);

export { router as usersRouter };
