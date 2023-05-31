import * as dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './data.js';

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
