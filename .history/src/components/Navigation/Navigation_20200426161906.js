import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`

const LogoWrapper = styled.div`
  h1 {
    font-size: var(--fontH3);
  }
`

const MenuWrapper = styled.div``

const MenuList = styled.ul`
  display: flex;
  align-items: center;
`

const MenuList__Item = styled(Link)`
  font-weight: 700;
  font-size: var(--fontH5);
  text-decoration: none;
  color: inherit;
  padding: 0em 1.5em;
`

const Navigation = () => {
  return (
    <>
      <NavigationWrapper>
        <LogoWrapper>
          <h1>CodeToLearn</h1>
        </LogoWrapper>
        <MenuWrapper>
          <MenuList>
            <MenuList__Item to="/">Home</MenuList__Item>
            <MenuList__Item to="/blog">Blog</MenuList__Item>
            <MenuList__Item to="/about">About</MenuList__Item>
          </MenuList>
        </MenuWrapper>
      </NavigationWrapper>
    </>
  )
}
export default Navigation
