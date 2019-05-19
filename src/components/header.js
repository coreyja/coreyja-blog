import React from "react";
import headerStyles from "./header.module.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDev } from "@fortawesome/free-brands-svg-icons";

import Color from "../utils/colors";
import Gray from "../utils/grays";

const ColoredBar = props => (
  <div
    className={headerStyles.coloredBar}
    style={{ color: Color[props.color] }}
    data-color={props.color}
  />
);

const SocialIcon = props => (
  <a
    href={props.href}
    className={headerStyles.socialIcon}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: Gray["near-black"] }}
  >
    <FontAwesomeIcon icon={props.icon} size="2x" />
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
          <SocialIcon href="https://www.github.com/coreyja" icon={faGithub} />
          <SocialIcon href="https://dev.to/coreyja" icon={faDev} />
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
