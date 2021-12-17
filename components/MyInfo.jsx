import { Stack, Text, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';

const MyInfo = ({ user, userId }) => {
  return (
    <Stack
      width={["100%", "100%", "600px"]}
      height="510px"
      justify="space-between"
      marginBottom={["20px", "20px", "0"]}
    >
      <Text variant="h2" textAlign="center">
        Minhas informações
      </Text>
      <Stack>
        <Text><strong>Nome: </strong> {user.name}</Text>
        <Text><strong>Telefone: </strong> {user.phone}</Text>
        <Flex direction="row">
          <Text><strong>CPF/CNPJ: </strong> {user.cpf}</Text>
          <Button variant="link" _focus={{ outline: "none" }} color="black">
            <AiFillEye />
          </Button>
        </Flex>
        <Text><strong>Email: </strong> {user.email}</Text>
      </Stack>
      <Text variant="h2" textAlign="center">
        Meu Endereço
      </Text>
      <Stack>
        <Text><strong>Rua/Número: </strong> {user.address?.street}</Text>
        <Text><strong>Bairro: </strong> {user.address.district}</Text>
        <Text><strong>Complemento: </strong> {user.address?.complement}</Text>
        <Text><strong>CEP: </strong> {user.address?.cep}</Text>
      </Stack>
      <Flex justify="center" bottom="0">
        <Button variant="primary" maxWidth="130px">
          Alterar
        </Button>
      </Flex>
    </Stack>
  );
};

export default MyInfo;