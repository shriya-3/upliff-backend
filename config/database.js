import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // mongoose v6+ no longer requires the old parser/ topology options
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("DB connection failed", error);
  }
};

export default connectDB;
