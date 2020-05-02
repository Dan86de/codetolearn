import React from "react"
import styled from "styled-components"

const HeroSectionWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
`

const HeroSectionTextWrapper = styled.div`
  width: 50%;
`

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <h1>Hi my name is Daniel Noworyta UI/UX designer & developer.</h1>
      <p>
        Since I remember I enjoy doing web design and web development. I talk
        about my journey on my blog and YouTube channel.
      </p>
    </HeroSectionWrapper>
  )
}

export default HeroSection
