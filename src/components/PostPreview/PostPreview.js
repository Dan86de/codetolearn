import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import slugify from "slugify"

const PreviewWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 0.1px 0.3px -2px rgba(0, 0, 0, 0.02),
    0 0.3px 0.7px -2px rgba(0, 0, 0, 0.028),
    0 0.6px 1.3px -2px rgba(0, 0, 0, 0.035),
    0 1.1px 2.2px -2px rgba(0, 0, 0, 0.042),
    0 2.1px 4.2px -2px rgba(0, 0, 0, 0.05), 0 5px 10px -2px rgba(0, 0, 0, 0.07);
`

const PreviewImage = styled(Img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  position: relative;
`

const PrewievTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem;
  h3 {
    margin: 0;
    line-height: 1.2em;
  }
  p {
    margin-top: 1em;
    line-height: 1.5em;
  }
`

const DateAndTagContainer = styled.div`
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
`

const PostPreview = props => {
  let postDate = new Date(props.date)
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  let slugifiedTitle = slugify(props.title, { lower: true })
  return (
    <PreviewWrapper to={`/blog/${slugifiedTitle}`} key={props.id}>
      <PreviewImage fluid={props.featuredImage}></PreviewImage>
      <PrewievTextWrapper>
        <DateAndTagContainer>
          <h4>{props.tag} </h4>
          <p> {postDate.toLocaleDateString("pl-PL", options)}</p>
        </DateAndTagContainer>
        <h3>{props.title}</h3>
        <p>{props.excerpt}</p>
      </PrewievTextWrapper>
    </PreviewWrapper>
  )
}

export default PostPreview
