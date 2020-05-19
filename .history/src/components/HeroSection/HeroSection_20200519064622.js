import React from "react"
import styled from "styled-components"

const HeroSectionWrapper = styled.div`
  width: 100%;
  max-width: 1208px;
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
    font-size: var(--fontBody);
    color: #555555;
    line-height: 1.5;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`

const SocialIconsWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  display: flex;
  justify-content: center;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-decoration: none;
  }
`
const InstagramIcon = styled.svg`
  cursor: pointer;
  path:hover {
    fill: url("#brand-gradient");
  }
`

const FacebookIcon = styled.svg`
  cursor: pointer;
  path:hover {
    fill: #3b5998;
  }
`

const HeroSection = () => {
  return (
    <>
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
      <SocialIconsWrapper>
        <a
          href="https://www.instagram.com/codetolearn_pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            id="instaIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <defs>
              <linearGradient id="brand-gradient">
                <stop offset="0%" stopColor="#F8ED34" />
                <stop offset="50%" stopColor="#EA118D" />
                <stop offset="100%" stopColor="#2E368F" />
              </linearGradient>
            </defs>
            <path
              d="M39.37,22.506H25.658a3.146,3.146,0,0,0-3.144,3.147V39.365a3.145,3.145,0,0,0,3.144,3.144H39.37a3.145,3.145,0,0,0,3.144-3.144V25.653A3.146,3.146,0,0,0,39.37,22.506ZM37.243,24.82l2.513-.006h.006a.433.433,0,0,1,.438.432v2.522a.433.433,0,0,1-.435.435l-2.51.009a.433.433,0,0,1-.435-.432l-.009-2.522A.433.433,0,0,1,37.243,24.82Zm-7.795,5.97a3.925,3.925,0,0,1,.211-.333,3.508,3.508,0,0,1,5.708,0,3.55,3.55,0,0,1,.211.336,3.486,3.486,0,0,1,.456,1.715,3.521,3.521,0,0,1-7.042,0A3.471,3.471,0,0,1,29.449,30.789Zm11.118,7.855a1.92,1.92,0,0,1-1.918,1.918H26.379a1.92,1.92,0,0,1-1.918-1.918V30.456h2.986a5.224,5.224,0,0,0-.194.563,5.352,5.352,0,0,0-.208,1.489,5.468,5.468,0,1,0,10.728-1.489c-.057-.191-.119-.381-.194-.563h2.986Z"
              transform="translate(-11 -10)"
              fill="#555"
            />
          </InstagramIcon>
          <span>Instagram</span>
        </a>
        <a
          href="https://www.facebook.com/daniel.noworyta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            id="fbIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <path
              d="M32.483,0,29.889,0a4.555,4.555,0,0,0-4.8,4.922V7.191H22.485a.408.408,0,0,0-.408.408v3.288a.408.408,0,0,0,.408.408h2.608v8.3A.408.408,0,0,0,25.5,20h3.4a.408.408,0,0,0,.408-.408V11.3h3.049a.408.408,0,0,0,.408-.408V7.6a.408.408,0,0,0-.408-.408H29.31V5.268c0-.925.22-1.394,1.425-1.394h1.747a.408.408,0,0,0,.408-.408V.412A.408.408,0,0,0,32.483,0Z"
              transform="translate(-9.5 12.6)"
              fill="#555"
            />
          </FacebookIcon>
          <span>Facebook</span>
        </a>
      </SocialIconsWrapper>
    </>
  )
}

export default HeroSection
