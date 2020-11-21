import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const SinglePost = ({ data }) => {
  return (
    <div className={"contentWrapper"}>
      <span>{data.mdx.frontmatter.date}</span>
      <h3>{data.mdx.frontmatter.title}</h3>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  )
}

export default SinglePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date
        excerpt
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
