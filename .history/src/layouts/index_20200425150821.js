import React from "react"
import styled from "styled-components"
import GlobalStyle from '../assets/styles/globalStyles'

const Wrapper = styled.div`
  font-family: "Varela Round", sans-serif;
`

const MainLayout = ({ children }) => (
<GlobalStyle/>
<Wrapper>{children}</Wrapper>
)

export default MainLayout
