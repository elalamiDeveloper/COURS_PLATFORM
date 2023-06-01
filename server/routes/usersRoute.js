import express from 'express';

import { signup, login } from '../controllers/authControllers.js';
import { getAllUsers, createUser } from '../controllers/usersControllers.js';

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/').get(getAllUsers).post(createUser);

export { router as usersRouter };
