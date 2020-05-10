import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const PreviewImage = styled(Img)`
  min-height: 400px;
  width: 100%;
  object-fit: cover;
`

const PostLayout = props => {
  let post = props.pageContext.post.node

  return (
    <>
      <PreviewImage fluid={post.featuredImage.fluid}></PreviewImage>
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
    </>
  )
}

export default PostLayout
