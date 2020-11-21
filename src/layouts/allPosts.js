import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Pagination } from "../components/Pagination/Pagination"

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  @media only screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    flex-direction: row;
    min-height: calc(100vh - 90px);
    align-items: flex-end;
  }
`

const AllPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog/" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  const post = data.allMdx.edges
  return (
    <>
      <ContentWrapper className={"contentWrapper"}>
        {post.map(post => {
          return (
            <div key={post.node.frontmatter.slug}>
              <p>{post.node.frontmatter.date}</p>
              <h1>{post.node.frontmatter.title}</h1>
              <p>{post.node.frontmatter.excerpt}</p>
            </div>
          )
        })}
      </ContentWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  )
}

export default AllPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            excerpt
          }
        }
      }
    }
  }
`
