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
`

const PreviewImage = styled(Img)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  position: relative;
`

const PrewievTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem;
  h3 {
    margin: 1rem 0rem 0rem 0rem;
    line-height: 1.75rem;
  }
  h4 {
    color: rgba(0, 0, 0, 0.5);
    margin: 0 0 1rem 0;
    font-size: 1em;
    font-weight: 500;
  }
  p {
    line-height: 1.2;
  }
`

const DateContainer = styled.div`
  display: flex;
  width: 100%;
`

const PostPreview = props => {
  let postDate = new Date(props.date)
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  let slugifiedTitle = slugify(props.title, { lower: true })
  return (
    <PreviewWrapper to={`/blog/${slugifiedTitle}`} key={props.id}>
      <PreviewImage fluid={props.featuredImage}></PreviewImage>
      <PrewievTextWrapper>
        <h3>{props.title}</h3>
        <DateContainer>
          <h4>{postDate.toLocaleDateString("pl-PL", options)}</h4>
        </DateContainer>
        <p>{props.excerpt}</p>
      </PrewievTextWrapper>
    </PreviewWrapper>
  )
}

export default PostPreview
