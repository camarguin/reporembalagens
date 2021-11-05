import { Container, Text } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import TitleBanner from './TitleBanner';

const Layout = ({ children, isShortFooter, isUserPage }) => {
  return (
    <Container p="0" maxW maxWidth="1920px">
      <Header isUserPage={isUserPage} />
      {children}
      {!isShortFooter ?
        <Footer /> :
        <footer>
          <Text variant="footer" textAlign="center">
            Repor Embalagens 2021 © - Todos os direitos reservados
          </Text>
        </footer>
      }
    </Container>
  );
};

export default Layout;