import React from "react"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => (
  <>
    <h1>Blog page</h1>
    {data.allMdx.nodes.map(item => (
      <>
        <h1>{item.title}</h1>
        <br></br>
        <p>{item.excerpt}</p>
      </>
    ))}
  </>
)

export const query = graphql`
  {
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
  }
`

export default BlogPage
