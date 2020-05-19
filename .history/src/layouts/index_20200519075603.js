import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import MobileMenuDrawer from "../components/Navigation/MobileMenuDrawer"
import Backdrop from "../components/Backdrop/Backdrop"

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenuDrawerOpen: false,
    }
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { mobileMenuDrawerOpen: !prevState.mobileMenuDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ mobileMenuDrawerOpen: false })
  }

  render() {
    let backdrop

    if (this.state.mobileMenuDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <>
        <GlobalStyle />
        {backdrop}
        <MobileMenuDrawer
          linkClick={this.backdropClickHandler}
          show={this.state.mobileMenuDrawerOpen}
        />
        <Navigation
          mobileMenuDrawerClickHandler={this.drawerToggleClickHandler}
        />
        {this.props.children}
        <Footer />
      </>
    )
  }
}

export default MainLayout
