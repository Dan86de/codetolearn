import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Backdropper from "../Backdrop/Backdrop"

const MobileMenuDrawerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  color: var(--textOnMain);
  opacity: 0.95;
  background-color: var(--mainColor);
  transition: all 0.3s linear;
  z-index: 996;
  ${props => {
    if (props.show) {
      return `transform: translateX(0%);`
    } else {
      return `transform: translateX(-100%);`
    }
  }}
`

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 998;
  a {
    color: var(--textOnMain);
    text-decoration: none;
    text-transform: uppercase;
  }
`

const MobileMenuDrawer = props => {
  return (
    <MobileMenuDrawerWrapper show={props.show}>
      <Backdropper click={props.click} />
      <NavigationList>
        <Link to="/" exact="true" onClick={props.linkClick}>
          HOME
        </Link>
        <Link to="/blog" onClick={props.linkClick}>
          BLOG
        </Link>
        <Link to="/about" onClick={props.linkClick}>
          O MNIE
        </Link>
      </NavigationList>
    </MobileMenuDrawerWrapper>
  )
}

export default MobileMenuDrawer
