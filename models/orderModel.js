import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  products: {
    type: Array,
  },
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
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