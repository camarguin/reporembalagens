import React, { useState } from 'react'
import { getSession } from 'next-auth/client';
import { getData } from '../../utils/fetchData';
import { Text, Switch, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, IconButton, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { compareDesc, parseISO } from 'date-fns'
import moment from 'moment';
import AdminLayout from '../../components/AdminLayout';
import AdminTitleBanner from '../../components/AdminTitleBanner';
import MyTable from '../../components/MyTable';
import { CopyIcon } from '@chakra-ui/icons';

function sortOrders(myOrders) {
  return myOrders.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  )
}

export default function Pedidos({ orders }) {
  // const [isModalOpen, setModalOpen] = useState(false)
  const toast = useToast()

  const updatePaid = async (row, paid) => {
    // console.log(paid)
    const res = await fetch(`/api/order`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId: row.original._id,
        paid: paid
      })
    }).then(response => (
      toast({
        title: 'Pedido atualizado',
        description: 'Pedido marcado como pago',
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    ))
  }

  const columns = React.useMemo(
    () => [
      {
        Header: "ID Pedido",
        accessor: "_id"
      },
      {
        Header: "Produtos",
        accessor: "products",
        Cell: ({ value }) => {
          const { isOpen, onOpen, onClose } = useDisclosure()
          return (
            <>
              <IconButton aria-label='Ver Produtos do pedido' icon={<CopyIcon />} onClick={onOpen} />
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader alignItems="center">Pedido</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {value.map(product => (
                      <Text key={product._id} variant="p" color="black">{product.name} - {product.quantity}</Text>
                    ))}
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          )
        }
      },
      {
        Header: "Data",
        accessor: "createdAt",
        Cell: ({ value }) => { return moment(value).format('DD/MM/YYYY') }
      },
      {
        Header: "Usuário",
        accessor: "userName"
      },
      {
        Header: "ID Usuário",
        accessor: "userId"
      },
      {
        Header: "Pago",
        accessor: "paid",
        Cell: ({ value, row }) => {
          return <Switch
            id='email-alerts'
            colorScheme='green'
            defaultChecked={value}
            value={value}
            onChange={(e) => updatePaid(row, e.target.checked)} />
        }
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
