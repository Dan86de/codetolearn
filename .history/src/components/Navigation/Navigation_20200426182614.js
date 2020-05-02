import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoWrapper = styled.div`
  flex-grow: 2;
  a {
    font-size: var(--fontH3);
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
`

const MenuListItem = styled(Link)`
  font-weight: 700;
  font-size: var(--fontH5);
  text-decoration: none;
  color: inherit;
  padding: 0em 1.5em;
  cursor: pointer;
`

const NewsletterBtn = styled.button`
  background-color: black;
  color: white;
  font-size: var(--fontH5);
  border: 2px solid black;
  padding: 1em 2em;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
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
            <MenuListItem to="/about">About</MenuListItem>
          </MenuList>
        </MenuWrapper>
        <NewsletterBtn>Newsletter</NewsletterBtn>
      </NavigationWrapper>
    </>
  )
}
export default Navigation
