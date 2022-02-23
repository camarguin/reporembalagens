import { useState } from "react";
import Link from "next/link";
import { Text, Container, Stack } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import Layout from "../components/Layout";
import Products from "../components/Products";
import { getData } from "../utils/fetchData";

export default function Home({ products, result }) {
  const [productsList, setProductsList] = useState(products);

  return (
    <Layout isLongFooter={false} titlePage="Repor - Embalagens em Geral">
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
          <Link href="/produtos/descartaveis">
            <Text variant="h2">Descartáveis</Text>
          </Link>
          <Products myProducts={productsList.filter((product) => product.category.includes("descartavel"))} categoryHref="/produtos/descartaveis" />
          <Link href="/produtos/isopor">
            <Text variant="h2">Isopor</Text>
          </Link>
          <Products myProducts={productsList.filter((product) => product.category.includes("isopor"))} categoryHref="/produtos/isopor" />
          <Link href="/produtos/aluminio">
            <Text variant="h2">Alumínio</Text>
          </Link>
          <Products myProducts={productsList.filter((product) => product.category.includes("aluminio"))} categoryHref="/produtos/aluminio" />
          <Link href="/produtos/papel">
            <Text variant="h2">Papel</Text>
          </Link>
          <Products myProducts={productsList.filter((product) => product.category.includes("papel"))} categoryHref="/produtos/papel" />
          <Link href="/produtos/sacolas">
            <Text variant="h2">Sacolas</Text>
          </Link>
          <Products myProducts={productsList.filter((product) => product.category.includes("sacola"))} categoryHref="/produtos/sacolas" />
        </Stack>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getData("product/homeProducts");
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
