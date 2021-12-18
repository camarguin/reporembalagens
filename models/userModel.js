import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  cpf: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    street: {
      type: String,
      default: ''
    },
    district: {
      type: String,
      default: ''
    },
    complement: {
      type: String,
      default: ''
    },
    cep: {
      type: String,
      default: ''
    }
  },
  type: {
    type: String,
    default: 'user'
  }
}, {
  timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset