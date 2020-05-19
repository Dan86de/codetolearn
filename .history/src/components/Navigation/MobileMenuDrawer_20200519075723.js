import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MobileMenuDrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 56;
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

const NavigationListItem = styled.li`
  padding: 1rem;
  font-size: 1rem;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    position: relative;
    @media (min-width: 1920px) {
      font-size: 1.25rem;
    }
  }
`
const MobileMenuDrawer = props => {
  return (
    <MobileMenuDrawerWrapper show={props.show}>
      <NavigationList>
        <NavigationListItem onClick={props.linkClick}>
          <Link to="/" exact="true">
            HOME
          </Link>
        </NavigationListItem>
        <Link to="/" exact="true">
          HOME
        </Link>
        <Link to="#portfolio">BLOG</Link>
        <Link to="#contact">O MNIE</Link>
      </NavigationList>
    </MobileMenuDrawerWrapper>
  )
}

export default injectIntl(MobileMenuDrawer)
