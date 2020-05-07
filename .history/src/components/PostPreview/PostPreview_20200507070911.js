import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const PreviewWrapper = styled.div`
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

const PostPreview = props => {
  let postDate = new Date(props.date)
  console.log(postDate)
  return (
    <>
      <PreviewWrapper>
        <PreviewImage fluid={props.featuredImage}></PreviewImage>
        <PrewievTextWrapper>
          <h4>{props.title}</h4>
          <h5>{postDate.toLocaleString()}</h5>
          {props.excerpt}
        </PrewievTextWrapper>
      </PreviewWrapper>
    </>
  )
}

export default PostPreview
