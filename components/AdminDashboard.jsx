import React from 'react';
import dynamic from "next/dynamic";
import { Container } from '@chakra-ui/react';

const Chart = dynamic(
  () => import('react-apexcharts'), { ssr: false }
)


const AdminDashboard = () => {
  const series = [{
    name: "Pedidos",
    data: [10, 41, 35, 51, 49, 62, 69]
  }];
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Quantidade de pedidos por dia durante a semana',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    }
  };

  return (
    <Container>
      <Chart options={options} series={series} type="area" />
    </Container>
  );
};

export default AdminDashboard;