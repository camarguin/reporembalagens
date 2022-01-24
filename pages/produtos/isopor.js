import React from 'react'
import CategoryProducts from '../../components/CategoryProducts'
import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'
import { getData } from "../../utils/fetchData"

export default function Isopor({ products }) {
  return (
    <Layout titlePage="Repor - Isopor">
      <TitleBanner titleName="Isopor" titleIcon="/Isopor.svg" />
      <CategoryProducts products={products} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await getData(`product/isopor`);
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
