import { GatsbyNode, CreatePagesArgs } from "gatsby";
import { BlogsQuery, YearsQuery } from "../src/types/generated";

import path from "path";
import { createFilePath } from "gatsby-source-filesystem";
import { PageContext as BlogPostPageContext } from "../src/templates/blog-post";
import { PageContext as YearPageContext } from "../src/templates/year";

const createBlog = async ({ graphql, actions }: CreatePagesArgs) => {
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);

  const result = await graphql<BlogsQuery>(
    `
      query Blogs {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data?.allMarkdownRemark.edges;

  posts &&
    posts.forEach((post, index) => {
      const previousNode =
        index === posts.length - 1 ? undefined : posts[index + 1].node;
      const nextNode = index === 0 ? undefined : posts[index - 1].node;

      const previous =
        previousNode &&
        previousNode.fields?.slug &&
        previousNode.frontmatter?.title
          ? {
              slug: previousNode.fields.slug,
              title: previousNode.frontmatter.title
            }
          : undefined;
      const next =
        nextNode && nextNode.fields?.slug && nextNode.frontmatter?.title
          ? {
              slug: nextNode.fields.slug,
              title: nextNode.frontmatter.title
            }
          : undefined;

      const slug = post.node.fields && post.node.fields.slug;

      if (!slug) {
        throw "No slug found for this post, one is needed";
      }

      const context: BlogPostPageContext = {
        slug,
        previous,
        next
      };

      actions.createPage({
        path: slug,
        component: blogPost,
        context
      });
    });
};

const createYears = async ({ graphql, actions }: CreatePagesArgs) => {
  const yearPage = path.resolve(`./src/templates/year.tsx`);

  const result = await graphql<YearsQuery>(
    `
      query Years {
        years: allMarkdownRemark {
          group(field: fields___year) {
            count: totalCount
            year: fieldValue
          }
        }
      }
    `
  );
  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const years = result.data?.years.group;

  years &&
    years.forEach(({ year }) => {
      if (!year) {
        throw "We dont have a year here and need one";
      }

      const context: YearPageContext = { year: parseInt(year) };

      actions.createPage({
        path: `/year/${year}/`,
        component: yearPage,
        context
      });
    });
};

export const createPages: GatsbyNode["createPages"] = node => {
  return Promise.all([createBlog(node), createYears(node)]);
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });

    const date = new Date((node.frontmatter as { date: string }).date);
    createNodeField({
      node,
      name: `year`,
      value: date.getFullYear()
    });
  }
};
