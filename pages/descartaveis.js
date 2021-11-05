import { Grid, Box } from "@chakra-ui/react"
import Layout from '../components/Layout'
import TitleBanner from '../components/TitleBanner'
import ProductCard from '../components/ProductCard'
import descartavelIcon from '../public/DescartaveisIcon.svg'
import { descartaveisProducts } from "../data/descartaveisProducts"
import CategoryProducts from "../components/CategoryProducts"

export default function Descartaveis() {
  return (
    <Layout>
      <TitleBanner titleName="Descartáveis" titleIcon="/DescartaveisIcon.svg" />
      <CategoryProducts products={descartaveisProducts} />
    </Layout>
  )
}
