import mongoose, { model } from "mongoose";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob?: string;
  profile?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
}

const userSchema = new mongoose.Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: String },
  profile: { type: String },
  twitter: { type: String },
  github: { type: String },
  instagram: { type: String },
});

const User = mongoose.model("User", userSchema);
export default User;
