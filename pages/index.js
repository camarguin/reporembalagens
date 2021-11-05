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
        <Stack direction="column" spacing="5">
          <Text variant="h2">Test1</Text>
          <Products />
          <Products />
          <Products />
        </Stack>

      </Container>
    </Layout>
  )
}
