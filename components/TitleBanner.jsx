import { Container, Text, Flex, Image, Box } from '@chakra-ui/react'

const TitleBanner = ({ titleName, titleIcon }) => {
  return (
    <Container maxWidth bgColor="myGreen.300" px={["10px", "20px", "50px"]} py={["0", "0", "4"]} marginBottom="50px">
      <Flex direction="row" align="center">
        <Image src={titleIcon} alt="Categoria Icone" boxSize={["45px", "70px", "90px"]} />
        <Box w="100%" textAlign={["center", "center", "left"]}>
          <Text variant="h1" color="white" px="20px" fontSize={["1.3rem", "2rem", "2.5rem"]} marginRight={["15%", "10%", "0"]}>
            {titleName}
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default TitleBanner;