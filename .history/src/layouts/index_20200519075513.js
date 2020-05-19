import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import MobileMenuDrawer from "../components/Navigation/MobileMenuDrawer"
import Backdrop from "../components/Backdrop/Backdrop"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
    <Footer />
  </>
)

export default MainLayout
