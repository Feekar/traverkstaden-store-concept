/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gårdslöten Snickeri',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        google: {
          families: ['Nunito Sans'],
        },
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-eslint',
  ],
};
