import mongoose, { Schema } from "mongoose";

const subScriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //  one who is subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //  one whom is subscriber is subscribing
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subScriptionSchema);
