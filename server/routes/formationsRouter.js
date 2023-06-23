import express from 'express';

import {
  getAllFormations,
  createFormation,
  getFormationById,
  updateFormationById,
} from '../controllers/formationsControllers.js';

const router = express.Router();

router.route('/').get(getAllFormations).post(createFormation);

router.route('/:id').get(getFormationById).patch(updateFormationById);

export { router as formationsRouter };
