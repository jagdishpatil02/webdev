import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema({

    categoryName: {
        type:String,
        required: true,
        unique: true
    },
  
    books:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
}, {timestamps: true});



export const Category = mongoose.model("category", categorySchema);