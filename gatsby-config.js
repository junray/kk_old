require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    title: `Klippa Kloppa`,
    description: `weird band, cool guys.`,
    author: `@junray`,
    albumTitle: 'Liberty',
    albumDate: 'in uscita il 20 settembre 2019',
    preorder: "preordina l'album su",
    snowdonia: 'sito di snowdonia',
    teaser: 'Il nuovo disco dei Klippa Kloppa',
    videos: {
      cinghiali: {
        videoSrcURL: 'https://www.youtube.com/embed/tapkzNyruls',
        videoTitle: 'Cinghiali',
        videoSubTitle: 'Scritto e diretto da Davide Maldi',
      },
      bach: {
        videoSrcURL: 'https://www.youtube.com/embed/mbf-GHKC2e0',
        videoTitle: 'Bach',
        videoSubTitle: 'Scritto e diretto da Flavio Scutti',
      },
    },

    images: {
      press: {
        blowup: {
          title: 'blow up',
          alt: 'blow up',
          image: '../images/blowup.jpeg',
        },
        buscadero: {
          title: 'buscadero',
          alt: 'buscadero',
          image: '../images/buscadero.jpeg',
        },
      },
    },

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
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
      },
    },
  ],
};
