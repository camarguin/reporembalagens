import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Container, Text, Stack, IconButton, Grid, GridItem, Button, Flex, useToast } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { isSafari } from 'react-device-detect';
import CartOrder from './CartOrder';
import EmptyCart from './EmptyCart';
import { DataContext } from '../context/GlobalState';
import { clearCart } from '../context/Actions';
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

  async function handlePedirOrcamento() {
    if (!myUser) {
      toast({
        title: 'Entre com sua conta',
        description: "Para pedir o orçamento você precisa estar logado",
        status: 'warning',
        position: 'bottom-left',
        duration: 9000,
        isClosable: true,
      })
      return router.push("/conta/login")
    } else
      if (myUser.cpf === '' || myUser.name === '' || myUser.phone === '' || myUser.address.street === '' || myUser.address.district === '' || myUser.address.cep === '') {
        toast({
          title: 'Atualize seus dados',
          description: "Para pedir o orçamento você precisa atualizar seus dados no seu perfil",
          status: 'warning',
          position: 'bottom-left',
          duration: 9000,
          isClosable: true,
        })
      } else {
        //If it's on safari
        if (isSafari) {
          postData('order', { cart, user }).then(res => {
            toast({
              title: 'Pedido salvo',
              description: "Seu pedido foi salvo com sucesso, Entre em contato com a reporembalagens pelo whatsapp para confirmar seu pedido",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          })
        } else
          postData('order', { cart, user }).then(res => {
            toast({
              title: 'Pedido salvo',
              description: "Seu pedido foi salvo com sucesso, você será redirecionado para o whatsapp da reporembalagens",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
            const autoMessageOrder = `
            ID do Pedido: ${res.newOrder._id}
            Nome: ${myUser.name}
            Pedido: 
            ${cart.map(product => ` ${product.name} - ${product.quantity}\n `)} 
            `
            window.open(`https://api.whatsapp.com/send?phone=5534997673100&text=${encodeURI(autoMessageOrder)}`, "_blank")
          }
          )
        dispatch(clearCart())
        closeOnClick()
      }
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
          <Stack py="10px" maxHeight="60vh" overflowY="auto" >
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
    </Container >
  );
};

export default MyCart;