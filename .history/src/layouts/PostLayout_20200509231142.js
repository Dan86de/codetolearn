import React from "react"
const PostLayout = props => {
  let post = props.pageContext.post
  console.log(post)

  return (
    <>
      <h1>{post.node.title}</h1>
      <h2>{post.node.author}</h2>
      {post.node.articleContent}
    </>
  )
}

export default PostLayout
