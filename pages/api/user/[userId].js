import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModel";

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getUser(req, res)
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