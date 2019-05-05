/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import headerStyles from "./header.module.scss"

import { rhythm } from "../utils/typography"
import Color from '../styles/colors.scss'

const ColoredBar = props => (
	<div className={headerStyles.coloredBar} style={{ color: Color[props.color] }} data-color={props.color}></div>
)

const SocialIcon = props => (
  <a href={props.href} className={headerStyles.socialIcon} target="_blank" rel="noopener">
    <img src={props.src} />
  </a>
)

function Header() {
  return (
    <header>
		  <div className={headerStyles.titleContainer}>
		    <a href='/' className={headerStyles.title}>
		      corey<span style={{ color: Color.red }}>ja</span><span className={headerStyles.titleSymbols}>://</span>
		    </a>
		    <span className={headerStyles.subTitle}>complex to simple</span>
		    <div className={headerStyles.socialIcons}>
            <SocialIcon href="https://www.github.com/coreyja" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
            <SocialIcon href="https://dev.to/coreyja" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" />
		    </div>
		  </div>

		  <div className={headerStyles.coloredBars}>
				<ColoredBar color="red" />
				<ColoredBar color="purple" />
				<ColoredBar color="green" />
				<ColoredBar color="orange" />
				<ColoredBar color="blue" />
		  </div>
		</header>
  )
}

export default Header
