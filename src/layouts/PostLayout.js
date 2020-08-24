import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import BackButton from "../components/BackButton/BackButton"

const ArticleHeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  h1 {
    line-height: 1.2em;
    margin-top: 1em;
    font-size: var(--fontH3);
    @media only screen and (min-width: 1024px) {
      display: none;
    }
  }
  @media only screen and (min-width: 1024px) {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    padding-right: 4em;
  }
`

const BgArticleImage = styled.div`
  background: linear-gradient(to right, var(--mainColor), var(--mainGray));
  flex-basis: 100%;
  @media only screen and (min-width: 1024px) {
    width: 476px;
    height: 402px;
  }
  @media only screen and (min-width: 1920px) {
    width: 710px;
    height: 600px;
  }
`

const ArticleFeaturedImage = styled(Img)`
  width: 60%;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    transform: translateX(4em) translateY(2em);
  }
  @media only screen and (min-width: 1920px) {
    transform: translateX(12em) translateY(4em);
  }
`

const HeroNavWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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
  h1 {
    display: none;
  }
  @media only screen and (min-width: 1024px) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-left: 5em;
    h1 {
      display: block;
    }
    h4 {
      margin: 0;
      padding: 0;
    }
    p {
      margin: 0;
      padding: 0;
    }
  }
`

const ContentWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    margin-top: 3em;
  }
`

const ContentTextWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 1em;
  h3 {
    line-height: 1.2em;
    margin: 1em auto;
    padding: 0;
  }
  p {
    padding: 0;
    margin: 0;
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
        <h1 className={"contentWrapper"}>{data.datoCmsArticle.title}</h1>
        <HeroNavWrapper className={"contentWrapper"}>
          <BackButton></BackButton>
          <h4>{data.datoCmsArticle.tag} </h4>
          <h1 className={"contentWrapper"}>{data.datoCmsArticle.title}</h1>
          <p> {postDate.toLocaleDateString("pl-PL", options)}</p>
        </HeroNavWrapper>
        <BgArticleImage>
          <ArticleFeaturedImage
            fluid={data.datoCmsArticle.featuredImage.fluid}
          />
        </BgArticleImage>
      </ArticleHeroWrapper>
      <ContentWrapper>
        {data.datoCmsArticle.articleContent.map(item => {
          const itemKey = Object.keys(item)[1]

          switch (itemKey) {
            case "headingContent":
              return (
                <ContentTextWrapper>
                  <h3 key={item.id}>{item[itemKey]}</h3>
                </ContentTextWrapper>
              )
            case "paragraphContent":
              return (
                <ContentTextWrapper>
                  <p key={item.id}>{item[itemKey]}</p>
                </ContentTextWrapper>
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
      </ContentWrapper>
    </>
  )
}

export default PostLayout
