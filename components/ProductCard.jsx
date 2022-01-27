import { useState, useContext } from 'react';
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
          >
          </Box>
          <FormControl
            id="qty"
            width="130px"
            margin="0 auto"
            padding="10px"
            textAlign="center"
            paddingTop="25%"
          >
            <Stack direction="row" align="center" justify="center">
              <Text fontWeight="semibold">Qtd:</Text>
              <NumberInput color="black" min={1} value={qty} backgroundColor="white" borderRadius="10px" size="xs" isDisabled={product.stock === 0} >
                <NumberInputField onChange={(e) => setQty(e.target.value)} />
                <NumberInputStepper>
                  <NumberIncrementStepper onClick={e => setQty(qty + 1)} />
                  <NumberDecrementStepper onClick={e => (
                    qty > 1 && setQty(qty - 1)
                  )} />
                </NumberInputStepper>
              </NumberInput>
            </Stack>

            <Button type="submit" variant="primary" marginTop="5px" onClick={addItem} disabled={product.stock === 0}>
              Adicionar
            </Button>
            {product.stock === 0 && <Text whiteSpace="nowrap" variant="error">* Sem Estoque</Text>}

          </FormControl>
        </Box>
      }
      <Box
        border="1px"
        borderRadius="10px"
        borderColor="myGreen.300"
        height="300px"
        textAlign="center"
      >
        <Box width="100%" maxHeight="150px" p="10px 0">
          <Image src={product.image} alt="Produto Imagem" boxSize="fit" margin="0 auto" maxHeight="140px" />
        </Box>
        <VStack spacing="0">
          <Text variant="productName">
            {product.name}
          </Text>
          <Text variant="productDescription">
            {product.description}
          </Text>
          <Text variant="productCode">
            COD {product.cod}
            {/* {product.stock} */}
          </Text>
        </VStack>
      </Box>

    </Box>
  );
};

export default ProductCard;