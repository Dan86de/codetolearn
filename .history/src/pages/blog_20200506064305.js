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
          title={item.title}
          author={item.author}
          date={item.frontmatter.date}
          excerpt={item.articleContent.paragraphContent}
          featuredImage={item.frontmatter.featuredImage.childImageSharp.fluid}
          key={item.id}
        ></PostPreview>
      ))}
    </RecentPostWrapper>
  </>
)

export const query = graphql`
  {
    allDatoCmsArticle(filter: { locale: { eq: "pl" } }) {
      nodes {
        id
        title
        author
        articleContent {
          _
          ... on DatoCmsParagraph {
            paragraphContent
          }
          ... on DatoCmsHeading {
            headingContent
          }
          ... on DatoCmsArticleImage {
            articleImage {
              fluid(maxWidth: 400) {
                base64
                tracedSVG
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPage
