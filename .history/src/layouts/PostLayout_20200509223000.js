import React from "react"
const PostLayout = props => {
  let { post } = props.pageContext.post
  {
    return (
      <>
        <h1>{props.pageContext.post.title}</h1>
        <h2>Author</h2>
        <p>Body</p>
      </>
    )
  }
}

export default PostLayout
