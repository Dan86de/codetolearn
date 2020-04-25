import React from "react"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => (
  <>
    <h1>Blog page</h1>
  </>
)

export const query = graphql`
  allMdx {
    nodes {
      frontmatter {
        author
        slug
        title
      }
      excerpt
    }
  }`

export default BlogPage
