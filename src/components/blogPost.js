/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import Bio from '../components/bio'
import BlogLayout from './blogLayout'
import SEO from '../components/seo'
import blogPostStyles from './blogPost.module.scss'
import { rhythm, scale } from '../utils/typography'
import { Link, graphql } from 'gatsby'

import Color from '../styles/_colors.scss'

function BlogPost (props) {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <BlogLayout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

    <article className={blogPostStyles.BlogPost}>
      <section className={`${blogPostStyles.titleContainer} ${blogPostStyles.PostTitle}`} style={{ color: Color[post.frontmatter.color] }}>
        <h1 className={blogPostStyles.title} style={{ color: Color[post.frontmatter.color] }}>
          {post.frontmatter.title}
        </h1>
        <h4 className={blogPostStyles.date}>
          {post.frontmatter.date}
        </h4>
      </section>

      <section className={blogPostStyles.post} dangerouslySetInnerHTML={{ __html: post.html }} />

      <section className={blogPostStyles.tags} style={{ color: Color[post.frontmatter.color] }}>
        {post.fields.tags.map((tag) =>
          <Link to={`/tags/${tag}`} className={blogPostStyles.tag}>{tag}</Link>
        )}
      </section>

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
          margin: 0,
          marginBottom: '1em'
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </article>

    <Bio />
  </BlogLayout>
  )
}

export default BlogPost

export const blogPostFragment = graphql`
  fragment BlogPost on MarkdownRemark {
    id
    excerpt(pruneLength: 160)
    html
    fields {
      tags
    }
    frontmatter {
      title
      date(formatString: "M.D.YY")
      color
    }
  }
`
