import express from 'express';

import {
  getAllDocuments,
  createDocument,
} from '../controllers/documentsControllers.js';

const router = express.Router();

router.route('/').get(getAllDocuments).post(createDocument);

export { router as documentsRouter };
