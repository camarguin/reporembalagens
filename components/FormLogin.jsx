import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client'
import {
  Flex, FormControl, Button, FormHelperText, Image, Input, useMediaQuery, Box, Text, Stack, useToast,
} from "@chakra-ui/react"

const FormLogin = ({ providers, csrfToken }) => {
  const toast = useToast()
  const router = useRouter()
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)")
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData
  const [isLoading, setIsLoading] = useState(false)

  function handleChangeInput(e) {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    const status = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password
    })
    if (status.error) {
      setIsLoading(false)
      return toast({
        title: 'Erro',
        description: status.error,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
    setUserData(initialState)
    setIsLoading(false)
    return router.push('/conta')
  }

  return (
    <Flex direction="row" align={["left", "left", "center"]} justify="space-between">
      <Stack justifyContent="center" px={["10px", "20px", "50px"]} width="100%">
        <Text variant="h2">
          Entre com sua conta
        </Text>
        <Flex direction="row">
          <Text>
            Não possui conta? &nbsp;
          </Text>
          <Text cursor="pointer" ><NextLink href="/conta/cadastro"><u>Clique aqui para criar</u></NextLink></Text>
        </Flex>
        <FormControl id="loginForm" width={["100%", "350px", "400px"]} >
          <Stack spacing={4}>
            <Input id="email" type="email" name="email" value={email} onChange={handleChangeInput} placeholder="Email de usuário" bgColor="gray.100" size="lg" />
            <Input id="password" type="password" name="password" value={password} onChange={handleChangeInput} placeholder="Senha de usuário" bgColor="gray.100" size="lg" />
          </Stack>
          <FormHelperText cursor="pointer" width="max-content">
            {/* <NextLink href="#">Esqueci minha senha</NextLink> */}
          </FormHelperText>
          <Flex direction="column" justify="center" align="center" py="20px">
            <Button onClick={handleSubmit} isLoading={isLoading} variant="primary" padding="0px 40px" type="submit" maxW="150px" marginBottom="10px">
              Entrar
            </Button>
            {/* <Stack direction="row" align="center" width="100%" marginBottom="10px">
              <hr style={{ width: "100%" }} />
              <Text textAlign="center">Ou</Text>
              <hr style={{ width: "100%" }} />
            </Stack> */}
            {/* <Button onClick={() => console.log()} >
              <FcGoogle fontSize="1.5rem" style={{ marginRight: "5px" }} />
              Entrar com Google
            </Button> */}
            <input type="hidden" defaultValue={csrfToken} />
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

export default FormLogin;