import { Container, Text } from '@chakra-ui/react';
import Head from 'next/head'
import AdminHeader from './AdminHeader';

const AdminLayout = ({ children, titlePage }) => {
  return (
    <Container p="0" maxW maxWidth="1920px">
      <Head>
        <title>{titlePage}</title>
      </Head>
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