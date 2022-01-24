import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function AcessoriosAcougue({ products }) {
  return (
    <Layout titlePage="Repor - Acessórios para açougue">
      <TitleBanner titleName="Acessórios para açougue" titleIcon="/AcessoriosAcougue.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/acessoriosacougue`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
