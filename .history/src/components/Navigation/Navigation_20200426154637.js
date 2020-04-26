import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
    </LogoWrapper>
  )
}
export default Navigation
