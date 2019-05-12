const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

function createBlog (graphql, createPage) {
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      })
    })

    return null
  })
}

function createYears (graphql, createPage) {
  const yearPage = path.resolve(`./src/templates/year.js`)

  return graphql(
    `
      {
        years: allMarkdownRemark {
          group(field: fields___year) {
            count: totalCount
            year: fieldValue
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const years = result.data.years.group

    years.forEach(({ count, year }) => {
      createPage({
        path: `/year/${year}/`,
        component: yearPage,
        context: {
          year: parseInt(year)
        }
      })
    })

    return null
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return Promise.all([
    createBlog(graphql, createPage),
    createYears(graphql, createPage)
  ])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })

    const date = new Date(node.frontmatter.date)
    createNodeField({
      node,
      name: `year`,
      value: date.getFullYear()
    })
  }
}
