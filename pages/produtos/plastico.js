import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function Plastico({ products }) {
  return (
    <Layout>
      <TitleBanner titleName="Plástico" titleIcon="/Plastico.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/plastico`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
