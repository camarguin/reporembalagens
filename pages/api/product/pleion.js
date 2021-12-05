import connectDB from "../../../utils/connectDB";
import Products from "../../../models/productModel";

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getPleionProducts(req, res)
      break;
  }
}

const getPleionProducts = async (req, res) => {
  try {
    const products = await Products.find({ category: { $eq: 'pleion' } })
    res.json({
      status: 'success',
      result: products.length,
      products
    })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}