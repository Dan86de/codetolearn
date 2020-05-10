import React from "react"
const PostLayout = props => {
  {
    console.log(props.pageContext.post)
    return (
      <>
        <h1>Title</h1>
        <h2>Author</h2>
        <p>Body</p>
      </>
    )
  }
}

export default PostLayout
