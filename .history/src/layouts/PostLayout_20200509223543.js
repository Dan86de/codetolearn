import React from "react"
const PostLayout = props => {
  let post = props.pageContext.post
  console.log(post)

  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
      {post.articleContent.forEach(element => element)}
    </>
  )
}

export default PostLayout
