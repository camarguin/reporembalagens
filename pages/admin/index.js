import React, { useState } from 'react'
import { getSession } from 'next-auth/client';
import { Text } from '@chakra-ui/react';
import moment from 'moment';
import AdminLayout from '../../components/AdminLayout'
import AdminDashboard from '../../components/AdminDashboard';
import { getData } from '../../utils/fetchData';

export default function Index({ session, orders }) {
  const [newDataDates, setNewDataDates] = useState([])
  const today = moment().format('DD/MM/YYYY')
  console.log(moment())
  const todayOrdersQty = orders.filter(order => moment().isSame(order.createdAt))
  console.log(todayOrdersQty)

  // const calculateOrdersByDay = () => {
  //   const todayOrdersQty = orders.filter(order => moment().isSame(order.createdAt))
  //   // return arr.filter(obj => moment().isSame(obj.date, 'day'));

  //   orders.map(order => {
  //     const date = moment(order.createdAt).format('DD/MM/YYYY')
  //     if (date === today) {

  //     }
  //   })




  // }
  return (
    <AdminLayout isShortFooter>
      <Text>
        Bem vindo, {session.user.name}
      </Text>
      <AdminDashboard data={[5, 2, 1, 3, 2, 5, 0]} />
    </AdminLayout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const res = await getData(`order/`)
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
      session: await getSession(context),
      orders: res.orders
    }
  }

}
