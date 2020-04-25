import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const IndexPage = () => (
  <>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/404/">Go to page 404</Link>
  </>
)

export default IndexPage
