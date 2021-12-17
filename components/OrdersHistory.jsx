import { Stack, Text, Button, Flex, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import CardOrder from './CardOrder';

const OrdersHistory = ({ orders }) => {
  const [myOrders, setMyOrders] = useState(orders)
  return (
    <Stack
      spacing={4}
      maxWidth={["100%", "100%", "600px"]}
      height="510px"
      width="600px"
      justify="space-between"
    >
      <Text variant="h2" textAlign="center">
        Histórico de pedidos
      </Text>
      <Grid templateColumns="0.3fr 1fr 0.3fr">
        <Text>Pago</Text>
        <Text>Codigo da Ordem</Text>
        <Text>Data</Text>
      </Grid>
      <Stack spacing={1}>
        {myOrders.map(order => (
          <CardOrder key={order._id} order={order} />
        ))}
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