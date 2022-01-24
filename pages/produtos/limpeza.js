import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function Limpeza({ products }) {
  return (
    <Layout titlePage="Repor - Limpeza">
      <TitleBanner titleName="Limpeza" titleIcon="/Limpeza.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/limpeza`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
