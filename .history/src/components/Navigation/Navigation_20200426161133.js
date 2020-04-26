import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const LogoWrapper = styled.div`
  h1 {
    font-size: var(--fontH2);
  }
`

const MenuWrapper = styled.div``

const MenuList = styled.ul`
  display: flex;
`

const MenuList__Item = styled(Link)`
  a {
    font-size: var(--fontH4);
    font-weight: 700;
  }
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
