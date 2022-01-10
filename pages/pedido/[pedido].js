import React, { useEffect } from 'react';
import router, { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { Text, IconButton, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons'
import Layout from '../../components/Layout';
import { getData } from '../../utils/fetchData';
import { useState } from 'react';
import OrderInfo from '../../components/OrderInfo';
import TitleBanner from '../../components/TitleBanner';

export default function Pedido({ myOrder }) {
  const router = useRouter()
  const [order, setOrder] = useState(myOrder)
  const { pedido } = router.query
  return (
    <Layout isUserPage>
      <TitleBanner titleName="Pedido" titleIcon="/OrderIcon.svg" />
      <Button
        variant="ghost"
        fontSize="2.8rem"
        color="myGreen.300"
        marginLeft="50px"
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