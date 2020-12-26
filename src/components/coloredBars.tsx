import React from "react";

import styles from "./coloredBars.module.scss";
import Color, { ColorKey } from "../utils/colors";

const ColoredBar = (props: { color: ColorKey }) => (
  <div
    className={styles.coloredBar}
    style={{ color: Color[props.color] }}
    data-color={props.color}
  />
);

const ColoredBars: React.FunctionComponent = () => (
  <div className={styles.coloredBars}>
    <ColoredBar color="red" />
    <ColoredBar color="purple" />
    <ColoredBar color="green" />
    <ColoredBar color="orange" />
    <ColoredBar color="blue" />
  </div>
);

export default ColoredBars;
