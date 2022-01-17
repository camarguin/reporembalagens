import React from 'react'
import { Container, Text } from '@chakra-ui/react';
import { getSession } from 'next-auth/client';
import MyTable from '../../components/MyTable';
import { getData } from '../../utils/fetchData';
import TitleBanner from '../../components/TitleBanner';
import AdminLayout from '../../components/AdminLayout';
import AdminTitleBanner from '../../components/AdminTitleBanner';

export default function Usuarios({ users }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Usuário",
        columns: [
          {
            Header: "Nome",
            accessor: "name"
          },
          {
            Header: "CPF/CNPJ",
            accessor: "cpf"
          },
          {
            Header: "Email",
            accessor: "email"
          }
        ]
      },
      {
        Header: "Endereço",
        columns: [
          {
            Header: "Rua/Número",
            accessor: "address.street"
          },
          {
            Header: "Bairro",
            accessor: "address.district"
          },
          {
            Header: "CEP",
            accessor: "address.cep"
          },
        ]
      }
    ],
    []
  );
  return (
    <AdminLayout>
      <AdminTitleBanner titleName="Usuarios" titleIcon="/IconUsers.svg" />
      <MyTable columns={columns} data={users} />
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
  const res = await getData(`user`)
  return {
    props: {
      session: await getSession(context),
      users: res.users
    },
  };
}