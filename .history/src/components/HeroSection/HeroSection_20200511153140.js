import React from "react"
import styled from "styled-components"

const HeroSectionWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  height: 87vh;
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

const HeroSectionSocialIconsWrapper = styled.div`
  width: 100%;
`

const InstagramIcon = styled.svg`
  filter: grayscale(100%) sepia(100%);
  &:hover {
    fill: #da4567;
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
      <HeroSectionSocialIconsWrapper>
        <InstagramIcon
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20.003"
          viewBox="0 0 20 20.003"
        >
          <path
            d="M39.37,22.506H25.658a3.146,3.146,0,0,0-3.144,3.147V39.365a3.145,3.145,0,0,0,3.144,3.144H39.37a3.145,3.145,0,0,0,3.144-3.144V25.653A3.146,3.146,0,0,0,39.37,22.506ZM37.243,24.82l2.513-.006h.006a.433.433,0,0,1,.438.432v2.522a.433.433,0,0,1-.435.435l-2.51.009a.433.433,0,0,1-.435-.432l-.009-2.522A.433.433,0,0,1,37.243,24.82Zm-7.795,5.97a3.925,3.925,0,0,1,.211-.333,3.508,3.508,0,0,1,5.708,0,3.55,3.55,0,0,1,.211.336,3.486,3.486,0,0,1,.456,1.715,3.521,3.521,0,0,1-7.042,0A3.471,3.471,0,0,1,29.449,30.789Zm11.118,7.855a1.92,1.92,0,0,1-1.918,1.918H26.379a1.92,1.92,0,0,1-1.918-1.918V30.456h2.986a5.224,5.224,0,0,0-.194.563,5.352,5.352,0,0,0-.208,1.489,5.468,5.468,0,1,0,10.728-1.489c-.057-.191-.119-.381-.194-.563h2.986Z"
            transform="translate(-22.514 -22.506)"
            fill="#555"
          />
        </InstagramIcon>
      </HeroSectionSocialIconsWrapper>
    </HeroSectionWrapper>
  )
}

export default HeroSection
