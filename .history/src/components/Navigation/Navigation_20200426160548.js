import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const LogoWrapper = styled.div`
  font-size: var(--fontH5);
`

const MenuWrapper = styled.div`
  font-size: var(--fontH4);
`

const Navigation = () => {
  return (
    <>
      <NavigationWrapper>
        <LogoWrapper>
          <h1>CodeToLearn</h1>
        </LogoWrapper>
        <MenuWrapper>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
          </ul>
        </MenuWrapper>
      </NavigationWrapper>
    </>
  )
}
export default Navigation
