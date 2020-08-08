import React from "react";
import headerStyles from "./header.module.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDev, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/pro-solid-svg-icons";

import Color, { ColorKey } from "../utils/colors";
import Gray from "../utils/grays";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const ColoredBar = (props: { color: ColorKey }) => (
  <div
    className={headerStyles.coloredBar}
    style={{ color: Color[props.color] }}
    data-color={props.color}
  />
);

const SocialIcon = (props: { href: string; icon: IconProp; title: string }) => (
  <a
    href={props.href}
    className={headerStyles.socialIcon}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: Gray["near-black"] }}
  >
    <FontAwesomeIcon icon={props.icon} title={props.title} size="2x" />
  </a>
);

function Header() {
  return (
    <header>
      <div className={headerStyles.titleContainer}>
        <Link to="/" className={headerStyles.title}>
          corey<span style={{ color: Color.red }}>ja</span>
          <span className={headerStyles.titleSymbols}>://</span>
        </Link>
        <span className={headerStyles.subTitle}>complex to simple</span>
        <div className={headerStyles.socialIcons}>
          <SocialIcon
            href="https://www.github.com/coreyja"
            icon={faGithub}
            title="Github Profile Icon"
          />
          <SocialIcon
            href="https://dev.to/coreyja"
            icon={faDev}
            title="Dev.to Profile Icon"
          />
          <SocialIcon
            href="https://twitter.com/coreyja_dev"
            icon={faTwitter}
            title="Twitter Profile Icon"
          />
          <SocialIcon href="/rss.xml" icon={faRss} title="RSS Icon" />
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
  );
}

export default Header;
