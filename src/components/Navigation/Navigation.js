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
  &.active a h2 {
    color: white;
  }
  &.active a span {
    color: var(--textOnMain);
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
      color: var(--mainColor);
      @media only screen and (min-width: 1280px) {
        color: ${props =>
          props.currentPath === "/" ? "white" : "var(--mainColor)"};
      }
    }
    span {
      font-size: 12px;
      color: var(--mainGray);
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 0.4em;
      @media only screen and (min-width: 1280px) {
        color: ${props =>
          props.currentPath === "/" ? "var(--textOnMain)" : "var(--mainGray)"};
      }
    }
  }
`

const LogoPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  width: 50px;
  height: 50px;
  border: 3px solid var(--mainColor);
  border-radius: 5px;
  &.active {
    border: 3px solid white;
  }
  a {
    font-family: aktiv-grotesk, sans-serif;
    color: var(--mainColor);
    text-transform: uppercase;
    transform: translateX(6px);
    transform: translateY(2px);
    line-height: 20px;
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    &.active span {
      color: white;
    }
    span {
      font-size: 20px;
      letter-spacing: 0.1em;
      margin: 0;
      @media only screen and (min-width: 1280px) {
        color: ${props =>
          props.currentPath === "/" ? "white" : "var(--mainColor)"};
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    border: ${props =>
      props.currentPath === "/"
        ? "3px solid white"
        : "3px solid var(--mainColor)"};
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
      color: ${props =>
        props.currentPath === "/" ? "white" : "var(--mainColor)"};
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
`

const Navigation = props => {
  return (
    <>
      <NavigationWrapper className={"contentWrapper"}>
        <LogoWrapper
          className={props.state.mobileMenuDrawerOpen ? "active" : ""}
          currentPath={
            typeof window !== "undefined" ? window.location.pathname : "/"
          }
        >
          <LogoPlaceholder
            className={props.state.mobileMenuDrawerOpen ? "active" : ""}
            currentPath={
              typeof window !== "undefined" ? window.location.pathname : "/"
            }
          >
            <Link to="/" exact="true">
              <span>PF</span>
            </Link>
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
          className={props.state.mobileMenuDrawerOpen ? "active" : "/"}
          currentPath={
            typeof window !== "undefined" ? window.location.pathname : "/"
          }
        >
          <span>{props.state.mobileMenuDrawerOpen ? "Close" : "Menu"}</span>
          <MenuDrawerButton
            onActive={props.state.mobileMenuDrawerOpen}
            currentPath={
              typeof window !== "undefined" ? window.location.pathname : "/"
            }
          />
        </MenuButtonWrapper>
      </NavigationWrapper>
    </>
  )
}
export default Navigation
