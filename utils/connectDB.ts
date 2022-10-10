import mongoose from "mongoose";
type connectionType = {
  isConnected?: number;
};

const connection: connectionType = {};

async function connectDB() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(`${process.env.MONGODB_URL}`);
  connection.isConnected = db.connections[0].readyState;
  if (connection.isConnected) {
    console.log("Connected to DB");
  } else console.log("Couldn't connect to DB.");
}

export default connectDB;
