import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const PaginationWrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a:nth-child(1) {
    color: var(--mainColor);
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }
  a:nth-child(2) {
    color: var(--mainColor);
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }
`

const PaginationElement = styled(props => <Link {...props} />)`
  text-decoration: none;
  margin: 0 2rem;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>Previous Page</PaginationElement>
      <PaginationElement to={nextPage}>Next Page</PaginationElement>
    </PaginationWrapper>
  )
}
