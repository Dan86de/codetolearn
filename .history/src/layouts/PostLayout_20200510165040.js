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
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 0 1rem;
  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  h4 {
    margin: 0;
    padding: 0;
    opacity: 0.8;
    text-align: center;
  }
`

const ArticleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
  p {
    opacity: 0.8;
    text-align: justify;
    font-size: var(--fontBody);
  }
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
  let postDate = new Date(data.datoCmsArticle.meta.publishedAt)
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return (
    <>
      <ArticleHeroWrapper>
        <ArticleFeaturedImage fluid={data.datoCmsArticle.featuredImage.fluid} />
        <HeroTextWrapper>
          <h1>{data.datoCmsArticle.title}</h1>
          <p>
            {postDate.toLocaleDateString("pl-PL", options)} {", "}
            {data.datoCmsArticle.author}
          </p>
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
                let wrapper = document.createElement('div')
                wrapper.innerHTML({item[itemKey]})
                return {<p key={item.id}></p>}
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
