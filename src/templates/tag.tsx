import React from "react";
import { graphql } from "gatsby";

import BlogLayout from "../components/blogLayout";
import PostCards from "../components/postCards";
import SEO from "../components/seo";

const CategoryTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  return (
    <BlogLayout>
      <div className="tag-container">
        <SEO title={`Posts in tag "${tag}"`} />
        <h1>Posts tagged with #{tag}</h1>
        <PostCards nodes={data.allMarkdownRemark.edges} />
      </div>
    </BlogLayout>
  );
};

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          ...PostCard
        }
      }
    }
  }
`;

export default CategoryTemplate;
