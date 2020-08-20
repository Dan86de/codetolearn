require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Programistafrontend.pl",
    description: "Web developer Daniel Noworyta",
    author: "@dan86de",
    siteURL: "https://codetolearn.pl",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `stj4ygb`,
        },
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: `master`,
        previewMode: false,
        disableLiveReload: false,
        apiUrl: "https://site-api.datocms.com",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `/assets/images/`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
