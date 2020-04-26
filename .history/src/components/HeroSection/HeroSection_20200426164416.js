import React from "react"
import styled from "styled-components"

const HeroSectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1536px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const HeroSectionTextWrapper = styled.div`
  width: 40%;
`

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroSectionTextWrapper>
        <h1>
          Hi my name is Daniel Noworyta <br></br>
          UI/UX designer & developer.
        </h1>
        <p>
          Since I remember I enjoy doing web design and web development. I talk
          about my journey on my blog and YouTube channel.
        </p>
      </HeroSectionTextWrapper>
    </HeroSectionWrapper>
  )
}

export default HeroSection
