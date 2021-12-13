import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function Starret({ products }) {
  return (
    <Layout>
      <TitleBanner titleName="Starret" titleIcon="/Starret.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/starret`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
