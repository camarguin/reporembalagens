import { Text, Container, Stack } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Products from "../components/Products";

export default function Home() {
  return (
    <Layout isLongFooter={false}>
      <Text variant="h1" color="myGreen.300" align="center" fontSize={["1.3rem", "2rem", "2.5rem"]}>
        Embalagens em Geral
      </Text>
      <Container w="95%" maxW maxWidth="1920px">
        <Stack direction="column" spacing="4">
          <Text variant="h2">Descartáveis</Text>
          <Products />
          <Text variant="h2">Isopor</Text>
          <Products />
          <Text variant="h2">Alumínio</Text>
          <Products />
          <Text variant="h2">Papel</Text>
          <Products />
          <Text variant="h2">Sacolas</Text>
          <Products />
        </Stack>

      </Container>
    </Layout>
  )
}
