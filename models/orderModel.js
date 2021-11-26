import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  products: [
    {
      name: String,
      qty: Number
    }
  ],

}, {
  timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('order', userSchema)
export default Dataset