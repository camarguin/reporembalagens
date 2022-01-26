import React from "react";
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from "next/router";
import {
  Flex, Button, HStack, useMediaQuery, useDisclosure, Box
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/client'
import reporLogo from '../public/ReporLogoMenu.svg';
import whiteReporLogo from '../public/WhiteReporLogoMenu.svg';
import { DataContext } from "../context/GlobalState";

const AdminHeader = ({ isUserPage }) => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1023px)")
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure()
  const [session, loading] = useSession()

  return (
    <Flex direction="row" justify="space-between" py={["5px", "5px", "10px"]} px={["10px", "20px", "50px"]} bgColor="myGreen.50">
      <HStack color="myGreen.300" direction="row" spacing="6" fontSize="1.2rem" fontWeight="600">
        <NextLink href="/admin/produtos">
          Produtos
        </NextLink>
        <NextLink href="/admin/pedidos">
          Pedidos
        </NextLink>
        <NextLink href="/admin/usuarios">
          Usuarios
        </NextLink>
      </HStack>
      <Flex _hover={{ cursor: "pointer" }}>
        <NextLink href="/">
          <Image src={reporLogo} width="90px" height="50px" />
        </NextLink>
      </Flex>
      <HStack>
        <Button bgColor="white" color="myGreen.300" height="30px" margin="0px 10px" padding="5px 30px" onClick={() => router.push('/conta')}>
          Minha Conta
        </Button>
        {session &&
          <Button bgColor="white" color="myGreen.300" height="30px" margin="0px 10px" padding="5px 30px" onClick={() => signOut()}>
            Sair
          </Button>
        }
      </HStack>
    </Flex>
  );
};

export default AdminHeader;