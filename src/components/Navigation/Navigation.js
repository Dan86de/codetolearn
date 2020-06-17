import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MenuDrawerButton from "../Navigation/MenuDrawerButton"

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 10px;
  }
`

const LogoWrapper = styled.div`
  flex-grow: 2;
  margin-top: 10px;
  a {
    font-size: var(--fontH4);
    text-decoration: none;
    color: inherit;
    font-weight: 700;
  }
`

const MenuButtonWrapper = styled.a`
  display: flex;
  cursor: pointer;
  &:hover span {
    opacity: 0.5;
  }
  &:hover button {
    justify-content: space-between;
    opacity: 0.5;
    &:focus {
      outline: none;
    }
  }
`

const Navigation = props => {
  return (
    <>
      <NavigationWrapper className={"contentWrapper"}>
        <LogoWrapper>
          <Link to="/" exact="true">
            ProgramistaFrontEnd
          </Link>
        </LogoWrapper>
        <MenuButtonWrapper>
          <span>Menu</span>{" "}
          <MenuDrawerButton click={props.mobileMenuDrawerClickHandler} />
        </MenuButtonWrapper>
      </NavigationWrapper>
    </>
  )
}
export default Navigation
