import { Stack, Text, Button, Flex } from '@chakra-ui/react';
import { AiFillEye } from 'react-icons/ai';

const MyInfo = () => {
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
        <Text><strong>Nome: </strong> Rodrigo Nascimento da Silva</Text>
        <Text><strong>Telefone: </strong> (34) 91919-919191</Text>
        <Flex direction="row">
          <Text><strong>CPF/CNPJ: </strong> ***.***.789-10</Text>
          <Button variant="link" _focus={{ outline: "none" }} color="black">
            <AiFillEye />
          </Button>
        </Flex>
        <Text><strong>Email: </strong> email@email.com.br</Text>
      </Stack>
      <Text variant="h2" textAlign="center">
        Meu Endereço
      </Text>
      <Stack>
        <Text><strong>Rua/Número: </strong> Rua Amancio Flor, 999</Text>
        <Text><strong>Bairro: </strong> Jardim Scandinavia</Text>
        <Text><strong>Complemento: </strong> Casa</Text>
        <Text><strong>CEP: </strong> 12345-678</Text>
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