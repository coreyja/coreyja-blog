import React from "react"
import { graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"

import BlogLayout from "../components/blogLayout"
import SEO from "../components/seo"

const CategoryTemplate = ({ location, pageContext, data }) => {
	const { tag } = pageContext
	return (
		<BlogLayout location={location} title={`Posts in tag "${tag}"`}>
			<div className="tag-container">
				<SEO title={`Posts in tag "${tag}"`} />
					<h1>Tag: {tag}</h1>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
			</div>
		</BlogLayout>
	)
}

export const pageQuery = graphql`
	query TagPage($tag: String) {
		allMarkdownRemark(
			limit: 1000
			filter: { fields: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					fields {
						slug
						tags
					}
					excerpt
					frontmatter {
						title
						date
					}
				}
			}
		}
	}
			`

export default CategoryTemplate
