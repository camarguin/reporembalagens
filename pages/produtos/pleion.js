import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function Pleion({ products }) {
  return (
    <Layout titlePage="Repor - Pleion">
      <TitleBanner titleName="Pleion" titleIcon="/Pleion.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/pleion`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
