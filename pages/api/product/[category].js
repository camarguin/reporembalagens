import connectDB from "../../../utils/connectDB";
import Products from "../../../models/productModel";

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getCategoryProducts(req, res)
      break;
  }
}

const getCategoryProducts = async (req, res) => {
  const { category } = req.query
  try {
    const products = await Products.find({ category: { $eq: category } })
    res.json({
      status: 'success',
      result: products.length,
      products
    })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}