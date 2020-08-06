import React from "react";
import { graphql } from "gatsby";

import BlogPost from "../components/blogPost";

const BlogPostTemplate: React.FunctionComponent = ({ pageContext, data }) => {
  return <BlogPost data={data} pageContext={pageContext} />;
};

export default BlogPostTemplate;

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
`;
