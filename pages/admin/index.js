import React from 'react'
import { getSession } from 'next-auth/client';
import { Text } from '@chakra-ui/react';
import AdminLayout from '../../components/AdminLayout'
import AdminDashboard from '../../components/AdminDashboard';

export default function Index({ session }) {
  return (
    <AdminLayout isShortFooter>
      {/* <AdminHeader /> */}
      <Text>
        Bem vindo, {session.user.name}
      </Text>
      {/* <AdminDashboard /> */}

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

}
