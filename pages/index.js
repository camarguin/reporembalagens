import { useState } from "react";
import Head from "next/head";
import { Text, Container, Stack } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import Layout from "../components/Layout";
import Products from "../components/Products";
import { getData } from "../utils/fetchData";
import ProductCard from "../components/ProductCard";

export default function Home({ products, result }) {
  const [productsList, setProductsList] = useState(products);
  // console.log(
  //   productsList.filter((product) => product.category.includes("descartavel"))
  // );
  console.log(products)
  return (
    <Layout isLongFooter={false}>
      <Head>
        <title>Repor - Embalagens em Geral</title>
      </Head>
      <Text
        variant="h1"
        color="myGreen.300"
        align="center"
        fontSize={["1.3rem", "2rem", "2.5rem"]}
      >
        Embalagens em Geral
      </Text>
      <Container w="95%" maxW maxWidth="1920px">
        <Stack direction="column" spacing="2">
          <Text variant="h2">Descartáveis</Text>
          <Products myProducts={productsList.filter((product) => product.category.includes("descartavel"))} />
          <Text variant="h2">Isopor</Text>
          <Products myProducts={productsList.filter((product) => product.category.includes("isopor"))} />
          <Text variant="h2">Alumínio</Text>
          <Products myProducts={productsList.filter((product) => product.category.includes("aluminio"))} />
          <Text variant="h2">Papel</Text>
          <Products myProducts={productsList.filter((product) => product.category.includes("papel"))} />
          <Text variant="h2">Sacolas</Text>
          <Products myProducts={productsList.filter((product) => product.category.includes("sacola"))} />
        </Stack>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await getData("product/homeProducts");
  console.log(res)
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
