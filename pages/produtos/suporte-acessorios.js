import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function SuporteAcessorios({ products }) {
  return (
    <Layout>
      <TitleBanner titleName="Suportes e acessórios " titleIcon="/SuporteAcessorios.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/suporteacessorios`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
