import React, { useState } from "react";
import Image from 'next/image';
import NextLink from 'next/link';
import { Flex, Button, IconButton, HStack, VStack, useMediaQuery, useDisclosure } from '@chakra-ui/react';
import { BiUserCircle, BiMenu } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { signOut, useSession } from 'next-auth/client'
import reporLogo from '../public/ReporLogoMenu.svg';
import whiteReporLogo from '../public/WhiteReporLogoMenu.svg';
import MyCart from "./MyCart";

const Header = ({ isUserPage }) => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1023px)")
  const { isOpen, onToggle } = useDisclosure()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [session, loading] = useSession()

  function openCart(e) {
    setIsCartOpen(!isCartOpen)
  }
  function closeCart(e) {
    setIsCartOpen(false)
  }
  // console.log(session)

  return (
    <Flex direction="column" bgColor={["myGreen.300", "myGreen.300", "white"]} py={["2", "1", "0"]} px={["10px", "20px", "50px"]}>
      <Flex w="100%" justify="space-between" align="center" h={["50px", "60px", "80px"]} >

        <IconButton
          aria-label="Seu carrinho"
          variant="link"
          color={["white", "white", "myGreen.300"]}
          icon={<AiOutlineShoppingCart />}
          onClick={openCart}
          display={["flex", "flex", "none"]}
          fontSize={["2rem", "2rem", "2.1rem"]}
          _focus={{ outline: "none" }}
        />
        <Flex height={["40px", "50px", "70px"]} color={["white", "white", "myGreen.300"]} _hover={{ cursor: "pointer" }}>
          <NextLink href="/">
            {isSmallerThan1024 ? <Image src={whiteReporLogo} /> : <Image src={reporLogo} />}
          </NextLink>
        </Flex>
        <Flex display={["none", "none", "flex"]}>
          {session &&
            <Button variant="primary" margin="0px 10px" padding="5px 30px" onClick={() => signOut()}>
              Sair
            </Button>
          }
          <NextLink href="/conta">
            <IconButton
              aria-label="Sua conta"
              variant="link"
              color="myGreen.300"
              icon={<BiUserCircle />}
              fontSize={["2rem", "2rem", "2.1rem"]}
              _focus={{ outline: "none" }}
            />
          </NextLink>
          <IconButton
            aria-label="Seu carrinho"
            variant="link"
            color="myGreen.300"
            icon={<AiOutlineShoppingCart />}
            fontSize={["2rem", "2rem", "2.1rem"]}
            _focus={{ outline: "none" }}
            onClick={openCart}
          />
        </Flex>
        <IconButton
          aria-label="Abrir menu"
          variant="link"
          color={["white", "white", "myGreen.300"]}
          icon={<BiMenu />}
          display={["flex", "flex", "none"]}
          fontSize="2.5rem"
          onClick={onToggle}
          _focus={{ outline: "none" }}
        />
      </Flex>
      {!isUserPage &&
        <HStack align="center" justify="center" spacing="8" display={["none", "none", "flex"]} py="10px">
          <NextLink href="/descartaveis">
            <Button variant="link" as="a">
              Descartáveis
            </Button>
          </NextLink>
          <NextLink href="/isopor">
            <Button variant="link" as="a">
              Isopor
            </Button>
          </NextLink>
          <NextLink href="/aluminio">
            <Button variant="link" as="a">
              Alumínio
            </Button>
          </NextLink>
          <NextLink href="/papel">
            <Button variant="link" as="a">
              Papel
            </Button>
          </NextLink>
          <NextLink href="/galvanotek">
            <Button variant="link" as="a">
              Galvanotek
            </Button>
          </NextLink>
          <NextLink href="/pleion">
            <Button variant="link" as="a">
              Pleion
            </Button>
          </NextLink>
          <NextLink href="/plastico">
            <Button variant="link" as="a">
              Plástico
            </Button>
          </NextLink>
          <NextLink href="/filmpvc">
            <Button variant="link" as="a">
              Film PVC
            </Button>
          </NextLink>
        </HStack>
      }
      {(isSmallerThan1024 && isOpen) &&
        <VStack
          h="100vh"
          w="100%"
          zIndex={999}
          position="fixed"
          top="0"
          left="0"
          justify="center"
          bgColor="myGreen.300"
          overflowY="auto"
        >
          <IconButton
            aria-label="Fechar menu"
            variant="link"
            position="absolute"
            right="30px"
            top="20px"
            color={["white", "white", "myGreen.300"]}
            icon={<AiOutlineClose />}
            display={["flex", "flex", "none"]}
            fontSize="2rem"
            onClick={onToggle}
            _focus={{ outline: "none" }}
          />
          <NextLink href="/conta">
            <IconButton
              aria-label="Sua conta"
              variant="link"
              color="myGreen.50"
              icon={<BiUserCircle />}
              fontSize={["2rem", "2rem", "2.1rem"]}
              _focus={{ outline: "none" }}

            />
          </NextLink>
          <NextLink href="/descartaveis">
            <Button variant="linkMobile" as="a" fontSize="2xl">
              Descartáveis
            </Button>
          </NextLink>
          <NextLink href="/isopor">
            <Button variant="linkMobile" as="a">
              Isopor
            </Button>
          </NextLink>
          <NextLink href="/aluminio">
            <Button variant="linkMobile" as="a">
              Alumínio
            </Button>
          </NextLink>
          <NextLink href="/papel">
            <Button variant="linkMobile" as="a">
              Papel
            </Button>
          </NextLink>
          <NextLink href="/galvanotek">
            <Button variant="linkMobile" as="a">
              Galvanotek
            </Button>
          </NextLink>
          <NextLink href="/pleion">
            <Button variant="linkMobile" as="a">
              Pleion
            </Button>
          </NextLink>
          <NextLink href="/plastico">
            <Button variant="linkMobile" as="a">
              Plástico
            </Button>
          </NextLink>
          <NextLink href="/filmpvc">
            <Button variant="linkMobile" as="a">
              Film PVC
            </Button>
          </NextLink>
        </VStack>
      }
      {isCartOpen &&
        <MyCart closeOnClick={closeCart} />
      }
    </Flex>
  );
};

export default Header;