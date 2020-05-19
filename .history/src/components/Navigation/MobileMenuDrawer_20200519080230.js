import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MobileMenuDrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0 0.5);
  transition: transform 0.3s ease-out;
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
`

const MobileMenuDrawer = props => {
  return (
    <MobileMenuDrawerWrapper show={props.show}>
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
