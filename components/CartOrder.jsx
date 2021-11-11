import { Grid, GridItem, IconButton, Text } from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";

const CartOrder = ({ orderQty, orderName }) => {
  return (
    <Grid templateColumns="0.3fr 1.6fr 0.1fr" bgColor="myGreen.200" p="19px" borderRadius="10px" alignItems="center">
      <GridItem>
        <Text variant="p">{orderQty}</Text>
      </GridItem>
      <GridItem>
        <Text variant="p">{orderName}</Text>
      </GridItem>
      <GridItem >
        <IconButton
          color="white"
          variant="link"
          icon={<BsTrash />}
        />
      </GridItem>
    </Grid>
  );
};

export default CartOrder;