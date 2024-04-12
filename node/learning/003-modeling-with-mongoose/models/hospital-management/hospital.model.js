import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    addressLine1: {
      required: true,
      type: String,
    },
    addressLine2: {
      required: true,
      type: String,
    },
    city: {
      required: true,
      type: String,
    },
    pincode: {
      required: true,
      type: String,
    },
    specializedIn: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export default hospital = new mongoose.model("Hospital", hospitalSchema);
