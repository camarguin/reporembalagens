import connectDB from '../../../utils/connectDB'
import Orders from '../../../models/orderModel'

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await createOrder(req, res)
      break;
    case "GET":
      await getOrders(req, res)
      break;
  }
}

const createOrder = async (req, res) => {
  try {
    const { cart, user } = req.body
    const newOrder = new Orders({
      userId: user._id,
      userName: user.name,
      products: cart
    })
    // return res.json({ newOrder })
    await newOrder.save()
    res.status(200).json({ newOrder })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}

const getOrders = async (req, res) => {
  try {
    const orders = await Orders.find()
    res.json({
      status: 'success',
      result: orders.length,
      orders
    })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}

