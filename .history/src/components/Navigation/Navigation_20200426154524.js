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
            <Link>Home</Link>
            <Link>Blog</Link>
            <Link>About</Link>
          </ul>
        </MenuWrapper>
      </NavigationWrapper>
    </LogoWrapper>
  )
}
export default Navigation
