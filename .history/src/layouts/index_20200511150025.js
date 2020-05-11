import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

const GlobalWrapper = styled.div`
  margin-top: 1rem;
`

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <GlobalWrapper>
      <Navigation />
      {children}
      <Footer />
    </GlobalWrapper>
  </>
)

export default MainLayout
