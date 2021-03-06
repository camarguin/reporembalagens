import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Flex, FormControl, Button, Image, Input, useMediaQuery, Box, Text, Stack, useToast } from "@chakra-ui/react"
import valid from '../utils/valid'

const FormSignup = () => {
  const toast = useToast()
  const router = useRouter()
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)")
  const initialState = { email: '', password: '', cfpassword: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password, cfpassword } = userData

  function handleChangeInput(e) {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const errMsg = valid(email, password, cfpassword)
    if (errMsg) {
      return toast({
        title: 'Erro',
        description: errMsg,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
        cfpassword: userData.cfpassword,
      }),
    }).then(response => {
      // console.log(response)
      if (response.status === 400) {
        return toast({
          title: 'Erro',
          description: 'Email ja esta sendo usado',
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      }
      else {
        toast({
          title: 'Conta criada',
          description: 'Sua conta foi criada com sucesso, por favor entre com sua conta',
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        router.push('/conta')
      }
    })
  }

  return (
    <Flex direction="row" align={["left", "left", "center"]} justify="space-between">
      <Stack justifyContent="center" px={["10px", "20px", "50px"]} width="100%">
        <Text variant="h2">
          Crie sua conta
        </Text>
        <Flex direction="row">
          <Text>
            J?? possui conta? &nbsp;
          </Text>
          <Text cursor="pointer" ><NextLink href="/conta/login"><u>Clique aqui para entrar</u></NextLink></Text>
        </Flex>
        <FormControl id="form" width={["100%", "350px", "400px"]}>
          <Stack spacing={4}>
            <Input id="email" type="email" name="email" value={email} onChange={handleChangeInput} placeholder="Email de usu??rio" bgColor="gray.100" size="lg" />
            <Input id="password" type="password" name="password" value={password} onChange={handleChangeInput} placeholder="Senha de usu??rio" bgColor="gray.100" size="lg" />
            <Input id="cfpassword" type="password" name="cfpassword" value={cfpassword} onChange={handleChangeInput} placeholder="Confirme sua senha" bgColor="gray.100" size="lg" />
          </Stack>
          <Flex justify="center" align="center" marginTop="20px">
            <Button onClick={handleSubmit} variant="primary" padding="0px 40px" maxW="150px">
              Criar
            </Button>
          </Flex>
        </FormControl>
      </Stack>
      {
        !isSmallerThan800 &&
        <Box padding="0px 50px">
          <Image src="../IllustrationLogin.svg" alt="Categoria Icone" boxSize="450px" />
        </Box>
      }
    </Flex >
  );
};

export default FormSignup;