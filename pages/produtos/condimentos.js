import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function Condimentos({ products }) {
  return (
    <Layout titlePage="Repor - Condimentos">
      <TitleBanner titleName="Condimentos" titleIcon="/Condimentos.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/condimentos`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
