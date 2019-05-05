/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Layout from "./layout"
import blogLayoutStyles from "./blogLayout.module.scss"

import Color from '../styles/_colors.scss'


function BlogLayout(props) {
  return (
    <Layout location={props.location} title={props.title}>
      <div className={blogLayoutStyles.BlogLayout}>
		      <header>
		        <h1 className={blogLayoutStyles.headerTitle}>
		          The Blog
		        </h1>
		        <p className={blogLayoutStyles.headerSubTitle}>
		          Where I can tell you what I think...
		        </p>
		      </header>
		      <div className={blogLayoutStyles.container}>
		        <section className={blogLayoutStyles.mainContent}>
		          {props.children}
		        </section>

		        <aside>
		          <h2 class="BlogSidebar-title">Recent Articles</h2>
		          <ul class="BlogSidebar-list">
		          </ul>

		          <h2 class="BlogSidebar-title">Tags</h2>
		          <ul class="BlogSidebar-list">
		          </ul>

		          <h2 class="BlogSidebar-title">By Year</h2>
		          <ul class="BlogSidebar-list">
		          </ul>
		        </aside>
		      </div>
		    </div>
      </Layout>
  )
}

export default BlogLayout
