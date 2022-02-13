import { useState, useContext } from 'react';
import NextImage from 'next/image';
import {
  Box, Image, Text, VStack, Stack, Button, NumberInput,
  NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
  FormControl, useToast
} from '@chakra-ui/react';
import { DataContext } from '../context/GlobalState'
import { addToCart } from '../context/Actions'


const ProductCard = ({ product }) => {
  const toast = useToast()
  const { state, dispatch } = useContext(DataContext)
  const { cart, notify } = state
  const [isHover, setIsHover] = useState(false)
  const [qty, setQty] = useState(1)

  function over(e) {
    setIsHover(true);
  }
  function out(e) {
    setIsHover(false);
  }

  function addItem(e) {
    dispatch(addToCart(product, cart, qty))
    const check = cart.every(item => {
      return item._id !== product._id
    })
    if (!check) {
      return toast({
        title: 'Erro',
        description: 'Seu carrinho já possui esse produto',
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } else
      return toast({
        title: 'Sucesso',
        description: 'Produto adicionado ao carrinho',
        status: "success",
        duration: 5000,
        isClosable: true,
      })
  }

  return (
    <Box
      borderColor="myGreen.300"
      margin="0 auto"
      width={["330px", "330px", "340px", "350px"]}
      maxW={["85vw", "350px", "340px", "350px"]}
      height="300px"
      onMouseEnter={over}
      onMouseLeave={out}
    >
      {isHover &&
        <Box
          position="absolute"
          height="298px"
          width={["328px", "328px", "338px", "349px"]}
          margin="1px"
          borderRadius="10px"
        >
          <Box
            opacity="0.9"
            width={["328px", "328px", "338px", "349px"]}
            height="298px"
            position="absolute"
            backgroundColor="myGreen.100"
            borderRadius="10px"
            zIndex={10}
          >
          </Box>
          <FormControl
            id="qty"
            width="130px"
            margin="0 auto"
            padding="10px"
            textAlign="center"
            paddingTop="30%"
            zIndex={10}
          >
            <Stack direction="row" align="center" justify="center">
              {product.stock ?
                (
                  <>
                    <Text fontWeight="semibold">Qtd:</Text>
                    <NumberInput color="black" min={1} value={qty} backgroundColor="white" borderRadius="10px" size="xs" >
                      <NumberInputField onChange={(e) => setQty(e.target.value)} />
                      <NumberInputStepper>
                        <NumberIncrementStepper onClick={e => setQty(qty + 1)} />
                        <NumberDecrementStepper onClick={e => (
                          qty > 1 && setQty(qty - 1)
                        )} />
                      </NumberInputStepper>
                    </NumberInput>
                  </>
                ) :
                (
                  <Text whiteSpace="nowrap" variant="error">Fora de estoque</Text>
                )
              }
            </Stack>
            <Button type="submit" variant="primary" marginTop="5px" onClick={addItem} disabled={!product.stock} >
              Adicionar
            </Button>
          </FormControl>
        </Box>
      }
      <Box
        border="1px"
        borderRadius="10px"
        borderColor="myGreen.300"
        height="300px"
        textAlign="center"
        p="10px"
      >
        <Box height="145px" width="200px" position="relative" p="10px 0" margin="0 auto">
          <NextImage src={product.image} alt="Produto" layout="fill" objectFit="contain" />
        </Box>
        <VStack spacing="0">
          <Text variant="productName" >
            {product.name}
          </Text>
          <Text variant="productDescription">
            {product.description}
          </Text>
          <Text variant="productCode">
            COD {product.cod}
          </Text>
        </VStack>
      </Box>

    </Box>
  );
};

export default ProductCard;