import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"

const GlobalWrapper = styled.div`
  margin-top: 1rem;
`

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <GlobalWrapper>
      <Navigation />
      <div>{children}</div>
    </GlobalWrapper>
  </>
)

export default MainLayout
