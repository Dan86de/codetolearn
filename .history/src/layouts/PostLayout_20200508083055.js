import React from "react"
import Img from "gatsby-image"
const PostLayout = ({ data }) => {
  return (
    <>
      <h1>{data.post.title}</h1>
      <h2>Author</h2>
      <p>Body</p>
    </>
  )
}

export default PostLayout
