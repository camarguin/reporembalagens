import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function SacosLixo({ products }) {
  return (
    <Layout titlePage="Repor - Sacos de Lixo">
      <TitleBanner titleName="Sacos de Lixo" titleIcon="/SacoLixo.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/sacoslixo`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
