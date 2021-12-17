import { Flex } from '@chakra-ui/react'
import { getSession } from 'next-auth/client'
import Layout from '../../components/Layout'
import MyInfo from '../../components/MyInfo'
import OrdersHistory from '../../components/OrdersHistory'
import TitleBanner from '../../components/TitleBanner'
import { getData } from '../../utils/fetchData'

export default function Conta({ session, orders }) {
  return (
    <Layout>
      <TitleBanner titleIcon="../Profile.svg" titleName="Sua Conta" />
      <Flex justify="space-between" px={["10px", "20px", "50px"]} direction={["column", "column", "row"]}>
        <MyInfo user={session.user} userId={session.userId} />
        <OrdersHistory orders={orders} />
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
  const res = await getData(`order/${session.user._id}`)
  return {
    props: {
      session: await getSession(context),
      orders: res.orders
    },
  };
}

// export async function getServerSideProps(context) {
//   const res = await getData(`product/aluminio`);
//   return {
//     props: {
//       products: res.products,
//       result: res.result,
//     },
//   };
// }
