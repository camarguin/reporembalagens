import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client'
import {
  Flex, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Text
} from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'
import { compareAsc, compareDesc, parseISO } from 'date-fns'
import Layout from '../../components/Layout'
import MyInfo from '../../components/MyInfo'
import OrdersHistory from '../../components/OrdersHistory'
import TitleBanner from '../../components/TitleBanner'
import { getData } from '../../utils/fetchData'

export default function Conta({ session, orders }) {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [noInfo, setNoInfo] = useState(undefined)

  function sortOrders(myOrders) {
    return myOrders.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    )
  }

  useEffect(() => {
    if (session.user.cpf === '' || session.user.name === '' || session.user.phone === ''
      || session.user.address.street === '' || session.user.address.district === '' || session.user.address.cep === ''
    ) {
      onOpen()
      setNoInfo(true)
    }
  }, [])
  return (
    <Layout isUserPage titlePage="Repor - Minha Conta">
      <TitleBanner titleIcon="../Profile.svg" titleName="Sua Conta" />
      <Flex justify="space-between" px={["10px", "20px", "50px"]} direction={["column", "column", "row"]}>
        <MyInfo user={session.user} userId={session.userId} noInfo={noInfo} />
        <OrdersHistory orders={sortOrders(orders)} />
        <Modal isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader alignItems="center"><WarningTwoIcon color="red.600" fontSize="1.5rem" /> Aviso Importante</ModalHeader>
            <ModalBody>
              <Text variant="p" color="black">Os dados da sua conta precisam ser atualizados</Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="primary" mr={2} onClick={() => router.push('/conta/perfil')}>
                Atualizar dados
              </Button>
              <Button variant="ghost" onClick={onClose} >Mais tarde</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Layout>
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
  const res = await getData(`order/${session.user._id}`)
  return {
    props: {
      session: await getSession(context),
      orders: res.orders
    },
  };
}
