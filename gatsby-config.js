/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Recipe Bank",
    description: "Nice and clean recipes site",
    author: "@Daniel",
    person: { name: "Smith", age: 34 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "Peter", age: 44 },
      { name: "Simon", age: 24 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-manifest`, // plugin for setting up new favicon
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'static/hamburger.png', // support only png format
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // particular name that you choose for graphql
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `examples`, // particular name that you choose for graphql
        path: `${__dirname}/src/examples`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dtz07c73696h`, // from contentful, API keys
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY, // from contentful, API keys
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
