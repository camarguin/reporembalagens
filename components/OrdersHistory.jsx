import { Stack, Text, Button, Flex, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import CardOrder from './CardOrder';

const OrdersHistory = ({ orders }) => {
  const [myOrders, setMyOrders] = useState(orders)
  const [visible, setVisible] = useState(5)

  function showMore() {
    setVisible((prevValue) => prevValue + 3)
  }
  return (
    <Stack
      spacing={4}
      maxWidth={["100%", "100%", "600px"]}
      minWidth={["100%", "100%", "600px"]}
    >
      <Text variant="h2" textAlign="center">
        Histórico de pedidos
      </Text>
      <Grid templateColumns={["0.2fr 0.5fr 0.2fr", "0.5fr 1.5fr 0.5fr", "0.3fr 1fr 0.3fr"]} padding="0px 10px">
        <Text>Pago</Text>
        <Text>Codigo da Ordem</Text>
        <Text>Data</Text>
      </Grid>
      <Stack spacing={2} justify="flex-start">
        {myOrders && myOrders.slice(0, visible).map(order => (
          <CardOrder key={order._id} order={order} />
        ))}
        {myOrders.length === 0 &&
          <Text align="center">
            * Voce ainda nao possui nenhum pedido
          </Text>
        }
      </Stack>
      {myOrders.length > 0 &&
        <Flex justify="center">
          <Button variant="primary" maxWidth="130px" onClick={showMore}>
            Ver mais
          </Button>
        </Flex>
      }
    </Stack>
  );
};

export default OrdersHistory;