import React from 'react'
import postCardStyles from './postCard.module.scss'
import { Link } from 'gatsby'

import Color from '../styles/_colors.scss'

function PostCard (props) {
  const node = props.node
  const title = node.frontmatter.title || node.fields.slug
  const tags = node.fields.tags || []
  const color = node.frontmatter.color || 'red'

  return (
    <section className={postCardStyles.card} style={{ background: Color[color] }}>
      <Link to={node.fields.slug} className={postCardStyles.title}>
        {title}
      </Link>
      <div className={postCardStyles.date}>
        { node.frontmatter.date }
      </div>
      <div className={postCardStyles.tags}>
        {tags.map((tag) =>
          <Link to={`/tags/${tag}`} key={`/tags/${tag}`} className={postCardStyles.tag}>
            { tag }
          </Link>
        )}
      </div>
      <Link to={node.fields.slug} className={postCardStyles.more}>
        More >
      </Link>
    </section>
  )
}

export default PostCard

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
`
