import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import BackButton from "../components/BackButton/BackButton"

const ArticleHeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  h3 {
    line-height: 1.2em;
    margin-top: 1em;
  }
`
const BgArticleImage = styled.div`
  background: linear-gradient(to right, var(--mainColor), var(--mainGray));
  width: 100%;
`

const ArticleFeaturedImage = styled(Img)`
  width: 60%;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
`

const HeroNavWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  h4 {
    text-transform: uppercase;
    font-weight: 700;
    padding: 1rem 1rem 1rem 0rem;
    color: var(--mainGray);
    line-height: 1.2em;
    margin: 0;
    font-size: var(--fontBody);
  }
  p {
    padding: 1rem 0rem 1rem 0rem;
    text-transform: uppercase;
    line-height: 1.2em;
    margin: 0;
    letter-spacing: 0.1em;
    font-size: var(--fontSmall);
    font-weight: 500;
    color: var(--mainGray);
    transform: translateY(-1px);
  }
`

const ContentWrapper = styled.div``

const ArticleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  h3 {
    margin: 0;
    padding: 1em;
    @media only screen and (min-width: 768px) {
    }
  }
  p {
    text-align: justify;
    font-size: var(--fontBody);
    line-height: 1.3;
    margin: 0;
    padding: 2em;
    padding-top: 1em;
    @media only screen and (min-width: 768px) {
    }
  }
`

const QuoteText = styled.div`
  background-color: var(--textOnMain);
  width: 100%;
  margin: 1em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2em 1em;
  font-weight: 600;
  font-size: 22px;
  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
  }
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
      tag
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsQuote {
          quotetext
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
  let postDate = new Date(data.datoCmsArticle.meta.publishedAt)
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return (
    <>
      <ArticleHeroWrapper>
        <h3 className={"contentWrapper"}>{data.datoCmsArticle.title}</h3>
        <HeroNavWrapper>
          <BackButton></BackButton>
          <h4>{data.datoCmsArticle.tag} </h4>
          <p> {postDate.toLocaleDateString("pl-PL", options)}</p>
        </HeroNavWrapper>
        <BgArticleImage>
          <ArticleFeaturedImage
            fluid={data.datoCmsArticle.featuredImage.fluid}
          />
        </BgArticleImage>
      </ArticleHeroWrapper>

      <ContentWrapper>
        <ArticleWrapper>
          {data.datoCmsArticle.articleContent.map(item => {
            const itemKey = Object.keys(item)[1]

            switch (itemKey) {
              case "headingContent":
                return (
                  <h3 className={"contentWrapper"} key={item.id}>
                    {item[itemKey]}
                  </h3>
                )
              case "paragraphContent":
                return (
                  <p className={"contentWrapper"} key={item.id}>
                    {item[itemKey]}
                  </p>
                )
              case "quotetext":
                return <QuoteText key={item.id}>`"{item[itemKey]}"`</QuoteText>
              case "articleImage":
                return (
                  <Img
                    className={"contentWrapper"}
                    key={item.id}
                    fluid={item[itemKey].fluid}
                  ></Img>
                )
              default:
                return null
            }
          })}
        </ArticleWrapper>
      </ContentWrapper>
    </>
  )
}

export default PostLayout
