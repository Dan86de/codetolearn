import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

const GlobalWrapper = styled.div`
  margin-top: 1rem;
`
const GlobalWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
`

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <GlobalWrapper>
      <ContentWrapper>
        <Navigation />
        {children}
        <Footer />
      </ContentWrapper>
    </GlobalWrapper>
  </>
)

export default MainLayout
