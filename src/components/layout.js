import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Header from "./header.js"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          // maxWidth: rhythm(24),
          // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          WebkitFontSmoothing: 'antialiased',
					MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <Header />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
