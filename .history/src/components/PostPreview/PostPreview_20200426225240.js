import React from "react"
import styled from "styled-components"

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
`

const PreviewImage = styled.div`
  min-height: 200px;
  width: 100%;
  background-image: url(${({ featuredImage }) => featuredImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
  return (
    <>
      <PreviewWrapper>
        <PreviewImage featuredImage={props.featuredImage}></PreviewImage>
        <PrewievTextWrapper
          title={props.title}
          author={props.author}
          date={props.date}
          excerpt={props.slug}
        >
          <h4>{props.title}</h4>
          <h5>{props.date}</h5>
          {props.excerpt}
        </PrewievTextWrapper>
      </PreviewWrapper>
    </>
  )
}

export default PostPreview
