import React from 'react';
import { Image, Text, Button, Box, Flex } from '@chakra-ui/react';

const EmptyCart = () => {
  return (
    <Flex direction="column" justify="center" align="center" height="100%">
      <Box padding={["0px 10px", "0px 20px", "0px 50px"]}>
        <Image src="../EmptyCart.svg" alt="Categoria Icone" boxSize={["200px", "350px", "450px"]} />
      </Box>
      <Text variant="h2" fontWeight="black" color="white" textAlign="center">
        Carrinho vazio
      </Text>
      <Flex justify="center" py="30px">
        <Button variant="primary" bgColor="myGreen.100">
          Entrar em contato
        </Button>
      </Flex>
    </Flex>
  );
};

export default EmptyCart;