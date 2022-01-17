import React from 'react'
import { getSession } from 'next-auth/client';
import AdminLayout from '../../components/AdminLayout'
import { Text } from '@chakra-ui/react';

export default function index({ session }) {
  return (
    <AdminLayout isShortFooter>
      {/* <AdminHeader /> */}
      <Text>
        Bem vindo, {session.user.name}
      </Text>

    </AdminLayout>
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
  if (session.user.type === "user") {
    return {
      redirect: {
        destination: '/conta',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: await getSession(context)
    }
  }
  // const res = await getData(`order/${session.user._id}`)
  // return {
  //   props: {
  //     session: await getSession(context),
  //     orders: res.orders
  //   },
  // };
}
