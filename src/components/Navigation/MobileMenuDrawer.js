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
  opacity: 0.99;
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
  align-items: flex-start;
  z-index: 998;
  p {
    color: var(--textOnMain);
    letter-spacing: 3px;
    text-transform: uppercase;
    opacity: 0.25;
    padding-bottom: 20px;
  }
  a {
    color: var(--textOnMain);
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-size: var(--fontH2);
    font-weight: bold;
    position: relative;
    line-height: 60px;
    letter-spacing: 2px;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: calc(50% - 5px);
      left: -70%;
      width: 0;
      height: 5px;
      background-color: var(--textOnMain);
      transition: all 0.5s ease-in-out;
    }
    &:hover::before {
      width: 50%;
    }
  }
`

const MobileMenuDrawer = props => {
  return (
    <MobileMenuDrawerWrapper show={props.show}>
      <Backdropper click={props.click} />
      <NavigationList>
        <p>Menu :</p>
        <Link to="/" exact="true" onClick={props.linkClick}>
          Home
        </Link>
        <Link to="/blog" onClick={props.linkClick}>
          Blog
        </Link>
        <Link to="/about" onClick={props.linkClick}>
          About Me
        </Link>
      </NavigationList>
    </MobileMenuDrawerWrapper>
  )
}

export default MobileMenuDrawer
