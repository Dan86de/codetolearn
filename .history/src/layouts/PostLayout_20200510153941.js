import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const ArticleHeroWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
`

const HeroTextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ArticleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
`

const ArticleFeaturedImage = styled(Img)`
  width: 50%;
  height: 400px;
  object-fit: cover;
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
      <ArticleHeroWrapper>
        <ArticleFeaturedImage fluid={data.datoCmsArticle.featuredImage.fluid} />
        <HeroTextWrapper>
          <h1>{data.datoCmsArticle.title}</h1>
          <h4>{data.datoCmsArticle.author}</h4>
        </HeroTextWrapper>
      </ArticleHeroWrapper>

      <ArticleWrapper>
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
