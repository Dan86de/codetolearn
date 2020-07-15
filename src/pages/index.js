import React from "react"

import HeroSection from "../components/HeroSection/HeroSection"
import SignUp from "../components/SignUp/SignUp"
import useSiteMetadata from "../hooks/use-site-metadata"

const IndexPage = ({ location }) => {
  const { siteURL } = useSiteMetadata()
  const currentUrl = `${siteURL}${location.pathname}`
  return (
    <>
      <HeroSection></HeroSection>
      <SignUp></SignUp>
    </>
  )
}

export default IndexPage
