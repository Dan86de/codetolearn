import React, { Component } from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import MobileMenuDrawer from "../components/Navigation/MobileMenuDrawer"

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenuDrawerOpen: false,
      scrollDisable: false,
    }
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        mobileMenuDrawerOpen: !prevState.mobileMenuDrawerOpen,
        scrollDisable: !prevState.scrollDisable,
      }
    })
  }

  backdropClickHandler = () => {
    this.setState({ mobileMenuDrawerOpen: false, scrollDisable: false })
  }

  render() {
    return (
      <>
        <GlobalStyle scroll={this.state.scrollDisable} />
        <MobileMenuDrawer
          linkClick={this.backdropClickHandler}
          show={this.state.mobileMenuDrawerOpen}
          click={this.backdropClickHandler}
        />
        <Navigation
          mobileMenuDrawerClickHandler={this.drawerToggleClickHandler}
          state={this.state}
        />
        {this.props.children}
        <Footer />
      </>
    )
  }
}

export default MainLayout
