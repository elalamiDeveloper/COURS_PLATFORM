import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { urlsError } from './middlewares/index.js';

import {
  usersRouter,
  formationsRouter,
  commentsRouter,
} from './routes/index.js';

import { globalErrorHandler } from './controllers/errorsControllers.js';

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/formations', formationsRouter);
app.use('/api/v1/comments', commentsRouter);
app.use('*', urlsError);

// ERRORS HANDLING
app.use(globalErrorHandler);

export default app;
