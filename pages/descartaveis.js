import { Grid, Box } from "@chakra-ui/react"
import Layout from '../components/Layout'
import TitleBanner from '../components/TitleBanner'
import ProductCard from '../components/ProductCard'
import descartavelIcon from '../public/DescartaveisIcon.svg'
import { descartaveisProducts } from "../data/descartaveisProducts"
import CategoryProducts from "../components/CategoryProducts"
import { getData } from "../utils/fetchData"

export default function Descartaveis({ products }) {
  console.log(products)
  return (
    <Layout>
      <TitleBanner titleName="Descartáveis" titleIcon="/DescartaveisIcon.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await getData("product/descartavel");
  console.log(res)
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
