import React from 'react'
import FormLogin from '../../components/FormLogin'
import Layout from '../../components/Layout'
import TitleBanner from '../../components/TitleBanner'

export default function Login() {
  return (
    <Layout isUserPage isShortFooter>
      <TitleBanner titleIcon="../Profile.svg" titleName="Login" />
      <FormLogin />
    </Layout>
  )
}
