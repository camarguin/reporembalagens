import React from 'react';
import dynamic from "next/dynamic";
import { Container } from '@chakra-ui/react';

const Chart = dynamic(
  () => import('react-apexcharts'), { ssr: false }
)


const AdminDashboard = ({ data }) => {
  const series = [{
    name: "Pedidos",
    data: data
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
    fill: {
      colors: ['#0C7149', '#000000', '#000000']
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