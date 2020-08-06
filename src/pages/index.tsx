import React from "react";
import { graphql } from "gatsby";

import BlogLayout from "../components/blogLayout";
import PostCards from "../components/postCards";
import SEO from "../components/seo";

const BlogIndex: React.FunctionComponent<{ data: never }> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <BlogLayout>
      <SEO title="All posts" keywords={[`blog`, `coreyja`, `rails`, `dev`]} />
      <PostCards nodes={posts} />
    </BlogLayout>
  );
};

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
