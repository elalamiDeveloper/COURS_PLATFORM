import express from 'express';
import morgan from 'morgan';

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());

// ROUTES
app.use('/api/v1/', (req, res) => {
  res.send('OK');
});

// ERRORS HANDLING

export default app;
