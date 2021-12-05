import { Stack, Text, Button, Flex } from '@chakra-ui/react';
import { AiFillEye } from 'react-icons/ai';

const MyInfo = ({ user, userId }) => {
  console.log(user)
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
        <Text><strong>Telefone: </strong> {user.telefone}</Text>
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
        <Text><strong>Rua/Número: </strong> {user.endereco?.rua}</Text>
        <Text><strong>Bairro: </strong> {userId}</Text>
        <Text><strong>Complemento: </strong> {user.endereco?.complemento}</Text>
        <Text><strong>CEP: </strong> {user.endereco?.cep}</Text>
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