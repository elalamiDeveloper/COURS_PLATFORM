import mongoose from 'mongoose';

// Connect to database
const connectDB = async (url) => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(url);
    console.log('COURS PLATFORM DATA connected successfully...');
  } catch (err) {
    console.log(err);
  }
};

export { connectDB };
