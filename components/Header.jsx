import React, { useContext, useState } from "react";
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from "next/router";
import { signOut, useSession } from 'next-auth/client'
import {
  Flex, Button, IconButton, Grid, useMediaQuery, useDisclosure, Accordion,
  AccordionItem, AccordionButton, AccordionPanel, Text
} from '@chakra-ui/react';
import { BiUserCircle, BiMenu } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import reporLogo from '../public/ReporLogoMenu.svg';
import whiteReporLogo from '../public/WhiteReporLogoMenu.svg';
import { DataContext } from "../context/GlobalState";
import MyCart from "./MyCart";

const Header = ({ isUserPage }) => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1023px)")
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [session, loading] = useSession()
  const { state, dispatch } = useContext(DataContext)
  const { cart } = state

  function openCart(e) {
    setIsCartOpen(!isCartOpen)
  }
  function closeCart(e) {
    setIsCartOpen(false)
  }

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
          {session?.user.type === 'admin' &&
            <Button variant="primary" margin="0px 10px" padding="5px 30px" onClick={() => router.push('/admin')}>
              Administrador
            </Button>
          }
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
          <span style={{
            // position: 'absolute',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '25px',
            height: '25px',
            borderRadius: '100%',
            background: '#0C7149',
            // right: '50px',
            right: '20px',
            top: '-5px',
            color: 'white',
            fontSize: '0.8rem',
            cursor: 'pointer',
          }} onClick={openCart}>
            {cart.length}
          </span>
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
      {(!isUserPage && !isSmallerThan1024) &&
        <Accordion allowToggle borderColor="myGreen.100">
          <AccordionItem>
            <AccordionButton>
              <IconButton
                aria-label="Ver mais"
                variant="link"
                color="myGreen.200"
                icon={<AiOutlineMenu />}
                fontSize={["2rem", "2rem", "2.1rem"]}
                _focus={{ outline: "none" }}
              />
              <Text variant="h2" margin="0 auto">Menu de Categorias</Text>
            </AccordionButton>
            <AccordionPanel>
              <Grid templateColumns='repeat(5, 1fr)' gap="20px 0px" >
                <NextLink href="/produtos/descartaveis">
                  <Button variant="link" as="a">
                    Descart??veis
                  </Button>
                </NextLink>
                <NextLink href="/produtos/isopor">
                  <Button variant="link" as="a">
                    Isopor
                  </Button>
                </NextLink>
                <NextLink href="/produtos/aluminio">
                  <Button variant="link" as="a">
                    Alum??nio
                  </Button>
                </NextLink>
                <NextLink href="/produtos/papel">
                  <Button variant="link" as="a">
                    Papel
                  </Button>
                </NextLink>
                <NextLink href="/produtos/galvanotek">
                  <Button variant="link" as="a">
                    Galvanotek
                  </Button>
                </NextLink>
                <NextLink href="/produtos/pleion">
                  <Button variant="link" as="a">
                    Pleion
                  </Button>
                </NextLink>
                <NextLink href="/produtos/plastico">
                  <Button variant="link" as="a">
                    Pl??stico
                  </Button>
                </NextLink>
                <NextLink href="/produtos/filmpvc">
                  <Button variant="link" as="a">
                    Film PVC
                  </Button>
                </NextLink>
                <NextLink href="/produtos/sacolas">
                  <Button variant="link" as="a">
                    Sacolas
                  </Button>
                </NextLink>
                <NextLink href="/produtos/sacos-plasticos">
                  <Button variant="link" as="a">
                    Sacos Pl??sticos
                  </Button>
                </NextLink>
                <NextLink href="/produtos/sacos-lixo">
                  <Button variant="link" as="a">
                    Sacos de Lixo
                  </Button>
                </NextLink>
                <NextLink href="/produtos/limpeza">
                  <Button variant="link" as="a">
                    Limpeza
                  </Button>
                </NextLink>
                <NextLink href="/produtos/suporte-acessorios">
                  <Button variant="link" as="a">
                    Suportes e Acess??rios
                  </Button>
                </NextLink>
                <NextLink href="/produtos/fitas">
                  <Button variant="link" as="a">
                    Fitas
                  </Button>
                </NextLink>
                <NextLink href="/produtos/acessorios-acougue">
                  <Button variant="link" as="a">
                    Acess??rios para A??ougue
                  </Button>
                </NextLink>
                <NextLink href="/produtos/condimentos">
                  <Button variant="link" as="a">
                    Condimentos
                  </Button>
                </NextLink>
                <NextLink href="/produtos/mundial">
                  <Button variant="link" as="a">
                    Mundial
                  </Button>
                </NextLink>
                <NextLink href="/produtos/luvas-mascaras-toucas">
                  <Button variant="link" as="a">
                    Luvas/M??scaras/Toucas
                  </Button>
                </NextLink>
                <NextLink href="/produtos/starret">
                  <Button variant="link" as="a">
                    Starrett
                  </Button>
                </NextLink>
              </Grid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      }
      {(isSmallerThan1024 && isOpen) &&
        <Grid
          padding="20px 20px"
          templateColumns='repeat(1, 1fr)'
          h="100vh"
          w="100%"
          zIndex={999}
          position="fixed"
          top="0"
          left="0"
          // justify="center"
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
              width="200px"
              p="0"
              m="0 auto"
              aria-label="Sua conta"
              variant="link"
              color="myGreen.50"
              icon={<BiUserCircle />}
              fontSize={["3rem", "3rem", "2.1rem"]}
              _focus={{ outline: "none" }}
            />
          </NextLink>
          <Grid
            templateColumns='repeat(2, 1fr)'
            gap="10px"
          >
            <NextLink href="/produtos/descartaveis">
              <Button variant="linkMobile" as="a" fontSize="2xl">
                Descart??veis
              </Button>
            </NextLink>
            <NextLink href="/produtos/isopor">
              <Button variant="linkMobile" as="a">
                Isopor
              </Button>
            </NextLink>
            <NextLink href="/produtos/aluminio">
              <Button variant="linkMobile" as="a">
                Alum??nio
              </Button>
            </NextLink>
            <NextLink href="/produtos/papel">
              <Button variant="linkMobile" as="a">
                Papel
              </Button>
            </NextLink>
            <NextLink href="/produtos/galvanotek">
              <Button variant="linkMobile" as="a">
                Galvanotek
              </Button>
            </NextLink>
            <NextLink href="/produtos/pleion">
              <Button variant="linkMobile" as="a">
                Pleion
              </Button>
            </NextLink>
            <NextLink href="/produtos/plastico">
              <Button variant="linkMobile" as="a">
                Pl??stico
              </Button>
            </NextLink>
            <NextLink href="/produtos/filmpvc">
              <Button variant="linkMobile" as="a">
                Film PVC
              </Button>
            </NextLink>
            <NextLink href="/produtos/sacolas">
              <Button variant="linkMobile" as="a">
                Sacolas
              </Button>
            </NextLink>
            <NextLink href="/produtos/fitas">
              <Button variant="linkMobile" as="a">
                Fitas
              </Button>
            </NextLink>
            <NextLink href="/produtos/mundial">
              <Button variant="linkMobile" as="a">
                Mundial
              </Button>
            </NextLink>
            <NextLink href="/produtos/limpeza">
              <Button variant="linkMobile" as="a">
                Limpeza
              </Button>
            </NextLink>
          </Grid>
          <Grid>
            <NextLink href="/produtos/suporte-acessorios">
              <Button variant="linkMobile" as="a">
                Suportes e Acess??rios
              </Button>
            </NextLink>
            <NextLink href="/produtos/sacos-plasticos">
              <Button variant="linkMobile" as="a">
                Sacos Pl??sticos
              </Button>
            </NextLink>
            <NextLink href="/produtos/acessorios-acougue">
              <Button variant="linkMobile" as="a">
                Acess??rios para A??ougue
              </Button>
            </NextLink>
            <NextLink href="/produtos/condimentos">
              <Button variant="linkMobile" as="a">
                Condimentos
              </Button>
            </NextLink>
            <NextLink href="/produtos/sacos-lixo">
              <Button variant="linkMobile" as="a">
                Sacos de Lixo
              </Button>
            </NextLink>
            <NextLink href="/produtos/luvas-mascaras-toucas">
              <Button variant="linkMobile" as="a">
                Luvas/M??scaras/Toucas
              </Button>
            </NextLink>
            <NextLink href="/produtos/starret">
              <Button variant="linkMobile" as="a">
                Starrett
              </Button>
            </NextLink>
          </Grid>
        </Grid>
      }
      {isCartOpen &&
        <MyCart closeOnClick={closeCart} user={session?.user} />
      }
    </Flex>
  );
};

export default Header;