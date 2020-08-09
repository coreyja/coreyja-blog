/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import Layout from "./layout";
import BlogSidebar from "./blogSidebar";
import blogLayoutStyles from "./blogLayout.module.scss";

const BlogLayout: React.FunctionComponent = (props) => (
  <Layout>
    <div className={blogLayoutStyles.BlogLayout}>
      <header>
        <h1 className={blogLayoutStyles.headerTitle}>The Blog</h1>
        <p className={blogLayoutStyles.headerSubTitle}>
          Where I can tell you what I think...
        </p>
      </header>
      <div className={blogLayoutStyles.container}>
        <section className={blogLayoutStyles.mainContent}>
          {props.children}
        </section>

        <aside>
          <BlogSidebar />
        </aside>
      </div>
    </div>
  </Layout>
);

export default BlogLayout;
