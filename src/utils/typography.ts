import Typography from "typography";
import Grays from "../utils/grays";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Oswald", "sans-serif"],
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif"
  ],
  bodyColor: Grays["high-contrast"],
  headerWeight: 600,
  headerColor: Grays.dark,
  overrideThemeStyles: ({ rhythm }) => ({
    "p, h1, h2, h3, h4, h5, h6": {
      marginBottom: rhythm(1),
      marginTop: rhythm(1)
    }
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
