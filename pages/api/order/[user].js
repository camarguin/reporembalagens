import connectDB from "../../../utils/connectDB";
import Orders from "../../../models/orderModel";

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getOrders(req, res)
      break;
  }
}

const getOrders = async (req, res) => {
  const { user } = req.query
  try {
    const orders = await Orders.find({ userId: { $eq: user } })
    res.json({
      status: 'success',
      result: orders.length,
      orders
    })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}