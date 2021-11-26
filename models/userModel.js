import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    default: ''
    // required: true,
  },
  telefone: {
    type: String,
    default: ''
  },
  cpf: {
    type: String,
    unique: true,
    default: ''
    // required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  endereco: {
    rua: {
      type: String,
      default: ''
    },
    bairro: {
      type: String,
      default: ''
    },
    complemento: {
      type: String,
      default: ''
    },
    cep: {
      type: String,
      default: ''
    }
  },
  tipo: {
    type: String,
    default: 'user'
  }
}, {
  timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset