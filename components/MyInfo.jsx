import { useRouter } from 'next/router';
import { Stack, Text, Button, Flex, Tooltip, Icon } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const MyInfo = ({ user, userId, noInfo }) => {
  const router = useRouter()
  const [hiddenCpf, setHiddenCpf] = useState(true)
  const hiddenCpfCharacters = '***********'

  function handleHideCPF() {
    setHiddenCpf(!hiddenCpf)
  }
  function handleRedirect(e) {
    router.push('conta/perfil')
  }

  return (
    <Stack
      width={["100%", "100%", "600px"]}
      height="510px"
      justify="space-between"
      marginBottom={["20px", "20px", "0"]}
    >
      {noInfo &&
        <Tooltip label="Suas informações estão incompletas" aria-label='A tooltip' placement='auto-start'>
          <WarningTwoIcon color="red.600" fontSize="2rem" />
        </Tooltip>
      }
      <Text variant="h2" textAlign="center">
        Minhas informações
      </Text>
      <Stack>
        <Text><strong>Nome: </strong> {user.name}</Text>
        <Text><strong>Telefone: </strong> {user.phone}</Text>
        <Flex direction="row">
          <Text><strong>CPF/CNPJ: </strong> {user.cpf && (
            hiddenCpf ? hiddenCpfCharacters : user.cpf
          )}</Text>
          <Button variant="link" _focus={{ outline: "none" }} color="black" onClick={handleHideCPF}>
            {hiddenCpf ? <AiFillEye /> : <AiFillEyeInvisible />}
          </Button>
        </Flex>
        <Text><strong>Email: </strong> {user.email}</Text>
      </Stack>
      <Text variant="h2" textAlign="center">
        Meu Endereço
      </Text>
      <Stack>
        <Text><strong>Rua/Número: </strong> {user.address.street}</Text>
        <Text><strong>Bairro: </strong> {user.address.district}</Text>
        <Text><strong>Complemento: </strong> {user.address.complement}</Text>
        <Text><strong>CEP: </strong> {user.address.cep}</Text>
      </Stack>
      <Flex justify="center" bottom="0">
        <Button variant="primary" maxWidth="130px" onClick={handleRedirect}>
          {noInfo ? 'Atualizar' : 'Alterar'}
        </Button>
      </Flex>
    </Stack>
  );
};

export default MyInfo;