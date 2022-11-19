import React from "react";
import headerStyles from "./header.module.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitch,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/pro-solid-svg-icons";

import Color from "../utils/colors";
import Gray from "../utils/grays";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ColoredBars from "./coloredBars";

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

const Header: React.FunctionComponent = () => (
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
          href="https://twitch.tv/coreyja"
          icon={faTwitch}
          title="Dev.to Profile Icon"
        />
        <SocialIcon
          href="https://toot.cat/@coreyja"
          icon={faMastodon}
          title="Fediverse Profile Icon"
        />
        <SocialIcon href="/rss.xml" icon={faRss} title="RSS Icon" />
      </div>
    </div>

    <ColoredBars />
  </header>
);

export default Header;
