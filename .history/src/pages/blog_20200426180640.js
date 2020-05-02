import React from "react"
import { graphql } from "gatsby"

import PostPreview from "../components/PostPreview/PostPreview"

const BlogPage = ({ data }) => (
  <>
    <h1>This is site with all of my articles</h1>
    {data.allMdx.nodes.map(item => (
      <PostPreview
        title={item.frontmatter.title}
        author={item.frontmatter.author}
        date={item.frontmatter.date}
        excerpt={item.excerpt}
      ></PostPreview>
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
          date
        }
        excerpt
      }
    }
  }
`

export default BlogPage
