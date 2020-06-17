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
  z-index: 999;
  &.active {
    color: white;
  }
  cursor: pointer;
  a {
    font-size: var(--fontH4);
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    margin-top: 10px;
    h2 {
      font-size: 24px;
      margin: 0;
      padding: 0;
      line-height: 10px;
      margin-top: 10px;
    }
    span {
      font-size: 10px;
      opacity: 0.75;
      text-transform: none;
      strong {
        text-transform: uppercase;
      }
    }
  }
`

const MenuButtonWrapper = styled.a`
  display: flex;
  cursor: pointer;
  z-index: 999;
  color: var(--mainColor);
  span {
    transition: all 0.15s linear;
  }

  &.active {
    color: var(--textOnMain);
    opacity: 0.5;
  }
  &:hover span {
    opacity: 0.5;
  }
  &:hover b {
    opacity: 0.5;
    &:focus {
      outline: none;
    }
  }
  &.active:hover {
    color: white;
    opacity: 1;
  }
  &.active:hover b {
    opacity: 1;
  }
  &.active:hover span {
    opacity: 1;
  }
`

const Navigation = props => {
  return (
    <>
      <NavigationWrapper className={"contentWrapper"}>
        <LogoWrapper
          className={props.state.mobileMenuDrawerOpen ? "active" : ""}
        >
          <Link to="/" exact="true">
            <h2>Daniel Noworyta</h2>
            <span>
              <strong>Front End Developer</strong> &{" "}
              <strong>UI Designer</strong>
            </span>
          </Link>
        </LogoWrapper>
        <MenuButtonWrapper
          onClick={props.mobileMenuDrawerClickHandler}
          className={props.state.mobileMenuDrawerOpen ? "active" : ""}
        >
          <span>{props.state.mobileMenuDrawerOpen ? "Close" : "Menu"}</span>
          <MenuDrawerButton onActive={props.state.mobileMenuDrawerOpen} />
        </MenuButtonWrapper>
      </NavigationWrapper>
    </>
  )
}
export default Navigation
