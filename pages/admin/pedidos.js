import React from 'react'
import { getSession } from 'next-auth/client';
import { getData } from '../../utils/fetchData';
import { Text, Switch } from '@chakra-ui/react';
import { compareDesc, parseISO } from 'date-fns'
import moment from 'moment';
import AdminLayout from '../../components/AdminLayout';
import AdminTitleBanner from '../../components/AdminTitleBanner';
import MyTable from '../../components/MyTable';

function sortOrders(myOrders) {
  return myOrders.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  )
}

export default function Pedidos({ orders }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id"
      },
      // {
      //   Header: "Produtos",
      //   accessor: "products"
      // },
      {
        Header: "Data",
        accessor: "createdAt",
        Cell: ({ value }) => { return moment(value).format('DD/MM/YYYY') }
      },
      {
        Header: "Usuário",
        accessor: "user"
      },
      {
        Header: "Pago",
        accessor: "paid",
        Cell: ({ value }) => { return <Switch id='email-alerts' colorScheme='green' isChecked={value} /> }
        // <input type="checkbox" checked={value} />

      }
    ],
    []
  );
  return (
    <AdminLayout>
      <AdminTitleBanner titleName="Pedidos" titleIcon="/IconOrders.svg" />
      <MyTable columns={columns} data={orders} />
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
  const res = await getData(`order/`)
  const orders = sortOrders(res.orders)

  return {
    props: {
      session: await getSession(context),
      orders: orders
    },
  };
}
