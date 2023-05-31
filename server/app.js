import express from 'express';
import morgan from 'morgan';

import { urlsError } from './middlewares/index.js';
import { globalErrorHandler } from './controllers/errorsControllers.js';
import { usersRouter } from './routes/index.js';

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());

// ROUTES
app.use('/api/v1/users', usersRouter);
app.use('*', urlsError);

// ERRORS HANDLING
app.use(globalErrorHandler);

export default app;
