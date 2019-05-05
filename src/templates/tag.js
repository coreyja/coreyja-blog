import React from "react"
import { graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"

import BlogLayout from "../components/blogLayout"
import PostCards from "../components/postCards"
import SEO from "../components/seo"

const CategoryTemplate = ({ location, pageContext, data }) => {
	const { tag } = pageContext
	return (
		<BlogLayout location={location} title={`Posts in tag "${tag}"`}>
			<div className="tag-container">
				<SEO title={`Posts in tag "${tag}"`} />
					<h1>Tag: {tag}</h1>
          <PostCards nodes={data.allMarkdownRemark.edges} />
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
          ...PostCard
				}
			}
		}
	}
			`

export default CategoryTemplate
