import express from 'express';

import {
  getAllFormations,
  createFormation,
} from '../controllers/formationsControllers.js';

const router = express.Router();

router.route('/').get(getAllFormations).post(createFormation);

export { router as formationsRouter };
