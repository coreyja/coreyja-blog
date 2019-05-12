import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import BlogLayout from '../components/blogLayout'
import PostCards from '../components/postCards'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `coreyja`, `rails`, `dev`]}
        />
        <PostCards nodes={posts} />
      </BlogLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          ...PostCard
        }
      }
    }
  }
`
