import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function Galvanotek({ products }) {
  return (
    <Layout titlePage="Repor - Galvanotek">
      <TitleBanner titleName="Galvanotek" titleIcon="/Galvanotek.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/galvanotek`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
