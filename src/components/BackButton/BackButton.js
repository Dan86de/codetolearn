import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const MobileButtonWrapper = styled(Link)`
  color: inherit;
  font-size: var(--fontSmall);
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.1em;
  @media (min-width: 768px) {
    display: none;
  }
`

const DesktopButtonWrapper = styled(Link)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    color: inherit;
    font-size: var(--fontSmall);
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1em;
  }
`

const ImageContainer = styled(Image)`
  width: 15px;
`
const query = graphql`
  {
    file(name: { regex: "/arrow-left/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const BackButton = props => {
  const imageData = useStaticQuery(query)
  return (
    <>
      <MobileButtonWrapper to="/blog" exact="true" onClick={props.linkClick}>
        <>
          <ImageContainer fluid={imageData.file.childImageSharp.fluid} />
        </>
      </MobileButtonWrapper>
      <DesktopButtonWrapper to="/blog" exact="true" onClick={props.linkClick}>
        Powrót
      </DesktopButtonWrapper>
    </>
  )
}

export default BackButton
