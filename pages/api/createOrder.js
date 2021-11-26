import connectDB from '../../../config/connectDB'
import { getSession } from 'next-auth/client'

export default function handler(req, res) {

  res.status(200).json({ name: 'John Doe' })
}
