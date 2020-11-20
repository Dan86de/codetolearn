// esport.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql`
//     query {
//       allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `
//   //   Create pages for posts

//   const postsPerPage = 3
//   const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     actions.createPages({
//       path: i === 0 ? `/` : `/${i + 1}`,
//       component: require.resolve("./src/layouts/allPosts.js"),
//       context: {
//         limit: postsPerPage,
//         skip: i * postsPerPage,
//         numPages,
//         currentPage: i + 1,
//       },
//     })
//   })
//   //   Create single blog posts

//   data.allMdx.edges.forEach(post => {
//     const slug = post.node.frontmatter.slug
//     const id = post.node.id

//     actions.createPages({
//       path: slug,
//       component: require.resolve("./src/layouts/singlePost.js"),
//       context: { id },
//     })
//   })
// }
