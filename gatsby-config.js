/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const netlifyCmsPaths = {
  resolve: 'gatsby-plugin-netlify-cms-paths',
  options: {
    cmsConfig: '/static/admin/config.yml',
  },
};

module.exports = {
  siteMetadata: {
    title: 'Gårdslöten Snickeri',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    netlifyCmsPaths,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        google: {
          families: ['Nunito Sans'],
        },
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          netlifyCmsPaths,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 930,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },
  ],
};
