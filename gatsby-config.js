module.exports = {
  siteMetadata: {
    title: `COREYJA`,
    author: `Corey Alexander`,
    description: `My personal blog`,
    siteUrl: `https://coreyja.com/`,
    social: {
      github: `coreyja`,
      twitter: `coreyja_dev`
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: process.env.AWS_BUCKET,
          protocol: process.env.AWS_PROTOCOL,
          hostname: process.env.AWS_HOSTNAME,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              withWebp: true,
              tracedSVG: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //  resolve: `gatsby-plugin-google-analytics`,
    //  options: {
    //    //trackingId: `ADD YOUR TRACKING ID HERE`,
    //  },
    // },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-tags',
      options: {
        templatePath: `${__dirname}/src/templates/tag.js`
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coreyja Blog`,
        short_name: `coreyja Blog`,
        start_url: `/`,
        background_color: `#aa66cc`,
        theme_color: `#aa66cc`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.svg`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
  ]
}
