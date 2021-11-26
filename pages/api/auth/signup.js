import bcrypt from "bcrypt"
import connectDB from "../../../utils/connectDB"
import Users from "../../../models/userModel"
import valid from "../../../utils/valid"

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await signup(req, res)
      break;
  }
}

const signup = async (req, res) => {
  try {
    const { email, password, cfpassword } = req.body
    const errMsg = valid(email, password, cfpassword)
    const checkExisting = await Users.findOne({ email: email })
    if (errMsg) return res.status(400).json({ err: errMsg })
    // Check if user exists
    if (checkExisting) {
      return res.status(400).json({ err: 'Email ja esta sendo usado' })
    }

    const passwordHash = await bcrypt.hash(password, 12)

    const newUser = new Users({ email, password: passwordHash, cfpassword, nome: '', telefone: '', endereco: { rua: '', bairro: '', complemento: '', cep: '' } })
    console.log(newUser)
    await newUser.save()

    res.json({ msg: 'Registrado com sucesso!' })
  } catch (err) {
    return res.status(500).json({ err: err.message })

  }
}