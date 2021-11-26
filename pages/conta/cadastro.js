import React from 'react'
import FormSignup from '../../components/FormSignup'
import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import { getProviders, getSession, signOut } from 'next-auth/client'

export default function Cadastro({ providers, session }) {
  // const providers = providers
  console.log({ providers, session })
  if (session) return <button onClick={() => signOut()}>Logout from {session.user.name}</button>

  return (
    <Layout isUserPage isShortFooter>
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
// Cadastro.getInitialProps = async (context) => {
//   return {
//     providers: await providers(context),
//     session: await getSession(context)
//   }
// }
