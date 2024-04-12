import mongoose, {Schema} from "mongoose";

const bookSchema = new Schema({
  name: {
    type:String,
    required: true,
    trim: true,
  },
  bookId: {
    type: Number
  },
  author: {
    type:String,
    required: true,
    trim: true,
  },
  numberOfCopiesSold: {
    type:Number,
    required: true,
    trim: true,
  },
  booknameMetadata: {
    type:String,
    trim: true,
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Category'
  }

}, {timestamps: true})

export const Book =  mongoose.model('Book', bookSchema)