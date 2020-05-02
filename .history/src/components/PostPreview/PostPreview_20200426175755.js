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

const ArticlePreview = props => {
  return (
    <>
      <PreviewWrapper>
        <PreviewImage></PreviewImage>
        <PrewievTextWrapper
          title={props.title}
          author={props.author}
          date={props.date}
          slug={props.slug}
        ></PrewievTextWrapper>
      </PreviewWrapper>
    </>
  )
}

export default ArticlePreview
