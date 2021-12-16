import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
  products: {
    type: Array,
  },
  user: {
    type: String,
    required: true
  },
  paid: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
})

let Dataset = mongoose.models.order || mongoose.model('order', orderSchema)
export default Dataset