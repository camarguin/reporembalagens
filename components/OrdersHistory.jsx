import { Stack, Text, Button, Flex } from '@chakra-ui/react';
import CardOrder from './CardOrder';

const OrdersHistory = () => {
  return (
    <Stack
      spacing={4}
      maxWidth={["100%", "100%", "600px"]}
      height="510px"
      justify="space-between"
    >
      <Text variant="h2" textAlign="center">
        Histórico de pedidos
      </Text>
      {/* {orderHistory.map(order => (
        <CardOrder orderQty={order.qty} orderName={order.name} orderDate={order.date} />
      ))} */}
      <Stack spacing={3}>
        <CardOrder orderQty="10" orderName="order Name" orderDate="10/10/2021" />
        <CardOrder orderQty="10" orderName="order Name" orderDate="10/10/2021" />
        <CardOrder orderQty="10" orderName="order Name" orderDate="10/10/2021" />
        <CardOrder orderQty="10" orderName="order Name" orderDate="10/10/2021" />
        <CardOrder orderQty="10" orderName="order Name" orderDate="10/10/2021" />
      </Stack>
      <Flex justify="center">
        <Button variant="primary" maxWidth="130px">
          Alterar
        </Button>
      </Flex>
    </Stack>
  );
};

export default OrdersHistory;