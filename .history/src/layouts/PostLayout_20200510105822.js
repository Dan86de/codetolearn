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
  let postContainer = document.createElement("div")
  let articleContent = post.node.articleContent

  return (
    <>
      <PreviewImage fluid={post.node.featuredImage.fluid}></PreviewImage>
      <h1>{post.node.title}</h1>
      <h2>{post.node.author}</h2>
      {postContainer.innerHTML(articleContent)}{" "}
    </>
  )
}

export default PostLayout
