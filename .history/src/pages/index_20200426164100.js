import React from "react"
import { Link } from "gatsby"

import HeroSection from "../components/HeroSection/HeroSection"

const IndexPage = () => (
  <>
    <HeroSection></HeroSection>
    <Link to="/404/">Go to page 404</Link>
  </>
)

export default IndexPage
