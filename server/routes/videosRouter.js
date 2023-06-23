import express from 'express';

import { getAllVideos, createVideo } from '../controllers/videosController.js';

const router = express.Router();

router.route('/').get(getAllVideos).post(createVideo);

export { router as videosRouter };
