import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function Fitas({ products }) {
  return (
    <Layout>
      <TitleBanner titleName="Fitas" titleIcon="/Fitas.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/fitas`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}