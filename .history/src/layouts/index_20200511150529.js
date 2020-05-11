import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

const GlobalWrapper = styled.div`
  margin-top: 1rem;
`
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
`

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <GlobalWrapper>
      <Navigation />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </GlobalWrapper>
  </>
)

export default MainLayout
