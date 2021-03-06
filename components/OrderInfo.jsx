import React from 'react';
import { Container, Grid, Text } from '@chakra-ui/react';
import moment from 'moment';

const OrderInfo = ({ order }) => {
  const date = moment(order.createdAt).format('DD/MM/YYYY');

  return (
    <Container>
      <Text variant='h2' color="black"><strong style={{ color: "#6DAA92" }}>ID do Pedido: </strong> {order._id}</Text>
      <Text variant='h2' color={order.paid ? 'green.300' : 'red.300'}>
        <strong style={{ color: "#6DAA92" }}>Pago: </strong>
        {order.paid ?
          'Pago' :
          'Pendente'}
      </Text>
      <Text variant='h2' color="black"><strong style={{ color: "#6DAA92" }}>Data: </strong> {date}</Text>
      <Text variant='h2' fontSize="2rem" textAlign="center">Produtos</Text>
      <Grid templateColumns="0.9fr 0.3fr">
        <Text variant="h2" color="myGreen.200" fontWeight="900">Produto</Text>
        <Text variant="h2" color="myGreen.200" textAlign="center" fontWeight="900">Quantidade</Text>
      </Grid>
      {order.products.map(product => (
        <Grid key={product._id} templateColumns="0.9fr 0.3fr" padding="5px 0px">
          <Text textTransform="capitalize">{product.name}</Text>
          <Text textAlign="center">{product.quantity}</Text>
        </Grid>
      ))}
    </Container>
  );
};

export default OrderInfo;