import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import PostPreview from "../components/PostPreview/PostPreview"

const RecentPostWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  grid-row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
          featuredImage={item.frontmatter.featuredImage.childImageSharp.fluid}
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
          featuredImage {
            childImageSharp {
              fluid(grayscale: true, maxHeight: 200, maxWidth: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 250)
      }
    }
  }
`

export default BlogPage
