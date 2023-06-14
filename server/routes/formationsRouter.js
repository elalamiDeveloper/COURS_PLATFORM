import express from 'express';

import {
  getAllFormations,
  createFormation,
  getFormationById,
} from '../controllers/formationsControllers.js';

const router = express.Router();

router.route('/').get(getAllFormations).post(createFormation);
router.route('/:id').get(getFormationById);

export { router as formationsRouter };
