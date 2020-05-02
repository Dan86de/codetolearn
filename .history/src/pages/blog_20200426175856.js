import React from "react"
import { graphql } from "gatsby"

import PostPreview from "../components/PostPreview/PostPreview"

const BlogPage = ({ data }) => (
  <>
    <h1>Blog page</h1>
    {data.allMdx.nodes.map(item => (
      <>
        <h1>
          {item.frontmatter.title}
          <br></br>
        </h1>

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
