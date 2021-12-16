import { Grid, GridItem, IconButton, Text } from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { deleteItem } from "../context/Actions";

const CartOrder = ({ item, dispatch, cart }) => {
  return (
    <Grid templateColumns="0.3fr 1.6fr 0.1fr" bgColor="myGreen.200" p="19px" borderRadius="10px" alignItems="center">
      <GridItem display="flex" flexDir="row">
        {/* <IconButton
          color="white"
          variant="link"
          icon={<AiFillMinusCircle />}
        /> */}
        <Text variant="p">{item.quantity}</Text>
        {/* <IconButton
          color="white"
          variant="link"
          icon={<AiFillPlusCircle />}
        /> */}
      </GridItem>
      <GridItem>
        <Text variant="p">{item.name}</Text>
      </GridItem>
      <GridItem >
        <IconButton
          color="white"
          variant="link"
          onClick={() => dispatch(deleteItem(cart, item._id, 'ADD_CART'))}
          icon={<BsTrash />}
        />
      </GridItem>
    </Grid>
  );
};

export default CartOrder;