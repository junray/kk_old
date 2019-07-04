require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    title: `Klippa Kloppa`,
    description: `weird band, cool guys.`,
    author: `@junray`,
    albumTitle: 'Liberty',
    albumDate: 'in uscita il 20 settembre 2019',
    teaser: 'Il nuovo disco dei Klippa Kloppa',
    videoSrcURL: 'https://www.youtube.com/embed/tapkzNyruls',
    videoTitle: 'Cinghiali',
    facebook: 'https://www.facebook.com/klippakloppa',
    instagram: 'https://www.instagram.com/klippa_kloppa',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-less`,
      options: {
        cssLoaderOptions: {
          camelCase: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //`gatsby-plugin-typography`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        //icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
