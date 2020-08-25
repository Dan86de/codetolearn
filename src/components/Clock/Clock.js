import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const ImageContainer = styled(Image)`
  width: 32px;
  transform: translateY(-2px);
`

const query = graphql`
  {
    file(name: { regex: "/clock/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const ClockImage = props => {
  const imageData = useStaticQuery(query)
  return (
    <>
      <ImageContainer fluid={imageData.file.childImageSharp.fluid} />
    </>
  )
}

export default ClockImage
