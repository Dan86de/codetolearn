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

const BlogPage = ({ data }) => {
  return (
    <>
      <h1>This is site with all of my articles</h1>
      <RecentPostWrapper>
        {data.allDatoCmsArticle.nodes.map(item => (
          <PostPreview
            title={item.title}
            author={item.author}
            date={item.meta.createdAt}
            excerpt={item.excerpt}
            featuredImage={item.featuredImage.fluid}
            key={item.id}
            slug={item.slug}
          ></PostPreview>
        ))}
      </RecentPostWrapper>
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsArticle(filter: { locale: { eq: "pl" } }) {
      nodes {
        id
        title
        author
        excerpt
        slug
        articleContent
        featuredImage {
          fluid(maxWidth: 400) {
            ...GatsbyDatoCmsFluid_noBase64
          }
        }
        meta {
          createdAt
        }
      }
    }
  }
`

export default BlogPage
