import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import CategoryProducts from "../../components/CategoryProducts"
import { getData } from "../../utils/fetchData"

export default function Filmpvc({ products }) {
  return (
    <Layout titlePage="Repor - Film PVC">
      <TitleBanner titleName="Film PVC" titleIcon="/FilmPVC.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/filmpvc`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
