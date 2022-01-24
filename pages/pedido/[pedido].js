import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons'
import Layout from '../../components/Layout';
import OrderInfo from '../../components/OrderInfo';
import TitleBanner from '../../components/TitleBanner';
import { getData } from '../../utils/fetchData';

export default function Pedido({ myOrder }) {
  const router = useRouter()
  const [order, setOrder] = useState(myOrder)
  const { pedido } = router.query
  return (
    <Layout isUserPage titlePage="Repor - Pedido">
      <TitleBanner titleName="Informações do Pedido" titleIcon="/OrderIcon.svg" />
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
      <OrderInfo order={order} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { pedido } = context.query
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/conta/login',
        permanent: false,
      },
    };
  }
  const res = await getData(`myorder/${pedido}`)
  const myOrderInfo = res.myOrder
  return {
    props: {
      session: await getSession(context),
      myOrder: myOrderInfo
    },
  };
}