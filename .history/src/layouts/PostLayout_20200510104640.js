import React from "react"
import styled from "styled-components"

const PreviewImage = styled(Img)`
  min-height: 200px;
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
      {post.node.articleContent}
    </>
  )
}

export default PostLayout
