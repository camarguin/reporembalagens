import React, { useState } from 'react'
import {
  Text, Image, IconButton, useToast, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button
} from '@chakra-ui/react';
import { getSession } from 'next-auth/client';
import { BsFillTrashFill } from 'react-icons/bs';
import { getData } from '../../utils/fetchData';
import AdminTitleBanner from '../../components/AdminTitleBanner';
import AdminLayout from '../../components/AdminLayout';
import MyTable from '../../components/MyTable';

export default function Produtos({ products }) {
  const [productsList, setProductsList] = useState(products)
  const toast = useToast()

  //Delete product
  const handleRemoveProduct = async (id) => {
    const res = await fetch(`/api/product`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id
      })
    }).then(r => {
      setProductsList(productsList.filter((product) => product._id != id))
      toast({
        title: 'Produto removido',
        description: 'Produto removido com sucesso',
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    })
    // setProductsList(
    //   productsList.filter((product) => product._id != id)
    // );
  }

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
        Cell: ({ value }) => { return <a href={value} target="_blank" rel="noreferrer">{value}</a> }
      },
      {
        Header: "",
        accessor: "_id",
        Cell: ({ value }) => {
          const { isOpen, onOpen, onClose } = useDisclosure()
          return <>
            <IconButton
              variant="ghost"
              aria-label='Remove'
              onClick={onOpen} icon={<BsFillTrashFill />}
            />
            <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader alignItems="center">Remover</ModalHeader>
                <ModalBody>
                  Tem certeza que deseja deletar esse produto?
                </ModalBody>
                <ModalFooter>
                  <Button variant="primary" mr={2} onClick={() => handleRemoveProduct(value)}>
                    Remover produto
                  </Button>
                  <Button variant="ghost" onClick={onClose}>Cancelar</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        }
      }
    ],
    []
  );
  return (
    <AdminLayout>
      <AdminTitleBanner titleName="Produtos" titleIcon="/IconProducts.svg" />
      <MyTable columns={columns} data={productsList} isProducts />
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
