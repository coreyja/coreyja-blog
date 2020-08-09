/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import blogSidebarStyles from "./blogSidebar.module.scss";
import { BlogSidebarQueryQuery } from "../types/generated";

function ListItem(props: { to: string; title: string }) {
  return (
    <li className={blogSidebarStyles.listItem}>
      <Link to={props.to}>{props.title}</Link>
    </li>
  );
}

const BlogSidebar: React.FunctionComponent = () => {
  const data = useStaticQuery<BlogSidebarQueryQuery>(blogSidebarQuery);
  const recentPosts = data.recentPosts.edges;
  const tags = data.tags.group.sort((a, b) => b.count - a.count).slice(0, 15);
  const years = data.years.group.sort(
    (a, b) => parseInt(b.year || "0") - parseInt(a.year || "0")
  );

  return (
    <div>
      <h2 className={blogSidebarStyles.title}>Recent Articles</h2>
      <ul className={blogSidebarStyles.list}>
        {recentPosts.map(({ node }) => {
          const slug = node.fields?.slug;
          if (!slug) {
            throw "Slug is required";
          }

          const title = node.frontmatter?.title || slug;
          return <ListItem to={slug} title={title} key={slug} />;
        })}
      </ul>

      <h2 className={blogSidebarStyles.title}>Tags</h2>
      <ul className={blogSidebarStyles.list}>
        {tags.slice(0, 15).map(({ count, tag }) => (
          <ListItem
            to={`/tags/${tag}`}
            key={`/tags/${tag}`}
            title={`${tag} (${count})`}
          />
        ))}
      </ul>

      <h2 className={blogSidebarStyles.title}>By Year</h2>
      <ul className={blogSidebarStyles.list}>
        {years.map(({ count, year }) => (
          <ListItem
            to={`/year/${year}`}
            key={`/year/${year}`}
            title={`${year} (${count})`}
          />
        ))}
      </ul>
    </div>
  );
};

const blogSidebarQuery = graphql`
  query BlogSidebarQuery {
    recentPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
    tags: allMarkdownRemark {
      group(field: fields___tags) {
        count: totalCount
        tag: fieldValue
      }
    }
    years: allMarkdownRemark {
      group(field: fields___year) {
        count: totalCount
        year: fieldValue
      }
    }
  }
`;

export default BlogSidebar;
