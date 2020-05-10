const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const result = await graphql(
    `
      query queryPost {
        allDatoCmsArticle(filter: { locale: { eq: "pl" } }) {
          nodes {
            id
            title
            author
            excerpt
            featuredImage {
              fluid(maxWidth: 400) {
                src
                srcSet
              }
            }
            articleContent {
              ... on DatoCmsParagraph {
                paragraphContent
              }
              ... on DatoCmsHeading {
                headingContent
              }
            }
            meta {
              createdAt
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}
