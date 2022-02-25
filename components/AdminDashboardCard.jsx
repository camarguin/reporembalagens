import React from 'react';
import { Box, useColorModeValue, Text, Icon } from '@chakra-ui/react';

const AdminDashboardCard = ({ cardTitle, cardIcon, cardNumber, cardIncrement }) => {
  return (
    <Box
      w="250px"
      // height="300px"
      bg={useColorModeValue('myGreen.50', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={10}
      textAlign={'center'}
    >
      <Icon as={cardIcon} boxSize="2rem" />
      <Text variant="dashboardCardTitle">
        {cardTitle}
      </Text>
      <Text variant="h1" padding="0px">
        {cardNumber}
      </Text>
      <Text variant="dashboardIncreased">
        +{cardIncrement}
      </Text>
    </Box>
  );
};

export default AdminDashboardCard;