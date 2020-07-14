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
  margin-top: 2em;
  z-index: 999;
  color: var(--mainColor);
  &.active {
    color: white;
  }
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    font-size: var(--fontH4);
    text-decoration: none;
    font-weight: 700;
    display: none;
    @media only screen and (min-width: 768px) {
      display: block;
    }
    h2 {
      font-size: 29px;
      margin: 0;
      padding: 0;
      line-height: 10px;
      margin-top: 12px;
      margin-bottom: 8px;
      font-weight: bold;
      letter-spacing: 0.05em;
    }
    span {
      font-size: 12px;
      color: var(--mainGray);
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 0.4em;
      @media only screen and (min-width: 1280px) {
        color: var(--textOnMain);
      }
    }
    @media only screen and (min-width: 1280px) {
      color: white;
    }
  }
`

const LogoPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 12px;
  border: 3px solid var(--mainColor);
  &.active {
    border: 3px solid white;
  }
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: var(--mainColor);
    font-weight: 800;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 20px;
    margin: 0;
    transform: translateX(2px);
    transform: translateY(2px);
    @media only screen and (min-width: 1280px) {
      color: white;
    }
  }
  &.active span {
    color: white;
  }
  @media only screen and (min-width: 1280px) {
    border: 3px solid white;
  }
`

const MenuButtonWrapper = styled.a`
  display: flex;
  cursor: pointer;
  z-index: 999;
  color: var(--mainGray);
  margin-top: 12px;
  span {
    transition: all 0.15s linear;
    letter-spacing: 0.3em;
    display: none;
    @media only screen and (min-width: 1280px) {
      display: block;
    }
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
  @media only screen and (min-width: 1280px) {
    color: white;
  }
`

const Navigation = props => {
  return (
    <>
      <NavigationWrapper className={"contentWrapper"}>
        <LogoWrapper
          className={props.state.mobileMenuDrawerOpen ? "active" : ""}
        >
          <LogoPlaceholder
            className={props.state.mobileMenuDrawerOpen ? "active" : ""}
          >
            <span>PF</span>
          </LogoPlaceholder>
          <Link to="/" exact="true">
            <h2>Programistafrontend.pl</h2>
            <span>
              <strong>Web Developer Daniel Noworyta</strong>
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
