import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.div`
  display: none;
  margin: 0 auto;
  width: 100%;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
    display: block;
    width: 100%;
    margin: 1rem auto 0rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1208px;
  }
  @media only screen and (min-width: 1920px) {
    max-width: 1536px;
  }
  @media only screen and (min-width: 2560px) {
    max-width: 1744px;
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
  display: flex;
  align-items: center;
  margin-right: 2em;
  font-family: "Montserrat";
`

const MenuListItem = styled(Link)`
  font-weight: 700;
  font-size: var(--fontBody);
  text-decoration: none;
  color: inherit;
  padding: 0em 1em;
  cursor: pointer;
`

const NewsletterBtn = styled.button`
  background-color: black;
  color: white;
  font-size: var(--fontH5);
  border: 2px solid black;
  padding: 0.6em 1.6em;
  font-weight: 700;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
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