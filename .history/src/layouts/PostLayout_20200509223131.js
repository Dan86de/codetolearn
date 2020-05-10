import React from "react"
const PostLayout = props => {
  let post = props.pageContext.post

  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
      <p>Body</p>
    </>
  )
}

export default PostLayout
