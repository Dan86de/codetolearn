import React from "react"
import Img from "gatsby-image"
const PostLayout = ({ data }) => {
  console.log(data)
  return (
    <>
      <h1>Title></h1>
      <h2>Author</h2>
      <p>Body</p>
    </>
  )
}

export default PostLayout
