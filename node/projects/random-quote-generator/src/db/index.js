import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n mongo connected !! DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log('Mongodb connection error:', error);
    process.exit();
  }
};

export default connectDB;
