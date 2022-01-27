import React from 'react';
import NextLink from 'next/link';
import { Box, Button } from '@chakra-ui/react';

const SeeMoreCard = ({ categoryHref }) => {
  return (
    <Box
      border="1px"
      borderRadius="10px"
      margin="0 auto"
      borderColor="myGreen.300"
      height="300px"
      width="350px"
      textAlign="center"
    >
      <NextLink href={categoryHref}>
        <Button variant="primary" cursor="pointer" marginTop="35%">
          Ver mais
        </Button>
      </NextLink>
    </Box >
  );
};

export default SeeMoreCard;