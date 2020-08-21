import React, { useState } from "react"
import styled, { css } from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import slugify from "slugify"

const PreviewWrapper = styled(Link)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin: 1rem;
  padding-bottom: 4rem;
  overflow: hidden;
  box-shadow: 0 0.1px 0.3px -2px rgba(0, 0, 0, 0.02),
    0 0.3px 0.7px -2px rgba(0, 0, 0, 0.028),
    0 0.6px 1.3px -2px rgba(0, 0, 0, 0.035),
    0 1.1px 2.2px -2px rgba(0, 0, 0, 0.042),
    0 2.1px 4.2px -2px rgba(0, 0, 0, 0.05), 0 5px 10px -2px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--mainColor);
    h4 {
      color: var(--secondaryGray);
    }
    p {
      color: var(--secondaryGray);
    }
    h3 {
      color: var(--textOnMain);
    }
  }
`

const PreviewImage = styled(Img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  position: relative;
  transition: all 0.3s linear;
  filter: contrast(100%);
  position: relative;
  ${props =>
    props.isHover &&
    css`
      filter: contrast(150%);
      transform: scale(1.01);
    `};
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--mainColor);
    opacity: 0;
    transition: all 0.2s linear;
    ${props =>
      props.isHover &&
      css`
        opacity: 0.5;
      `};
  }
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

const BottomBar = styled.div`
  width: 100%;
  height: 2rem;
  background-color: var(--mainColor);
  position: absolute;
  left: 0;
  top: calc(100% - 2rem);
`

const PostPreview = props => {
  const [isHover, setIsHover] = useState(false)
  let postDate = new Date(props.date)
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  let slugifiedTitle = slugify(props.title, { lower: true })
  return (
    <PreviewWrapper
      to={`/blog/${slugifiedTitle}`}
      key={props.id}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <PreviewImage
        fluid={props.featuredImage}
        isHover={isHover}
      ></PreviewImage>
      <PrewievTextWrapper>
        <DateAndTagContainer>
          <h4>{props.tag} </h4>
          <p> {postDate.toLocaleDateString("pl-PL", options)}</p>
        </DateAndTagContainer>

        <h3>{props.title}</h3>
        <p>{props.excerpt}</p>
      </PrewievTextWrapper>
      <BottomBar></BottomBar>
    </PreviewWrapper>
  )
}

export default PostPreview
