import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const ArticleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      featuredImage {
        fluid(maxWidth: 1920) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      title
      author
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          articleImage {
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          id
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
      <Img fluid={data.datoCmsArticle.featuredImage.fluid} />
      <ArticleWrapper>
        <h1>{data.datoCmsArticle.title}</h1>
        <h4>{data.datoCmsArticle.author}</h4>
        <div>
          {data.datoCmsArticle.articleContent.map(item => {
            const itemKey = Object.keys(item)[1]

            switch (itemKey) {
              case "headingContent":
                return <h3 key={item.id}>{item[itemKey]}</h3>
              case "paragraphContent":
                return <p key={item.id}>{item[itemKey]}</p>
              case "articleImage":
                return <Img key={item.id} fluid={item[itemKey].fluid}></Img>
              default:
                return null
            }
          })}
        </div>
      </ArticleWrapper>
    </>
  )
}

export default PostLayout