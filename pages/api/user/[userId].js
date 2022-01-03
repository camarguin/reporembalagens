import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModel";

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getUser(req, res)
      break;
    case "PATCH":
      await updateUser(req, res)
      break;
  }
}

const getUser = async (req, res) => {
  const { userId } = req.query
  try {
    const user = await Users.findOne({ user: { $eq: userId } })
    console.log(user)
    res.status(200).json({ msg: 'user found' })

  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}
const updateUser = async (req, res) => {
  const { userId } = req.query
  const { name, phone, cpf, street, district, complement, cep } = req.body
  try {
    const user = await Users.findOneAndUpdate({ '_id': userId },
      {
        'name': name,
        'phone': phone,
        'cpf': cpf,
        'address.street': street,
        'address.district': district,
        'address.complement': complement,
        'address.cep': cep
      })
    // console.log(user)
    res.status(200).json({ msg: 'user found' })

  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}