import React from "react"
import styled from "styled-components"

const HeroSectionWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  height: calc(100vh - 100px);
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const HeroSectionTextWrapper = styled.div`
  width: 40%;
  p {
    font-size: var(--fontH4);
    color: #555555;
  }
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
          about my journey on my{" "}
          <a
            href="http://codetolearn.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog
          </a>{" "}
          and{" "}
          <a
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube channel.
          </a>
        </p>
      </HeroSectionTextWrapper>
    </HeroSectionWrapper>
  )
}

export default HeroSection
