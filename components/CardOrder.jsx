import Link from 'next/link'
import { Grid, Text, Icon, } from '@chakra-ui/react';
import { AiOutlineExclamationCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import moment from 'moment';

const CardOrder = ({ order }) => {
  const date = moment(order.createdAt).format('DD/MM/YYYY');


  return (
    <Link href={`pedido/${order._id}`}>
      <Grid
        templateColumns={["0.2fr 0.5fr 0.2fr", "0.5fr 1.5fr 0.5fr", "0.3fr 1fr 0.3fr"]}
        bgColor="myGreen.50"
        p="20px"
        borderRadius="10px"
        cursor="pointer"
        alignItems="center"
        _hover={{
          bgColor: 'myGreen.100',
          boxShadow: 'lg'
        }}
      >

        {order.paid ?
          <Icon fontSize="1.5rem" as={AiOutlineCheckCircle} color="myGreen.300" /> :
          <Icon fontSize="1.5rem" as={AiOutlineExclamationCircle} color="tomato" />
        }
        <Text fontSize="1rem">
          {order._id}
        </Text>
        <Text>
          {date}
        </Text>
      </Grid>
    </Link>
  );
};

export default CardOrder;