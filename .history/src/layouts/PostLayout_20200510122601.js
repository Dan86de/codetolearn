import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

// const PreviewImage = styled(Img)`
//   min-height: 400px;
//   width: 100%;
//   object-fit: cover;
// `
export const query = graphql`
querySingleArticle ($id: String!){
  datoCmsArticle (id: {eq:$id}) {
     featuredImage {
        url
        fluid {
          tracedSVG
        }
      }
      title
      author
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
}`

const PostLayout = props => {
  return (
    <>
      <h1>{}</h1>
      <h2>{}</h2>
    </>
  )
}

export default PostLayout
