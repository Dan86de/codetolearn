import React from "react"

const BlogPage = () => (
  <>
    <h1>Blog page</h1>
  </>
)

export const query= '{
  allMdx {
    nodes {
      frontmatter {
        author
        slug
        title
      }
      excerpt
    }
  }
}'

export default BlogPage
