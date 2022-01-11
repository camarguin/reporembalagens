import React from 'react'
import { getProviders, getSession, csrfToken } from 'next-auth/client'
import FormLogin from '../../components/FormLogin'
import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'


export default function Login({ providers, session, csrfToken }) {

  return (
    <Layout isUserPage isShortFooter>
      <TitleBanner titleIcon="../Profile.svg" titleName="Login" />
      <FormLogin providers={providers} csrfToken={csrfToken} />
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
      providers: await getProviders(context),
      csrfToken: await csrfToken(context)
    },
  };
}
