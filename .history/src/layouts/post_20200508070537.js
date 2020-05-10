import React from "react"
const PostLayout = ({ data }) => {
  return (
    <>
      <h1>{props.data.title}</h1>
      <h2>{props.data.author}</h2>
      <p>{props.data.articleContent}</p>
    </>
  )
}

export default PostLayout
