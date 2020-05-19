import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.div`
  height: 50px;
  @media only screen and (min-width: 768px) {
    display: block;
    width: 100%;
    height: 65px;
    max-width: 1032px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const LogoWrapper = styled.div`
  flex-grow: 2;
  font-family: "Montserrat";
  a {
    font-size: var(--fontH4);
    text-decoration: none;
    color: inherit;
    font-weight: 700;
  }
`

const MenuWrapper = styled.div``

const MenuList = styled.ul`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 2em;
    font-family: "Montserrat";
  }
`

const MenuListItem = styled(Link)`
  font-weight: 700;
  font-size: var(--fontBody);
  text-decoration: none;
  color: inherit;
  padding: 0em 1.5em;
  cursor: pointer;
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

const Navigation = () => {
  return (
    <>
      <NavigationWrapper>
        <LogoWrapper>
          <Link to="/" exact="true">
            CodeToLearn
          </Link>
        </LogoWrapper>
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
