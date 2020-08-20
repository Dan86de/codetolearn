const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/PostLayout.js`)

  const result = await graphql(`
    query queryCMSPage {
      allDatoCmsArticle(filter: { locale: { eq: "pl" } }) {
        nodes {
          id
          title
        }
      }
    }
  `)

  result.data.allDatoCmsArticle.nodes.forEach(post => {
    const slugifiedTitle = slugify(post.title, { lower: true })
    createPage({
      path: `/blog/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    })
  })
}
