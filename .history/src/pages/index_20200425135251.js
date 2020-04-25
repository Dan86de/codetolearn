import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  font-family: "Varela Round", sans-serif;
`

const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`

const IndexPage = () => (
  <Wrapper>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/404/">Go to page 404</Link>
  </Wrapper>
)

export default IndexPage
