import mongoose from "mongoose";
type connectionType = {
  isConnected?: number;
};

const connection: connectionType = {};

async function connectDB() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URL as string);
  connection.isConnected = db.connections[0].readyState;
}

export default connectDB;
