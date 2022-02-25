import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = ({ options, data }) => {

  return (
    <Flex direction="row" width="320px">
      <Doughnut
        options={options}
        data={data}
      />
    </Flex>
  );
};

export default AdminDashboard;