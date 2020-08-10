import React from "react";
import postCardStyles from "./postCard.module.scss";
import { Link, graphql } from "gatsby";

import Color, { ColorKey } from "../utils/colors";
import { PostCardFragment } from "../types/generated";

interface Props {
  post: PostCardFragment;
}

const PostCard: React.FunctionComponent<Props> = ({ post }) => {
  const node = post;
  const title = node.frontmatter?.title || node.fields?.slug;
  const tags = node.fields?.tags || [];
  const colorKey =
    node.frontmatter?.color &&
    Object.keys(Color).includes(node.frontmatter?.color)
      ? (node.frontmatter.color as ColorKey)
      : "purple";

  const slug = node.fields?.slug;
  if (!slug) {
    throw "Slug is required";
  }

  return (
    <section
      className={postCardStyles.card}
      style={{ background: Color[colorKey] }}
    >
      <Link to={slug} className={postCardStyles.title}>
        {title}
      </Link>
      <div className={postCardStyles.date}>{node.frontmatter?.date}</div>
      <div className={postCardStyles.tags}>
        {tags.map((tag) => (
          <Link
            to={`/tags/${tag}`}
            key={`/tags/${tag}`}
            className={postCardStyles.tag}
          >
            {tag}
          </Link>
        ))}
      </div>
      <Link to={slug} className={postCardStyles.more}>
        More &gt;
      </Link>
    </section>
  );
};

export default PostCard;

export const postCardFragment = graphql`
  fragment PostCard on MarkdownRemark {
    fields {
      slug
      tags
    }
    frontmatter {
      date(formatString: "M.D.YY")
      title
      color
    }
  }
`;
