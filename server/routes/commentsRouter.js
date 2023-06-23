import express from 'express';

import {
  getAllComments,
  createNewComment,
} from '../controllers/commentsControllers.js';

const router = express.Router();

router.route('/').get(getAllComments).post(createNewComment);

export { router as commentsRouter };
