import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '@chakra-ui/react'
import { getSession } from 'next-auth/client'
import { ArrowBackIcon } from '@chakra-ui/icons'
import FormProfile from '../../components/FormProfile'
import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'

export default function Perfil({ user }) {
  const router = useRouter()
  return (
    <Layout isShortFooter isUserPage>
      <TitleBanner titleIcon="../Profile.svg" titleName="Seu Perfil" />
      <Button
        variant="ghost"
        fontSize="2.5rem"
        color="myGreen.300"
        marginLeft="50px"
        padding="0"
        cursor="pointer"
        onClick={() => router.back()}
      >
        <ArrowBackIcon />
      </Button>
      <FormProfile user={user} />
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
