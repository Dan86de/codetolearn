import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <div>{children}</div>
  </>
)

export default MainLayout
