import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import nodemailer from "nodemailer"
import connectDB from "../../../utils/connectDB"
import Users from "../../../models/userModel"
import { html, text } from '../../../utils/htmlEmail'
import bcrypt from 'bcrypt'

connectDB()

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await Users.findOne({ email })
        if (!user) {
          throw new Error('Usuario nao encontrado')
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
          throw new Error("Senha incorreta");
        }
        return user
      }
    }),
    // Sign in with passwordless email link
    // Providers.Email({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    //   async sendVerificationRequest({
    //     identifier: email,
    //     url,
    //     provider: { server, from },
    //   }) {
    //     const { host } = new URL(url)
    //     const transport = nodemailer.createTransport(server)
    //     await transport.sendMail({
    //       to: email,
    //       from,
    //       subject: `Sign in to ${host}`,
    //       text: text({ url, host }),
    //       html: html({ url, host, email })
    //     })
    //     /* your function */
    //   },
    // }),
    //Sign in with Google
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: '/conta/login',
    error: '/conta/login'
  },
  // SQL or MongoDB database (or leave empty)
  database: process.env.DATABASE_URL,
  callbacks: {
    session: async (session, user) => {
      const resUser = await Users.findById(user.sub)
      session.userId = user.sub
      session.user = resUser
      return Promise.resolve(session)
    },
  }
})