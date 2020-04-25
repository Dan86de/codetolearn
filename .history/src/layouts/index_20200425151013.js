import React from "react"
import styled from "styled-components"
import GlobalStyle from "../assets/styles/globalStyles"

const Wrapper = styled.div``

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <div>{children}</div>
  </>
)

export default MainLayout
