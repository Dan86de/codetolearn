import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const PreviewImage = styled(Img)`
  min-height: 400px;
  width: 100%;
  object-fit: cover;
`

const PostLayout = props => {
  return (
    <>
      <PreviewImage fluid={}></PreviewImage>
      <h1>{}</h1>
      <h2>{}</h2>
    </>
  )
}

export default PostLayout
