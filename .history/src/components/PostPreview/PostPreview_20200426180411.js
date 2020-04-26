import React from "react"
import styled from "styled-components"

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PreviewImage = styled.div`
  background-color: #d5d5d5;
  height: 200px;
  width: 100%;
`

const PrewievTextWrapper = styled.div`
  width: 400px;
`

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
          <h3>{date}</h3>
          <h2>{title}</h2>
        </PrewievTextWrapper>
      </PreviewWrapper>
    </>
  )
}

export default PostPreview
