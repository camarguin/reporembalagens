import bcrypt from "bcrypt"
import connectDB from "../../../utils/connectDB"
import Users from "../../../models/userModel"

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
    //get email, password and cfpassword from the form frontend
    const { email, password, cfpassword } = req.body
    //check if the fields are valid
    const errMsg = valid(email, password, cfpassword)
    if (errMsg) {
      return res.status(400).json({ err: errMsg })
    }
    //check if email already exists
    const checkExisting = await Users.findOne({ email: email })
    if (checkExisting) {
      return res.status(400).json({ err: 'Email ja esta sendo usado' })
    }
    const passwordHash = await bcrypt.hash(password, 12)
    const newUser = new Users({ email: email, password: passwordHash })
    await newUser.save()
    res.json({ msg: 'Registrado com sucesso' })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}

//function to check if email, password are valid
const valid = (email, password, cfpassword) => {
  if (!email || !password) {
    return 'Por favor preencha todos os campos'
  }
  if (!validateEmail(email)) {
    return 'Email Invalido'
  }
  if (password.length < 6) {
    return 'Sua senha deve conter no mínimo 6 caracteres'
  }
  if (password !== cfpassword) {
    return 'Confirmação de senha e senha são diferentes'
  }
  return
}

//function to check if email is valid
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}