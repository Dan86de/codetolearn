import React from "react"
import styled from "styled-components"

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`

const PreviewImage = styled.div`
  background-color: #d5d5d5;
  height: 200px;
  width: 100%;
`

const PrewievTextWrapper = styled.div``

const PostPreview = props => {
  return (
    <>
      <PreviewWrapper>
        <PreviewImage></PreviewImage>
        <PrewievTextWrapper
          title={props.title}
          author={props.author}
          date={props.date}
          excerpt={props.slug}
        >
          <h4>{props.title}</h4>
          <p>{props.date}</p>
          <p>{props.excerpt}</p>
        </PrewievTextWrapper>
      </PreviewWrapper>
    </>
  )
}

export default PostPreview