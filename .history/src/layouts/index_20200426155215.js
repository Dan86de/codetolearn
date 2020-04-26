import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <div>{children}</div>
  </>
)

export default MainLayout
