import React from 'react'
import { Link, graphql } from 'gatsby'

import BlogPost from '../components/blogPost'

class BlogPostTemplate extends React.Component {
  render () {
    return (
      <BlogPost data={this.props.data} pageContext={this.props.pageContext} location={this.props.location}/>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...BlogPost
    }
  }
`
