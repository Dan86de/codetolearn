import React from "react"
const PostLayout = ({ data }) => {
  return (
    <>
      {console.log(data)}
      <h1>{data.title}</h1>
      <h2>{data.author}</h2>
      <p>{data.articleContent}</p>
    </>
  )
}

export default PostLayout