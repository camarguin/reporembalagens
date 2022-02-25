import React, { useState } from 'react'
import { getSession } from 'next-auth/client';
import { Container, Text, Flex, Divider } from '@chakra-ui/react';
import moment from 'moment';
import AdminLayout from '../../components/AdminLayout'
import AdminDashboard from '../../components/AdminDashboard';
import { getData } from '../../utils/fetchData';
import { useEffect } from 'react';
import AdminDashboardInfo from '../../components/AdminDashboardInfo';

export default function Index({ session, orders, users }) {
  const [chartData, setChartData] = useState([])
  const today = moment().format('DD/MM/YYYY')
  const [firstName, lastName] = session.user.name.split(' ')
  const totalPaidOrders = orders.filter(order => order.paid === true)
  const todayOrders = orders.filter(order => moment(order.createdAt).format('DD/MM/YYYY') === today)
  const todayUsers = users.filter(user => moment(user.createdAt).format('DD/MM/YYYY') === today)
  const todayUsersUpdated = users.filter(user => moment(user.updatedAt).format('DD/MM/YYYY') === today)
  const todayOrdersPaid = orders.filter(order => moment(order.updatedAt).format('DD/MM/YYYY') === today && order.paid === true)

  useEffect(() => {
    setChartData([todayOrders.length, todayUsers.length, todayUsersUpdated.length, todayOrdersPaid.length])
  }, [])
  const data = {
    labels: ['Novos pedidos', 'Novos usuários', 'Usuários atualizados', 'Pedidos pagos'],
    datasets: [
      {
        label: '# de Dados',
        data: chartData,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <AdminLayout titlePage="Admin - Reporembalagens" isShortFooter>
      <Text variant="dashboardWelcome" padding="10px 50px 0px 50px">
        Olá {firstName}
      </Text>
      <Text fontSize="1rem" color="myGreen.100" padding="0px 50px">
        Bem vindo de volta
      </Text>
      <Flex minH="70vh" justify="space-around">
        <Flex direction="column" align="center">
          <Text variant="dashboardTitle" color="myGreen.200" padding="20px 50px">
            Dados de hoje
          </Text>
          <AdminDashboard data={data} />
        </Flex>
        <Flex height="450px">
          <Divider orientation='vertical' />
        </Flex>
        <Flex direction="column" align="center">
          <Text variant="dashboardTitle" color="myGreen.200" padding="20px 50px">
            Dados gerais
          </Text>
          <AdminDashboardInfo
            totalOrders={orders.length}
            totalUsers={users.length}
            newUsers={todayUsers.length}
            newOrders={todayOrders.length}
            totalPaidOrders={totalPaidOrders.length}
            newPaidOrders={todayOrdersPaid.length}
          />
        </Flex>
      </Flex>
    </AdminLayout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const res = await getData(`order/`)
  const res2 = await getData(`user`)
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
      orders: res.orders,
      users: res2.users,
    }
  }

}
