import React from 'react'
import FormSignup from '../../components/FormSignup'
import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'

export default function Cadastro() {
  return (
    <Layout isUserPage isShortFooter>
      <TitleBanner titleIcon="../Profile.svg" titleName="Cadastro" />
      <FormSignup />
    </Layout>
  )
}
