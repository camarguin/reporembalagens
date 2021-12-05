import connectDB from "../../../utils/connectDB";
import Products from "../../../models/productModel";

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getDescartavelProducts(req, res)
      break;
  }
}

const getDescartavelProducts = async (req, res) => {
  try {
    const products = await Products.find({ category: { $eq: 'descartavel' } })
    res.json({
      status: 'success',
      result: products.length,
      products
    })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}