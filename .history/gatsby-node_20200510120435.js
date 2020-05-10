const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/PostLayout.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(`
    query queryCMSPage {
      allDatoCmsArticle(filter: { locale: { eq: "pl" } }) {
        nodes {
          title
        }
      }
    }
  `)
  // Create blog post pages.

  result.data.allDatoCmsArticle.nodes.forEach(post => {
    const slugifiedTitle = createPage({
      path: `/blog/${post.slug}`,
      component: blogPostTemplate,
      context: {
        post,
      },
    })
  })
}
