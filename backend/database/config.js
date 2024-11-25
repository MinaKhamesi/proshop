import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI)
    console.log('successfully connected to db...')
  } catch (error) {
   console.log(`error while trying to connect to db: ${error}`) 
   process.exit(1)
  }
};

export default connectDB;