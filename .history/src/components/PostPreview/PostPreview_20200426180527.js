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
          slug={props.slug}
        >
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
        </PrewievTextWrapper>
      </PreviewWrapper>
    </>
  )
}

export default PostPreview
