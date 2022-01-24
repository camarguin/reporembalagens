import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function LuvasMascarasToucas({ products }) {
  return (
    <Layout titlePage="Repor - Luvas / Máscaras / Toucas">
      <TitleBanner titleName="Luvas / Máscaras / Toucas" titleIcon="/LuvasMascaraTouca.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/luvasmascarastoucas`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
