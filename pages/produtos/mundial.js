import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function Mundial({ products }) {
  return (
    <Layout titlePage="Repor - Mundial">
      <TitleBanner titleName="Mundial" titleIcon="/Mundial.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/mundial`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
