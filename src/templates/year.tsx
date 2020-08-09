import { graphql, PageProps } from "gatsby";
import React from "react";

import BlogLayout from "../components/blogLayout";
import PostCards from "../components/postCards";
import SEO from "../components/seo";
import { YearPageQuery } from "../types/generated";

export interface PageContext {
  year: number;
}

const YearTemplate: React.FunctionComponent<PageProps<
  YearPageQuery,
  PageContext
>> = ({ pageContext, data }) => {
  const { year } = pageContext;
  return (
    <BlogLayout>
      <div className="year-container">
        <SEO title={`Posts in year "${year}"`} />
        <h1>All Posts from {year}</h1>
        <PostCards posts={data.allMarkdownRemark.edges.map(x => x.node)} />
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
