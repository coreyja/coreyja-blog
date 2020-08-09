export type GrayKey =
  | "white"
  | "background"
  | "light"
  | "light-symbols"
  | "dark"
  | "high-contrast"
  | "near-black";

const Gray: Record<GrayKey, string> = {
  white: "#ffffff",
  background: "#dadada",
  light: "#bcbcbc",
  "light-symbols": "#949494",
  dark: "#767676",
  "high-contrast": "#575757",
  "near-black": "#1a1a1a"
};
export default Gray;
