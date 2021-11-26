import { Flex } from '@chakra-ui/react'
import { getSession } from 'next-auth/client'
import Layout from '../../components/Layout'
import MyInfo from '../../components/MyInfo'
import OrdersHistory from '../../components/OrdersHistory'
import TitleBanner from '../../components/TitleBanner'

export default function Conta({ session }) {
  return (
    <Layout>
      <TitleBanner titleIcon="../Profile.svg" titleName="Sua Conta" />
      <Flex justify="space-between" px={["10px", "20px", "50px"]} direction={["column", "column", "row"]}>
        <MyInfo user={session.user} userId={session.userId} />
        <OrdersHistory />
      </Flex>
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
      session: await getSession(context),
    },
  };
}
