import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MobileMenuDrawerButton from "../Navigation/MobileMenuDrawerButton"

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoWrapper = styled.div`
  flex-grow: 2;
  font-family: "Montserrat";
  margin-top: 10px;
  a {
    font-size: var(--fontH4);
    text-decoration: none;
    color: inherit;
    font-weight: 700;
  }
`

const MenuWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    padding: 1em 0px;
  }
`

const MenuList = styled.ul`
  display: none;
  font-family: "Montserrat";
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

const MenuListItem = styled(Link)`
  font-weight: 700;
  font-size: var(--fontBody);
  text-decoration: none;
  color: inherit;
  padding: 0em 1.5em;
  cursor: pointer;
  &:last-of-type {
    padding-right: 0;
  }
`

const NewsletterBtn = styled.button`
  display: none;
  @media only screen and (min-width: 768px) {
    background-color: black;
    color: white;
    font-size: var(--fontBody);
    border: 2px solid black;
    padding: 0.8em 1.6em;
    font-weight: 700;
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: black;
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
        <MobileMenuDrawerButton click={props.mobileMenuDrawerClickHandler} />
        <MenuWrapper>
          <MenuList>
            <MenuListItem to="/">Home</MenuListItem>
            <MenuListItem to="/blog">Blog</MenuListItem>
            <MenuListItem to="/about">O mnie</MenuListItem>
          </MenuList>
        </MenuWrapper>
        <NewsletterBtn>Newsletter</NewsletterBtn>
      </NavigationWrapper>
    </>
  )
}
export default Navigation
