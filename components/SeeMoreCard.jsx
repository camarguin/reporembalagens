import React from 'react';
import NextLink from 'next/link';
import { Flex, Button } from '@chakra-ui/react';

const SeeMoreCard = ({ categoryHref }) => {
  return (
    <Flex
      border="1px"
      borderRadius="10px"
      margin="0 auto"
      borderColor="myGreen.300"
      height="300px"
      width={["330px", "330px", "340px", "350px"]}
      maxW={["85vw", "350px", "340px", "350px"]}
      justify="center"
      align="center"
    >
      <NextLink href={categoryHref}>
        <Button variant="primary" cursor="pointer" >
          Ver mais
        </Button>
      </NextLink>
    </Flex >
  );
};

export default SeeMoreCard;