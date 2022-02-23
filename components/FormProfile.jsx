import { useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, FormControl, Button, Input, Text, Stack, useToast, FormLabel, Box, Grid } from "@chakra-ui/react"

const FormProfile = ({ onSubmit, user }) => {
  const toast = useToast()
  const router = useRouter()
  const initialState = {
    name: user.name,
    phone: user.phone,
    cpf: user.cpf,
    email: user.email,
    street: user.address.street,
    district: user.address.district,
    complement: user.address.complement,
    cep: user.address.cep
  }
  const [userData, setUserData] = useState(initialState)
  const { name, phone, cpf, email, street, district, complement, cep } = userData
  function handleChangeInput(e) {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email)
  };

  const handleSubmit = async (e) => {
    const userId = user._id
    const validate = validateEmail(email)
    if (!validate) {
      return toast({
        title: 'Email invalido',
        description: 'Entre um email válido',
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
    const res = await fetch(`/api/user/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userData.name,
        phone: userData.phone,
        cpf: userData.cpf,
        email: userData.email,
        street: userData.street,
        district: userData.district,
        complement: userData.complement,
        cep: userData.cep,
      })
    }).then(response => (
      router.reload(),
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
            <Grid direction={["column", "row"]} templateColumns={["1fr", "1fr", "0.6fr 0.4fr"]} columnGap="20px">
              <Stack direction="column" spacing={0}>
                <FormLabel htmlFor='name'>Nome</FormLabel>
                <Input type="text" id="name" name="name" value={name} onChange={handleChangeInput}
                  placeholder="Nome" bgColor="gray.100" />
              </Stack>
              <Stack direction="column" spacing={0}>
                <FormLabel htmlFor='phone'>Telefone</FormLabel>
                <Input type="text" id="phone" name="phone" value={phone} onChange={handleChangeInput}
                  placeholder="Telefone" bgColor="gray.100" />
              </Stack>
            </Grid>
            <Grid direction={["column", "row"]} templateColumns={["1fr", "1fr", "0.4fr 0.6fr"]} columnGap="20px">
              <Stack direction="column" spacing={0}>
                <FormLabel htmlFor='cpf'>CPF/CNPJ</FormLabel>
                <Input type="text" id="cpf" name="cpf" value={cpf} onChange={handleChangeInput}
                  placeholder="CPF/CNPJ" bgColor="gray.100" />
              </Stack>
              <Stack direction="column" spacing={0}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input type="text" id="email" name="email" value={email} onChange={handleChangeInput}
                  placeholder="Email" bgColor="gray.100" isRequired />
              </Stack>
            </Grid>
          </Stack>
          <Text variant="h2" py="15px">
            Insira seu endereço
          </Text>
          <Stack spacing={3}>
            <Grid direction={["column", "row"]} templateColumns={["1fr", "1fr", "0.6fr 0.4fr"]} columnGap="20px">
              <Stack direction="column" spacing={0}>
                <FormLabel htmlFor='street' >Rua / Número</FormLabel>
                <Input type="text" id="street" name="street" value={street} onChange={handleChangeInput}
                  placeholder="Rua / Número" bgColor="gray.100" />
              </Stack>
              <Stack direction="column" spacing={0}>
                <FormLabel htmlFor='district'>Bairro</FormLabel>
                <Input type="text" id="district" name="district" value={district} onChange={handleChangeInput}
                  placeholder="Bairro" bgColor="gray.100" />
              </Stack>
            </Grid>
            <Grid direction={["column", "row"]} templateColumns={["1fr", "1fr", "0.4fr 0.6fr"]} columnGap="20px">
              <Stack direction="column" spacing={0}>
                <FormLabel htmlFor='complement'>Complemento</FormLabel>
                <Input type="text" id="complement" name="complement" value={complement} onChange={handleChangeInput}
                  placeholder="Complemento" bgColor="gray.100" />
              </Stack>
              <Stack direction="column" spacing={0}>
                <FormLabel htmlFor='cep'>CEP</FormLabel>
                <Input type="text" id="cep" name="cep" value={cep} onChange={handleChangeInput}
                  placeholder="CEP" bgColor="gray.100" />
              </Stack>
            </Grid>
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
