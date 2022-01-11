import Image from 'next/image';
import Link from 'next/link';
import { Container, Flex, Text, Button } from "@chakra-ui/react";
import reporLogo from '../public/ReporLogoMenu.svg';
import errorIllustration from '../public/error404.svg';

export default function Custom404() {
  return (
    <>
      <Container maxW textAlign="center" padding="10px 0px">
        <Link href="/">
          <Image src={reporLogo} />
        </Link>
        <Flex padding="0px 50px" justify="center" maxH="350px">
          <Image src={errorIllustration} width="300px" />
        </Flex>
        <Text variant="h1" color="myGreen.300">
          Página não econtrada
        </Text>
        <Link href="/">
          <Button variant="primary">
            Voltar para página inicial
          </Button>
        </Link>
      </Container>
    </>
  )
}