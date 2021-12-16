import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  cod: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  home: {
    type: Boolean,
  },
  stock: {
    type: Number,
  }
}, {
  timestamps: true
})

let Dataset = mongoose.models.product || mongoose.model('product', productSchema)
export default Dataset