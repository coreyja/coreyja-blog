import React from "react";
import { graphql } from "gatsby";

import BlogLayout from "../components/blogLayout";
import PostCards from "../components/postCards";
import SEO from "../components/seo";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" keywords={[`blog`, `coreyja`, `rails`, `dev`]} />
        <PostCards nodes={posts} />
      </BlogLayout>
    );
  }
}

export default BlogIndex;

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
`;
