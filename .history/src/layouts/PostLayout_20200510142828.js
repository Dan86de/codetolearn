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
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      featuredImage {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
      title
      author
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
        }
        ... on DatoCmsHeading {
          headingContent
        }
        ... on DatoCmsArticleImage {
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
`

const PostLayout = ({ data }) => {
  return (
    <>
      <h1>{data.datoCmsArticle.title}</h1>
      <h4>{data.datoCmsArticle.author}</h4>
      <div>
        {data.datoCmsArticle.articleContent.map(item => {
          const itemKey = Object.keys(item)[1]
          console.log(itemKey)
          // headingContent
          // paragraphContent
          // articleImage

          switch (itemKey) {
            case "headingContent":
              return <h3>{item[itemKey]}</h3>
            case "paragraphContent":
              return <p>{item[itemKey]}</p>
            case "articleImage":
              return <img src={item[itemKey].url}></img>
            default:
              return null
          }
        })}
      </div>
    </>
  )
}

export default PostLayout
