import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function Sacolas({ products }) {
  return (
    <Layout titlePage="Repor - Sacolas">
      <TitleBanner titleName="Sacolas" titleIcon="/Sacola.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/sacolas`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
