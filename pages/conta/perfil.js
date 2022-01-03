import React from 'react'
import { getSession } from 'next-auth/client'
import FormProfile from '../../components/FormProfile'
import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'

export default function Perfil({ user }) {
  console.log(user)
  const handleSubmit = () => {
    console.log(user)
  }
  return (
    <Layout isShortFooter isUserPage>
      <TitleBanner titleIcon="../Profile.svg" titleName="Seu Perfil" />
      <FormProfile onSubmit={() => console.log(user)} user={user} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/conta/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: session.user,
    },
  }
}
