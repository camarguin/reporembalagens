import { Container, Text } from '@chakra-ui/react';
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';
import TitleBanner from './TitleBanner';

const Layout = ({ children, isShortFooter, isUserPage, titlePage }) => {
  return (
    <Container p="0" maxW maxWidth="1920px">
      <Head>
        <title>{titlePage}</title>
      </Head>
      <Header isUserPage={isUserPage} />
      {children}
      {!isShortFooter ?
        <Footer /> :
        <footer>
          <Text variant="footer" textAlign="center" color="myGreen.300">
            Repor Embalagens 2021 © - Todos os direitos reservados
          </Text>
        </footer>
      }
    </Container>
  );
};

export default Layout;