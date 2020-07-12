import React from "react"
import styled from "styled-components"
<<<<<<< HEAD
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
=======
<<<<<<< Updated upstream
=======
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import heroBgSvg from "../../assets/images/bg/Group 205.svg"
>>>>>>> Stashed changes
>>>>>>> @{-1}

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
`

const HeroSectionTextWrapper = styled.div`
  width: 100%;
<<<<<<< HEAD
  align-self: flex-end;
  transform: translateY(-60%);
=======
<<<<<<< Updated upstream
  h2 {
=======
  align-self: flex-end;
>>>>>>> @{-1}
  span {
    font-size: var(--fontBody);
    text-transform: uppercase;
    color: var(--mainGray);
<<<<<<< HEAD
  }
  h2 {
    font-size: 72px;
    line-height: 1em;
=======
    line-height: 3em;
  }
  h2 {
    line-height: 1em;
>>>>>>> Stashed changes
>>>>>>> @{-1}
    margin: 0;
    @media only screen and (min-width: 768px) {
      font-size: 72px;
    }
  }
  p {
<<<<<<< HEAD
    font-size: 22px;
    line-height: 1.8rem;
    color: #555555;
    margin-top: 1rem;
=======
<<<<<<< Updated upstream
    font-size: var(--fontBody);
    color: #555555;
    line-height: 1.5;
=======
    color: #555555;
    margin-top: 1rem;
    @media only screen and (min-width: 768px) {
      line-height: 1.8rem;
      font-size: 20px;
    }
    @media only screen and (min-width: 1920px) {
      font-size: 22px;
    }
>>>>>>> Stashed changes
>>>>>>> @{-1}
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1280px) {
    width: 60%;
    transform: translateY(-30%);
  }
  @media only screen and (min-width: 1920px) {
    width: 670px;
    transform: translateY(-50%);
  }
`

<<<<<<< HEAD
const HeroImgContainer = styled(Img)`
  transform: translateY(-45px);
  @media only screen and (min-width: 768px) {
=======
<<<<<<< Updated upstream
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
    font-size: 12px;
=======
const HeroImgContainer = styled(Img)`
  @media only screen and (min-width: 768px) {
>>>>>>> Stashed changes
>>>>>>> @{-1}
  }
  @media only screen and (min-width: 1280px) {
    width: 450px;
  }
  @media only screen and (min-width: 1920px) {
    width: 670px;
  }
`

const HeroSection = () => {
  const heroImageData = useStaticQuery(query)
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
