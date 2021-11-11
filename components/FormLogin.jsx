import NextLink from 'next/link';
import {
  Flex, FormControl, FormLabel, FormErrorMessage, Button,
  FormHelperText, Image, Input, useMediaQuery, Box, Text, Stack
} from "@chakra-ui/react"


const FormLogin = () => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)")

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
          <Text cursor="pointer" ><NextLink href="#"><u>Clique aqui para criar</u></NextLink></Text>
        </Flex>
        <FormControl id="email" width={["100%", "350px", "400px"]}>
          {/* <FormLabel>Email address</FormLabel> */}
          <Stack spacing={4}>
            <Input type="email" placeholder="Email de usuário" bgColor="gray.100" size="lg" />
            <Input type="password" placeholder="Senha de usuário" bgColor="gray.100" size="lg" />
          </Stack>
          <FormHelperText cursor="pointer" width="max-content">
            <NextLink href="#">Esqueci minha senha</NextLink>
          </FormHelperText>
          <Flex justify="center" py="20px">
            <Button variant="primary" padding="0px 40px" type="submit">
              Entrar
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

export default FormLogin;