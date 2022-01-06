import connectDB from "../../../utils/connectDB";
import Orders from "../../../models/orderModel";

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getOrder(req, res)
      break;
  }
}

const getOrder = async (req, res) => {
  const { order } = req.query
  try {
    const myOrder = await Orders.findOne({ _id: { $eq: order } })
    res.json({
      status: 'success',
      result: myOrder.length,
      myOrder
    })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}