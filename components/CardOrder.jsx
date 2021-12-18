import { Grid, Text, Icon } from '@chakra-ui/react';
import { AiOutlineExclamationCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import moment from 'moment';

const CardOrder = ({ order }) => {
  const date = moment(order.createdAt).format('DD/MM/YYYY');

  return (
    <Grid templateColumns={["0.5fr 1fr 0.5fr", "0.5fr 1fr 0.5fr", "30px 400px 100px"]} bgColor="myGreen.50" p="20px" borderRadius="10px">
      {order.paid ?
        <Icon as={AiOutlineCheckCircle} color="myGreen.300" /> :
        <Icon as={AiOutlineExclamationCircle} color="tomato" />
      }
      <Text fontSize="1rem">
        {order._id}
      </Text>
      <Text>
        {date}
      </Text>
    </Grid>
  );
};

export default CardOrder;