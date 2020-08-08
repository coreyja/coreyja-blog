import React from "react";
import { graphql, PageProps } from "gatsby";

import BlogLayout from "../components/blogLayout";
import PostCards from "../components/postCards";
import SEO from "../components/seo";
import { BlogIndexQuery, PostCardFragment } from "../types/generated";

const BlogIndex = ({ data }: PageProps<BlogIndexQuery>) => {
  const posts = data.allMarkdownRemark.edges.map(x => x.node);

  return (
    <BlogLayout>
      <SEO title="All posts" keywords={[`blog`, `coreyja`, `rails`, `dev`]} />
      <PostCards posts={posts} />
    </BlogLayout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndex {
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
