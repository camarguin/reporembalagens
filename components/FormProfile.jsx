import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Flex, FormControl, Button, Input, Text, Stack, useToast } from "@chakra-ui/react"

const FormProfile = ({ onSubmit, user }) => {
  const toast = useToast()
  const router = useRouter()
  const initialState = {
    name: user.name,
    phone: user.phone,
    cpf: user.cpf,
    street: user.address.street,
    district: user.address.district,
    complement: user.address.complement,
    cep: user.address.cep
  }
  const [userData, setUserData] = useState(initialState)
  const { name, phone, cpf, street, district, complement, cep } = userData
  function handleChangeInput(e) {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  async function handleSubmit(e) {
    const userId = user._id
    const res = await fetch(`/api/user/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userData.name,
        phone: userData.phone,
        cpf: userData.cpf,
        street: userData.street,
        district: userData.district,
        complement: userData.complement,
        cep: userData.cep,
      })
    }).then(response => (
      toast({
        title: 'Conta atualizada',
        description: 'Suas informações foram salvas com sucesso',
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    ))
    router.push('/conta')
  }

  return (
    <Flex direction="row" align={["left", "left", "center"]} justify="space-between">
      <Stack justifyContent="center" px={["10px", "20px", "50px"]} width="100%">
        <Text variant="h2">
          Insira seus dados
        </Text>
        <FormControl id='profile'>
          <Stack spacing={3}>
            <Stack direction={["column", "row"]} spacing={4}>
              <Input type="text" id="name" name="name" value={name} onChange={handleChangeInput}
                placeholder="Nome" bgColor="gray.100" width={["100%", "60%"]} />
              <Input type="text" id="phone" name="phone" value={phone} onChange={handleChangeInput}
                placeholder="Telefone" bgColor="gray.100" width={["100%", "40%"]} />
            </Stack>
            <Stack direction={["column", "row"]} spacing={4}>
              <Input type="text" id="cpf" name="cpf" value={cpf} onChange={handleChangeInput}
                placeholder="CPF/CNPJ" bgColor="gray.100" width={["100%", "40%"]} />
              {/* <Input type="email" placeholder="Email" bgColor="gray.100" width={["100%", "60%"]} /> */}
            </Stack>
          </Stack>
          <Text variant="h2" py="20px">
            Insira seu endereço
          </Text>
          <Stack spacing={3}>
            <Stack direction={["column", "row"]} spacing={4}>
              <Input type="text" id="street" name="street" value={street} onChange={handleChangeInput}
                placeholder="Rua / Número" bgColor="gray.100" width={["100%", "60%"]} />
              <Input type="text" id="district" name="district" value={district} onChange={handleChangeInput}
                placeholder="Bairro" bgColor="gray.100" width={["100%", "40%"]} />
            </Stack>
            <Stack direction={["column", "row"]} spacing={4}>
              <Input type="text" id="complement" name="complement" value={complement} onChange={handleChangeInput} placeholder="Complemento" bgColor="gray.100" width={["100%", "40%"]} />
              <Input type="text" id="cep" name="cep" value={cep} onChange={handleChangeInput} placeholder="CEP" bgColor="gray.100" width={["100%", "60%"]} />
            </Stack>
          </Stack>
          <Flex justify="center" py="50px">
            <Button onClick={handleSubmit} variant="primary" padding="0px 40px">
              Salvar
            </Button>
          </Flex>
        </FormControl>
      </Stack>
    </Flex >
  );
};

export default FormProfile;
