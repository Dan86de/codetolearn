import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MenuDrawerButton from "../Navigation/MenuDrawerButton"

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BrandWrapper = styled.div`
  z-index: 999;
  margin-top: 20px;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--mainColor);
  }
  &.active a {
    color: var(--textOnMain);
  }
`

const LogoPlaceholder = styled.div`
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  width: 48px;
  border: 3px solid var(--mainColor);
  border-radius: 5px;
  &.active {
    border: 3px solid var(--textOnMain);
    span {
      color: var(--textOnMain);
    }
  }
  span {
    font-size: 20px;
    line-height: 39px;
    letter-spacing: 0.1em;
    font-weight: 800;
    padding-left: 2px;
    transform: translateY(1px);
    @media only screen and (min-width: 1280px) {
      color: ${props =>
        props.currentPath === "/" ? "var(--textOnMain)" : "var(--mainColor)"};
    }
  }

  @media only screen and (min-width: 1280px) {
    border: ${props =>
      props.currentPath === "/"
        ? "3px solid var(--textOnMain)"
        : "3px solid var(--mainColor)"};
  }
`

const BrandTextWrapper = styled.div`
  z-index: 999;
  flex-direction: column;
  display: none;
  transform: translateY(2px);
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    margin: 0;
    padding: 0;
    line-height: 1em;
    font-size: var(--fontH3);
  }
  span {
    font-size: 12px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--mainGray);
    letter-spacing: 0.3em;
  }
  &.active {
    h2 {
      color: var(--textOnMain);
    }
    span {
      color: var(--secondaryGray);
    }
  }
  @media only screen and (min-width: 1280px) {
    h2 {
      color: ${props =>
        props.currentPath === "/" ? "var(--textOnMain)" : "var(--mainColor)"};
      color: ${props =>
        props.currentPath === "/thanks" || props.currentPath === "/confirm"
          ? "var(--mainColor)"
          : "var(--textOnMain)"};
    }
    span {
      color: ${props =>
        props.currentPath === "/" ? "var(--secondaryGray)" : "var(--mainGray)"};
      color: ${props =>
        props.currentPath === "/thanks" || props.currentPath === "/confirm"
          ? "var(--mainGray)"
          : "var(--secondaryGray)"};
    }
  }
`

const MenuButtonWrapper = styled.a`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-top: 16px;
  &.active {
    span {
      color: var(--textOnMain);
    }
  }
  &.active:hover {
    span {
      color: var(--mainGray);
    }
    i {
      background-color: var(--mainGray);
    }
  }
  span {
    color: var(--mainColor);
    transition: all 0.15s linear;
    letter-spacing: 0.3em;
    display: none;
    z-index: 999;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 2px;
    margin-right: 0.5em;
  }
  @media only screen and (min-width: 1280px) {
    span {
      display: block;
      color: ${props =>
        props.currentPath === "/" ? "var(--textOnMain)" : "var(--mainColor)"};
    }
  }
`

const Navigation = props => {
  return (
    <>
      <NavigationWrapper className={"contentWrapper"}>
        <BrandWrapper
          className={props.state.mobileMenuDrawerOpen ? "active" : ""}
          currentPath={
            typeof window !== "undefined" ? window.location.pathname : "/"
          }
        >
          <Link to="/" exact="true">
            <LogoPlaceholder
              className={props.state.mobileMenuDrawerOpen ? "active" : ""}
              currentPath={
                typeof window !== "undefined" ? window.location.pathname : "/"
              }
            >
              <span>PF</span>
            </LogoPlaceholder>
            <BrandTextWrapper
              className={props.state.mobileMenuDrawerOpen ? "active" : ""}
              currentPath={
                typeof window !== "undefined" ? window.location.pathname : "/"
              }
            >
              <h2>Programistafrontend.pl</h2>
              <span>Web Developer Daniel Noworyta</span>
            </BrandTextWrapper>
          </Link>
        </BrandWrapper>
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
