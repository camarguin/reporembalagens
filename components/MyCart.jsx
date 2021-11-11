import { Container, Text, Stack, IconButton, Grid, GridItem, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import CartOrder from './CartOrder';
import EmptyCart from './EmptyCart';

const MyCart = ({ closeOnClick }) => {
  const [isEmpty, setIsEmpty] = useState(true)
  return (
    <Container
      maxW={["100%", "100%", "600px"]}
      height="100vh"
      padding={["10px 10px", "10px 20px", "30px 50px"]}
      bgColor="myGreen.300"
      position="fixed"
      right="0"
      top="0"
      zIndex={10000}
    >
      <IconButton
        position="absolute"
        right={["85%", "90%", "20px"]}
        top="20px"
        fontSize="2rem"
        variant="link"
        color="white"
        icon={<AiOutlineClose />}
        onClick={closeOnClick}
        _focus={{ outline: "none" }}
      />
      {isEmpty ?
        <EmptyCart /> :
        <>
          <Text variant="h2" fontWeight="black" color="white" textAlign="center">
            Seu Carrinho
          </Text>
          <Grid templateColumns="0.3fr 1.6fr 0.1fr" px="15px">
            <GridItem>
              <Text fontWeight="500" color="white">Qtd</Text>
            </GridItem>
            <GridItem>
              <Text fontWeight="500" color="white">Nome do produto</Text>
            </GridItem>
            <GridItem>
              <Text fontWeight="500" color="white">Remover</Text>
            </GridItem>
          </Grid>
          <Stack py="10px" >
            <CartOrder orderQty="10" orderName="Tradicional Canudo" />
            <CartOrder orderQty="10" orderName="Tradicional Canudo" />
            <CartOrder orderQty="10" orderName="Tradicional Canudo" />
          </Stack>
          <Flex width="100%" justify="center" py="50px">
            <Button variant="primary" bgColor="myGreen.100" >
              Pedir Orçamento
            </Button>
          </Flex>
        </>
      }
    </Container>
  );
};

export default MyCart;