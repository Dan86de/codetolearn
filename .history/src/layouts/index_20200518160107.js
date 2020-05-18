import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
    <Footer />
  </>
)

export default MainLayout