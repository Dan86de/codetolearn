import React from "react"
import styled from "styled-components"

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ArticlePreview = () => {
  return (
    <>
      <PreviewWrapper>
        <PreviewImage></PreviewImage>
        <PrewievTextWrapper></PrewievTextWrapper>
      </PreviewWrapper>
    </>
  )
}

export default ArticlePreview
