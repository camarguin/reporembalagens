import { Container, Text } from '@chakra-ui/react';
import AdminHeader from './AdminHeader';
import Footer from './Footer';
import Header from './Header';

const AdminLayout = ({ children, isShortFooter, isUserPage }) => {
  return (
    <Container p="0" maxW maxWidth="1920px">
      <AdminHeader />
      {children}
      <footer>
        <Text variant="footer" textAlign="center" color="myGreen.300">
          Repor Embalagens 2021 © - Todos os direitos reservados
        </Text>
      </footer>
    </Container>
  );
};

export default AdminLayout;