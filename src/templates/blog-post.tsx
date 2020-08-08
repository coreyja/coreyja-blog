import React from "react";
import { graphql, PageProps } from "gatsby";

import BlogPost from "../components/blogPost";
import { BlogPostBySlugQuery } from "../types/generated";

interface NextPrevPage {
  slug: string;
  title: string;
}

export interface PageContext {
  slug: string;
  previous?: NextPrevPage;
  next?: NextPrevPage;
}

const BlogPostTemplate = ({
  pageContext,
  data
}: PageProps<BlogPostBySlugQuery, PageContext>) => {
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
