import connectDB from '../../../utils/connectDB'
import Orders from '../../../models/orderModel'

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await createOrder(req, res)
      break;
  }
}

const createOrder = async (req, res) => {
  try {
    const { cart, user } = req.body
    const newOrder = new Orders({
      user: user._id,
      products: cart
    })
    // return res.json({ newOrder })
    await newOrder.save()
    res.status(200).json({ newOrder })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}

