const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/PostLayout.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
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
                ...GatsbyDatoCmsFluid_noBase64
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
    result.data.allDatoCmsArticle.nodes.forEach(post => {
      createPage({
        path: `/blog/${post.slug}`,
        component: blogPostTemplate,
        context: {
          featuredImage: {post.featuredImage}
        },
      })
    })
  })
}
