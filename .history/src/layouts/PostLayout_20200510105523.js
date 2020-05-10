import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const PreviewImage = styled(Img)`
  min-height: 400px;
  width: 100%;
  object-fit: cover;
`

const PostLayout = props => {
  let post = props.pageContext.post
  console.log(post)

  return (
    <>
      <PreviewImage fluid={post.node.featuredImage.fluid}></PreviewImage>
      <h1>{post.node.title}</h1>
      <h2>{post.node.author}</h2>
      {<div></div>}.innerHTML({post.node.articleContent}){" "}
    </>
  )
}

export default PostLayout
