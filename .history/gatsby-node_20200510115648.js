const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/PostLayout.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(`
  query queryCMSPosts {
    allDatoCmsArticle(filter: { locale: { eq: "pl" } }) {
      nodes {
        featuredImage {
          fluid {
            ...GatsbyDatoCmsFluid_noBase64
          }
        }
        title
        slug
        author
        articleContent {
          ... on DatoCmsParagraph {
            id
            paragraphContent
          }
          ... on DatoCmsHeading {
            id
            headingContent
          }
          ... on DatoCmsArticleImage {
            id
            articleImage {
              url
            }
          }
        }
        meta {
          publishedAt
        }
      }
    }
  }`, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // Create blog post pages.

    result.data.allDatoCmsArticle.edges.forEach(post => {
      createPage({
        path: `/blog/${post.node.slug}`,
        component: blogPostTemplate,
        context: {
          post,
        },
      })
    })
  })
}
