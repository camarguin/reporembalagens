import { Grid, Text } from '@chakra-ui/react';

const CardOrder = ({ orderQty, orderName, orderDate }) => {
  return (
    <Grid templateColumns="40px 200px 150px" bgColor="myGreen.50" p="20px" borderRadius="10px">
      <Text>
        {orderQty}
      </Text>
      <Text>
        {orderName}
      </Text>
      <Text>
        {orderDate}
      </Text>
    </Grid>
  );
};

export default CardOrder;