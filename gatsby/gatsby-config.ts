import { graphql } from "gatsby";
import {FeedQuery} from "../src/types/generated";

module.exports = {
  siteMetadata: {
    title: `COREYJA`,
    author: `Corey Alexander`,
    description: `My personal blog`,
    siteUrl: `https://coreyja.com`,
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
        hostname: process.env.AWS_HOSTNAME
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../content/assets`,
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
              rel: "noopener"
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-tags",
      options: {
        templatePath: `${__dirname}/../src/templates/tag.tsx`
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }: { query: FeedQuery }) => {
              const siteUrl = site?.siteMetadata?.siteUrl
              if (!siteUrl) { throw 'Must have a siteUrl' }

              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  category: edge.node.fields?.tags,
                  date: edge.node.frontmatter?.date,
                  url: siteUrl + edge.node.fields?.slug,
                  guid: siteUrl + edge.node.fields?.slug,
                  custom_elements: [
                    { "content:encoded": edge.node.html },
                    { tags: (edge.node.fields?.tags || []).join(",") }
                  ]
                });
              });
            },
            query: graphql`
              query Feed {
                site {
                  siteMetadata { siteUrl }
                }
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                        tags
                      }
                      frontmatter {
                        title
                        date
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "COREYJA RSS Feed"
          }
        ]
      }
    },
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
    `gatsby-plugin-sitemap`
  ]
};
