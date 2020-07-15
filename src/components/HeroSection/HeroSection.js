import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import heroBgSvg from "../../assets/images/bg/bgHeroDark.svg"

const HeroSectionWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  &::before {
    content: "";
    display: none;
    width: 100%;
    height: 100%;
    background-image: url(${heroBgSvg});
    background-repeat: no-repeat;
    position: absolute;
    top: -92px;
    left: 0;
    @media only screen and (min-width: 1280px) {
      display: block;
    }
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  @media only screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    flex-direction: row;
    min-height: calc(100vh - 90px);
    align-items: flex-end;
  }
`

const HeroSectionTextWrapper = styled.div`
  width: 100%;
  align-self: flex-end;
  transform: translateY(-75%);
  z-index: 99;
  span {
    font-size: var(--fontBody);
    text-transform: uppercase;
    color: var(--mainGray);
    line-height: 3em;
  }
  h2 {
    line-height: 1em;
    margin: 0;
    @media only screen and (min-width: 768px) {
      font-size: 72px;
    }
  }
  p {
    font-size: 14px;
    color: #555555;
    margin-top: 1rem;
    line-height: 1.3rem;
    @media only screen and (min-width: 768px) {
      line-height: 1.8rem;
      font-size: 20px;
    }

    @media only screen and (min-width: 1920px) {
      font-size: 22px;
    }
  }
  @media only screen and (min-width: 768px) {
    transform: translateY(-150%);
  }
  @media only screen and (min-width: 1024px) {
    transform: translateY(-170%);
  }
  @media only screen and (min-width: 1280px) {
    width: 60%;
    transform: translateY(-10%);
  }
  @media only screen and (min-width: 1920px) {
    transform: translateY(-20%);
  }
`

const HeroImgContainer = styled(Img)`
  width: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 85%);
  mask-image: linear-gradient(180deg, white, white, transparent 80%);
  transform: translateY(-5%);
  @media only screen and (min-width: 768px) {
    transform: translateY(0%);
  }
  @media only screen and (min-width: 1280px) {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    mask-image: none;
    display: block;
    width: 400px;
    position: relative;
  }
  @media only screen and (min-width: 1920px) {
    width: 600px;
  }
`

const HeroSection = () => {
  const bottomEdge = window.scrollY + window.innerHeight
  const heroImageData = useStaticQuery(query)
  console.log(bottomEdge)
  return (
    <HeroSectionWrapper>
      <ContentWrapper className={"contentWrapper"}>
        <HeroSectionTextWrapper>
          <span>Daniel Noworyta</span>
          <h2>Front end web developer</h2>
          <p>
            Przez 10 lat byłem inżynierem i pracowałem dla większości dużych
            marek samochodowych. Z bagażem doświadczeń, rodziną i 30 na karku
            postanowiłem coś zmienić. Postanowiłem, że zostanę frontend web
            developerem . . .
          </p>
        </HeroSectionTextWrapper>
        <HeroImgContainer fluid={heroImageData.file.childImageSharp.fluid} />
      </ContentWrapper>
    </HeroSectionWrapper>
  )
}

export const query = graphql`
  {
    file(name: { eq: "HERO_IMAGE" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default HeroSection
