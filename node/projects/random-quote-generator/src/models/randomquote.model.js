import mongoose from 'mongoose';

const randomQuoteSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
  },

  { timestamps: true }
);

export const randomQuote = mongoose.model('randomQuote', randomQuoteSchema);
