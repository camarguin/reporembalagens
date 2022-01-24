import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function Descartavel({ products }) {
  return (
    <Layout titlePage="Repor - Descartáveis">
      <TitleBanner titleName="Descartáveis" titleIcon="/DescartaveisIcon.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/descartavel`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
