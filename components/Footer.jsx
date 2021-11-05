import { Container, Image, Text, Stack, Box } from '@chakra-ui/react';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <Container
      bgColor="myGreen.300"
      px={["10px", "20px", "50px"]}
      marginTop="50px"
      maxW
    >
      <Stack
        direction={["column", "row", "row"]}
        justify={["center", "space-between", "space-between"]}
        align={["center", "flex-start", "flex-start"]}
        p="30px 0px 0px 0px"
        spacing={["7", "0", "0"]}
        textAlign="center"
        color="white"
      >
        <Box textAlign="center" justify="center" >
          <Image src="/FooterLogo.svg" width={["100px", "150px", "200px"]} margin="0 auto" />
          <Text fontSize={["0.7rem", "0.7rem", "1rem"]}>
            CNPJ: 34.257.689/0001-56
          </Text>
        </Box>
        <Box>
          <Text fontSize={["1rem", "0.9rem", "1rem"]} fontWeight="extrabold">Nossa Localização</Text>
          <Text fontSize={["1rem", "0.7rem", "1rem"]}>
            Av. Fernando Vilela, 915 - Martins <br />
            Uberlândia - MG <br />
            38400-456
          </Text>
        </Box>
        <Box>
          <Text fontSize={["1rem", "0.9rem", "1rem"]} fontWeight="extrabold">Nosso Telefone</Text>
          <Text fontSize={["1rem", "0.7rem", "1rem"]}>
            (34) 99767-3100 <br />
            (34) 99209-6772
          </Text>
        </Box>
        <Box>
          <Text fontSize={["1rem", "0.9rem", "1rem"]} fontWeight="extrabold">Entre em Contato</Text>
          <Stack direction="row" fontSize={["2rem", "1.8rem", "2.7rem"]} justify="center">
            <AiOutlineInstagram />
            <AiOutlineWhatsApp />
          </Stack>
        </Box>
      </Stack>
      <Text fontSize={["0.9rem", "1rem", "1.2rem"]} variant="footer" color="white" textAlign="center">
        Repor Embalagens 2021 © - Todos os direitos reservados
      </Text>
    </Container>
  );
};

export default Footer;