/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import Bio from "../components/bio";
import BlogLayout from "./blogLayout";
import SEO from "../components/seo";
import blogPostStyles from "./blogPost.module.scss";
import { Link, graphql } from "gatsby";

import Color, { ColorKey } from "../utils/colors";
import { BlogPostBySlugQuery } from "../types/generated";
import { PageContext } from "../templates/blog-post";

interface Props {
  data: BlogPostBySlugQuery;
  pageContext: PageContext;
}

const BlogPost: React.FunctionComponent<Props> = props => {
  const post = props.data.markdownRemark;
  const { previous, next } = props.pageContext;

  const title = post?.frontmatter?.title;
  if (!title) {
    throw "Title is required";
  }

  if (!post?.frontmatter?.color) {
    throw "Color in frontmatter is required";
  }
  if (!Object.keys(Color).includes(post.frontmatter.color)) {
    throw "The color is not a color we can read";
  }
  const colorKey = post.frontmatter.color as ColorKey;
  const color = Color[colorKey];

  return (
    <BlogLayout>
      <SEO
        title={title}
        description={post.frontmatter?.description || post.excerpt || undefined}
      />

      <article className={blogPostStyles.BlogPost}>
        <section
          className={`${blogPostStyles.titleContainer} ${blogPostStyles.PostTitle}`}
          style={{ color }}
        >
          <h1 className={blogPostStyles.title} style={{ color }}>
            {post.frontmatter.title}
          </h1>
          <h4 className={blogPostStyles.date}>{post.frontmatter.date}</h4>
        </section>

        {post.html && (
          <section
            className={blogPostStyles.post}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        )}

        <section className={blogPostStyles.tags} style={{ color }}>
          {post.fields?.tags?.map(
            tag =>
              tag && (
                <Link
                  to={`/tags/${tag}`}
                  className={blogPostStyles.tag}
                  key={tag}
                >
                  {tag}
                </Link>
              )
          )}
        </section>

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            margin: 0,
            marginBottom: "1em"
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </article>

      <Bio />
    </BlogLayout>
  );
};

export default BlogPost;

export const blogPostFragment = graphql`
  fragment BlogPost on MarkdownRemark {
    id
    excerpt(pruneLength: 160)
    html
    fields {
      tags
    }
    frontmatter {
      title
      date(formatString: "M.D.YY")
      color
      description
    }
  }
`;
