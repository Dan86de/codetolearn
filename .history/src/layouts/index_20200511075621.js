import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"

const GlobalWrapper = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
