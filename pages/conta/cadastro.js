import React from 'react'
import { getProviders, getSession } from 'next-auth/client'
import FormSignup from '../../components/FormSignup'
import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'

export default function Cadastro({ providers, session }) {

  return (
    <Layout isUserPage isShortFooter titlePage="Repor - Cadastro">
      <TitleBanner titleIcon="../Profile.svg" titleName="Cadastro" />
      <FormSignup provider={providers.google} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: '/conta',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: await getSession(context),
      providers: await getProviders(context)
    },
  };
}
