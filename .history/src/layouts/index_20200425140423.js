import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  font-family: "Varela Round", sans-serif;
`

const MainLayout = ({ children }) => <Wrapper>{children}</Wrapper>

export default MainLayout
