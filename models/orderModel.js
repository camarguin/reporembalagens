import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  products: [
    {
      name: String,
      qty: Number
    }
  ],
  user: {
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