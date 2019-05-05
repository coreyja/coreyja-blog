import React from "react"
import { graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"

import BlogLayout from "../components/blogLayout"
import SEO from "../components/seo"

const YearTemplate = ({ location, pageContext, data }) => {
	const { year } = pageContext
	return (
		<BlogLayout location={location} title={`Posts in year "${year}"`}>
			<div className="year-container">
				<SEO title={`Posts in year "${year}"`} />
					<h1>{year}</h1>
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
	query YearPage($year: Int) {
		allMarkdownRemark(
			limit: 1000
			filter: { fields: { year: { eq: $year } } }
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

export default YearTemplate
