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
      {
        allDatoCmsArticle(
          filter: {
            locale: { eq: "pl" }
            featuredImage: { fluid: { tracedSVG: {} } }
          }
        ) {
          edges {
            node {
              id
              title
              slug
              author
              featuredImage {
                url
              }
              articleContent {
                ... on DatoCmsParagraph {
                  id
                  paragraphContent
                }
                ... on DatoCmsHeading {
                  id
                  headingContent
                }
              }
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
    result.data.allDatoCmsArticle.edges.nodes.forEach(post => {
      createPage({
        path: `/blog/${post.slug}`,
        component: blogPostTemplate,
        context: {},
      })
    })
  })
}
