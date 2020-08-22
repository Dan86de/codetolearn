import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import PostPreview from "../components/PostPreview/PostPreview"

const ContentWrapper = styled.div``

const RecentPostWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  grid-row-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 1rem;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 1rem auto;
  }
  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const BlogPage = ({ data, location }) => {
  return (
    <ContentWrapper className={"contentWrapper"}>
      <h3
        style={{
          textDecoration: "underline",
          fontWeight: 700,
        }}
      >
        Wszystkie wpisy
      </h3>
      <RecentPostWrapper>
        {data.allDatoCmsArticle.nodes.map(item => (
          <PostPreview
            title={item.title}
            tag={item.tag}
            author={item.author}
            date={item.meta.publishedAt}
            excerpt={item.excerpt}
            featuredImage={item.featuredImage.fluid}
            key={item.id}
          ></PostPreview>
        ))}
      </RecentPostWrapper>
    </ContentWrapper>
  )
}

export const query = graphql`
  {
    allDatoCmsArticle(filter: { locale: { eq: "pl" } }) {
      nodes {
        id
        featuredImage {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
        title
        tag
        author
        excerpt
        articleContent {
          ... on DatoCmsParagraph {
            id
            paragraphContent
          }
          ... on DatoCmsHeading {
            id
            headingContent
          }
          ... on DatoCmsArticleImage {
            id
            articleImage {
              url
            }
          }
        }
        meta {
          publishedAt
        }
      }
    }
  }
`

export default BlogPage
