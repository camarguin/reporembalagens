import React from 'react'
import { Text, Image } from '@chakra-ui/react';
import { getSession } from 'next-auth/client';
import { getData } from '../../utils/fetchData';
import AdminTitleBanner from '../../components/AdminTitleBanner';
import AdminLayout from '../../components/AdminLayout';
import MyTable from '../../components/MyTable';

export default function Produtos({ products }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "COD",
        accessor: "cod"
      },
      {
        Header: "Nome",
        accessor: "name"
      },
      {
        Header: "Categoria",
        accessor: "category"
      },
      {
        Header: "Descrição",
        accessor: "description"
      },
      {
        Header: "Imagem",
        accessor: "image",
        // Cell: ({ value }) => { return <Image src={value} height="50px" /> }
        Cell: ({ value }) => { return <a href={value} target="_blank">{value}</a> }
      }
    ],
    []
  );
  return (
    <AdminLayout>
      <AdminTitleBanner titleName="Produtos" titleIcon="/IconProducts.svg" />
      <MyTable columns={columns} data={products} />
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
  const res = await getData(`product`)
  return {
    props: {
      session: await getSession(context),
      products: res.products
    },
  };
}
