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
            slug
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
  )
  console.log(result.data.allDatoCmsArticle.nodes)
  // Create blog post pages.
  result.data.allDatoCmsArticle.nodes.forEach(post => {
    createPage({
      // Path for this page — required
      path: `${post.slug}`,
      component: blogPostTemplate,
      context: {},
    })
  })
}
