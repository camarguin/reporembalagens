import { Text, Box, useColorModeValue, HStack, Icon } from '@chakra-ui/react';
import { BsInboxes, BsPeople, BsCurrencyDollar } from 'react-icons/bs';
import React from 'react';
import AdminDashboardCard from './AdminDashboardCard';

const AdminDashboardInfo = ({ totalOrders, totalUsers, newOrders, newUsers, totalPaidOrders, newPaidOrders }) => {
  return (
    <HStack spacing={5}>
      <AdminDashboardCard
        cardIcon={BsInboxes}
        cardTitle="Pedidos Totais"
        cardNumber={totalOrders}
        cardIncrement={newOrders}
      />
      <AdminDashboardCard
        cardIcon={BsPeople}
        cardTitle="Usuários Totais"
        cardNumber={totalUsers}
        cardIncrement={newUsers}
      />
      <AdminDashboardCard
        cardIcon={BsCurrencyDollar}
        cardTitle="Pedidos Pagos"
        cardNumber={totalPaidOrders}
        cardIncrement={newPaidOrders}
      />
    </HStack >
  );
};

export default AdminDashboardInfo;