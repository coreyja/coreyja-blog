import { graphql } from "gatsby";
import React from "react";

import BlogLayout from "../components/blogLayout";
import PostCards from "../components/postCards";
import SEO from "../components/seo";

interface YearTemplate {
  pageContext: { year: number };
  data: { allMarkdownRemark: { edges: unknown[] } };
}
const YearTemplate = ({ pageContext, data }: YearTemplate) => {
  const { year } = pageContext;
  return (
    <BlogLayout>
      <div className="year-container">
        <SEO title={`Posts in year "${year}"`} />
        <h1>All Posts from {year}</h1>
        <PostCards nodes={data.allMarkdownRemark.edges} />
      </div>
    </BlogLayout>
  );
};

export const pageQuery = graphql`
  query YearPage($year: Int) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { year: { eq: $year } } }
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

export default YearTemplate;
