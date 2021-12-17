import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Container, Text, Stack, IconButton, Grid, GridItem, Button, Flex, useToast } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';
import CartOrder from './CartOrder';
import EmptyCart from './EmptyCart';
import { DataContext } from '../context/GlobalState';
import { postData } from '../utils/fetchData';

const MyCart = ({ closeOnClick, user }) => {
  const router = useRouter()
  const toast = useToast()
  const { state, dispatch } = useContext(DataContext)
  const [myUser, setMyUser] = useState(user)
  const { cart } = state
  const [isEmpty, setIsEmpty] = useState(cart.length === 0)
  useEffect(() => {
    setIsEmpty(cart.length === 0)
  }, [cart])

  function clearCart() {
    window.localStorage.removeItem("reporembalagens_cart")
  }

  function handlePedirOrcamento() {
    if (!myUser) {
      toast({
        title: 'Entre com sua conta',
        description: "Para pedir o orçamento você precisa estar logado",
        status: 'warning',
        position: 'bottom-left',
        duration: 9000,
        isClosable: true,
      })
      router.push("/conta/login")
    } else
      postData('order', { cart, user }).then(res => console.log(res))
  }

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
            {/* <CartOrder orderQty="10" orderName="Tradicional Canudo" /> */}
            {cart.map(product => (
              <CartOrder key={product._id} item={product} dispatch={dispatch} cart={cart} />
            ))}
          </Stack>
          <Flex width="100%" justify="center" py="50px">
            <Button
              variant="primary"
              bgColor="myGreen.100"
              onClick={handlePedirOrcamento}>
              Pedir Orçamento
            </Button>
          </Flex>
        </>
      }
      {/* <Button variant="link" color="white" bottom="10px" position="absolute" onClick={clearCart}>
        Limpar carrinho
      </Button> */}
    </Container >
  );
};

export default MyCart;