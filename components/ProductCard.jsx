import {
  Box, Image, Text, VStack, Stack, Button, Container, NumberInput,
  NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
  FormControl, FormLabel
} from '@chakra-ui/react';
import { useState } from 'react';

const ProductCard = ({ productImg, productName, productDesc, productCod }) => {
  const [isHover, setIsHover] = useState(false)
  const [qty, setQty] = useState(1)

  function over(e) {
    setIsHover(true);
  }
  function out(e) {
    setIsHover(false);
  }

  return (
    <Box
      borderColor="myGreen.300"
      margin="0 auto"
      width="350px"
      height="250px"
      onMouseEnter={over}
      onMouseLeave={out}
    >
      {isHover &&
        <Box
          position="absolute"
          height="248px"
          width="348px"
          margin="1px"
          borderRadius="10px"
        >
          <Box
            opacity="0.5"
            width="348px"
            height="248px"
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
              <NumberInput color="black" min={1} value={qty} backgroundColor="white" borderRadius="10px" size="xs">
                <NumberInputField onChange={(e) => setQty(e.target.value)} />
                <NumberInputStepper>
                  <NumberIncrementStepper onClick={e => setQty(qty + 1)} />
                  <NumberDecrementStepper onClick={e => (
                    qty > 1 && setQty(qty - 1)
                  )} />
                </NumberInputStepper>
              </NumberInput>
            </Stack>
            <Button type="submit" variant="primary" marginTop="5px" onClick={() => console.log(qty)}>
              Adicionar
            </Button>
          </FormControl>
        </Box>
      }
      <Box
        border="1px"
        borderRadius="10px"
        borderColor="myGreen.300"
        // width="350px"
        height="250px"
        textAlign="center"

      >
        <Box width="100%" maxHeight="150px" p="10px 0">
          <Image src={productImg} alt="Produto Imagem" boxSize="fit" margin="0 auto" maxHeight="150px" />
        </Box>
        <VStack spacing="0">
          <Text variant="productName">
            {productName}
          </Text>
          <Text variant="productDescription">
            {productDesc}
          </Text>
          <Text variant="productCode">
            {productCod}
          </Text>
        </VStack>
      </Box>

    </Box>
  );
};

export default ProductCard;