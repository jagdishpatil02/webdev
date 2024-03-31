import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      lowecase: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowecase: true,
      required: true,
    },
    passsword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
