import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

const GlobalWrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1208px;
  }
  @media only screen and (min-width: 1920px) {
    max-width: 1536px;
  }
  @media only screen and (min-width: 2560px) {
    max-width: 1744px;
  }
`

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <GlobalWrapper>{children}</GlobalWrapper>
    <Footer />
  </>
)

export default MainLayout
