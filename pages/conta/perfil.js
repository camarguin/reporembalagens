import React from 'react'
import FormProfile from '../../components/FormProfile'
import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'

export default function Perfil() {
  return (
    <Layout isShortFooter isUserPage>
      <TitleBanner titleIcon="../Profile.svg" titleName="Seu Perfil" />
      <FormProfile />
    </Layout>
  )
}
