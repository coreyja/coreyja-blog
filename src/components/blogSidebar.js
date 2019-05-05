/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { rhythm } from "../utils/typography"

import blogSidebarStyles from "./blogSidebar.module.scss"

function BlogSidebar(props) {
  const data = useStaticQuery(blogSidebarQuery);
  const recentPosts = data.recentPosts.edges

  return (
    <div>
      <h2 className={blogSidebarStyles.title}>Recent Articles</h2>
      <ul className={blogSidebarStyles.list}>
        {recentPosts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <li className={blogSidebarStyles.listItem}>
              <Link to={node.fields.slug}>
                {title}
              </Link>
            </li>
          )
        })}
      </ul>

      <h2 className={blogSidebarStyles.title}>Tags</h2>
      <ul className={blogSidebarStyles.list}>
      </ul>

      <h2 className={blogSidebarStyles.title}>By Year</h2>
      <ul className={blogSidebarStyles.list}>
      </ul>
    </div>
  )
}

const blogSidebarQuery = graphql`
  query BlogSidebarQuery {
    recentPosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 10) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

export default BlogSidebar
