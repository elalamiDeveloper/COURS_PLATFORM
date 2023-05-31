import express from 'express';

import { getAllUsers, createUser } from '../controllers/usersControllers.js';

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);

export { router as usersRouter };
