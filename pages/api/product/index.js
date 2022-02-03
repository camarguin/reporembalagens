import connectDB from "../../../utils/connectDB";
import Products from "../../../models/productModel";

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res)
      break;
    case "POST":
      await addProduct(req, res)
      break;
    case "DELETE":
      await deleteProduct(req, res)
      break;
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await Products.find()
    res.json({
      status: 'success',
      result: products.length,
      products
    })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}

const addProduct = async (req, res) => {
  try {
    const { name, description, cod, category, image, home, stock } = req.body
    const newProduct = new Products({
      name: name,
      description: description,
      cod: cod,
      category: category,
      image: image,
      home: home,
      stock: stock,
    })
    await newProduct.save()
    res.status(200).json({ newProduct })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.body
    await Products.findByIdAndDelete(id)
    res.status(200).json({ msg: 'Product deleted' })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}