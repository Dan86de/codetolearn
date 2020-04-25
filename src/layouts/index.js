import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  font-family: "Varela Round", sans-serif;
`

const MainLayout = ({ children }) => <Wrapper>{children}</Wrapper>

export default MainLayout
