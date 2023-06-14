import * as dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './data.js';

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit();
});

const startServer = async () => {
  const { default: app } = await import('./app.js');
  const urlDB = process.env.DATABASE_URL.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );

  const port = process.env.PORT || 3000;

  await connectDB(urlDB);
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
};

startServer();

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');
  process.exit();
});
