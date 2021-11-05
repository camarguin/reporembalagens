import {
  Flex, FormControl, FormLabel, FormErrorMessage,
  FormHelperText, Image, Input, useMediaQuery, Box, Text
} from "@chakra-ui/react"

const FormLogin = ({ type }) => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)")

  return (
    <Flex direction="row" align="center">
      <Box width="60%" justifyContent="center" padding="0 50px">
        <Text variant="h2">
          Entre com sua conta
        </Text>
        <FormControl id="email" width="400px">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </Box>
      {!isSmallerThan800 &&
        <Box width="40%" padding="0px 50px">
          <Image src="./IllustrationLogin.svg" alt="Categoria Icone" boxSize="400px" />
        </Box>
      }
    </Flex>
  );
};

export default FormLogin;