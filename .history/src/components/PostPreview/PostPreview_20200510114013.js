import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import WatchIcon from "../Icons/WatchIcon"
import { Link } from "gatsby"

const PreviewWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
`

const PreviewImage = styled(Img)`
  min-height: 200px;
  width: 100%;
  object-fit: cover;
`

const PrewievTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  h4 {
    flex-grow: 1;
  }
  h5 {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.8em;
  }
`

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const PostPreview = props => {
  let postDate = new Date(props.date)
  console.log(postDate)
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    timeZoneName = 'short'
  }
  return (
    <>
      <PreviewWrapper to={`/blog/${props.slug}`}>
        <PreviewImage fluid={props.featuredImage}></PreviewImage>
        <PrewievTextWrapper>
          <h4>{props.title}</h4>
          <DateContainer>
            <WatchIcon />
            <h5>{postDate.toLocaleDateString("pl-PL", options)}</h5>
          </DateContainer>
          {props.excerpt}
        </PrewievTextWrapper>
      </PreviewWrapper>
    </>
  )
}

export default PostPreview
