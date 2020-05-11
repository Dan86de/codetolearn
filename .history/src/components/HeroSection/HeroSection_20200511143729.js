import React from "react"
import styled from "styled-components"

const HeroSectionWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  height: 85vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const HeroSectionTextWrapper = styled.div`
  width: 100%;
  h1 {
    line-height: 1.2;
  }
  p {
    font-size: var(--fontH5);
    color: #555555;
    line-height: 1.5;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroSectionTextWrapper>
        <h1>Cześć, nazywam się Daniel Noworyta i chcę być programistą.</h1>
        <p>
          Odkąd pamiętam interesowały mnie strony internetowe i biznes w
          internecie. Opowiadam o swojej internetowej podróży na moim{" "}
          <a
            href="http://codetolearn.pl/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            blogu
          </a>{" "}
          i{" "}
          <a
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            kanale YouTube.
          </a>
        </p>
      </HeroSectionTextWrapper>
    </HeroSectionWrapper>
  )
}

export default HeroSection
