import { Flex } from '@chakra-ui/react'
import Layout from '../../components/Layout'
import MyInfo from '../../components/MyInfo'
import OrdersHistory from '../../components/OrdersHistory'
import TitleBanner from '../../components/TitleBanner'

export default function Conta() {
  return (
    <Layout>
      <TitleBanner titleIcon="../Profile.svg" titleName="Sua Conta" />
      <Flex justify="space-between" px={["10px", "20px", "50px"]} direction={["column", "column", "row"]}>
        <MyInfo />
        <OrdersHistory />
      </Flex>
    </Layout>
  )
}
