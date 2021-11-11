import NextLink from 'next/link';
import {
  Flex, FormControl, FormLabel, FormErrorMessage, Button,
  FormHelperText, Image, Input, useMediaQuery, Box, Text, Stack
} from "@chakra-ui/react"

const FormProfile = () => {
  return (
    <Flex direction="row" align={["left", "left", "center"]} justify="space-between">
      <Stack justifyContent="center" px={["10px", "20px", "50px"]} width="100%">
        <Text variant="h2">
          Insira seus dados
        </Text>
        <FormControl>
          <Stack spacing={3}>
            <Stack direction={["column", "row"]} spacing={4}>
              <Input type="text" placeholder="Nome" bgColor="gray.100" width={["100%", "60%"]} />
              <Input type="text" placeholder="Telefone" bgColor="gray.100" width={["100%", "40%"]} />
            </Stack>
            <Stack direction={["column", "row"]} spacing={4}>
              <Input type="text" placeholder="CPF/CNPJ" bgColor="gray.100" width={["100%", "40%"]} />
              <Input type="email" placeholder="Email" bgColor="gray.100" width={["100%", "60%"]} />
            </Stack>
          </Stack>
          <Text variant="h2" py="20px">
            Insira seu endereço
          </Text>
          <Stack spacing={3}>
            <Stack direction={["column", "row"]} spacing={4}>
              <Input type="text" placeholder="Rua / Número" bgColor="gray.100" width={["100%", "60%"]} />
              <Input type="text" placeholder="Bairro" bgColor="gray.100" width={["100%", "40%"]} />
            </Stack>
            <Stack direction={["column", "row"]} spacing={4}>
              <Input type="text" placeholder="Complemento" bgColor="gray.100" width={["100%", "40%"]} />
              <Input type="text" placeholder="CEP" bgColor="gray.100" width={["100%", "60%"]} />
            </Stack>
          </Stack>
          <Flex justify="center" py="50px">
            <Button variant="primary" padding="0px 40px">
              Salvar
            </Button>
          </Flex>
        </FormControl>
      </Stack>
    </Flex >
  );
};

export default FormProfile;