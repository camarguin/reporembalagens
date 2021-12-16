import { useContext } from 'react'
import { getSession, useSession } from 'next-auth/client'
import connectDB from '../../../utils/connectDB'
import Orders from '../../../models/orderModel'
import { DataContext } from '../../../context/GlobalState'

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await createOrder(req, res)
      break;
  }
  // const session = await getSession({ req });
  // const cart = req.body
  // console.log('req', cart)
  // const newOrder = new Orders({
  //   user: session.user._id,
  //   products: cart
  // })

  // await newOrder.save()
  // // console.log(cart)
  // res.status(200).json({ newOrder })
}

const createOrder = async (req, res) => {
  try {
    const { cart, user } = req.body
    // console.log('cart', cart)
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