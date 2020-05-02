import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import PostPreview from "../components/PostPreview/PostPreview"

const RecentPostWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`

const BlogPage = ({ data }) => (
  <>
    <h1>This is site with all of my articles</h1>
    <RecentPostWrapper>
      {data.allMdx.nodes.map(item => (
        <PostPreview
          title={item.frontmatter.title}
          author={item.frontmatter.author}
          date={item.frontmatter.date}
          excerpt={item.excerpt}
        ></PostPreview>
      ))}
    </RecentPostWrapper>
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
        excerpt(pruneLength: 250)
      }
    }
  }
`

export default BlogPage
