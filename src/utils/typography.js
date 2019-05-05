import Typography from "typography"

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
  bodyColor: '#575757',
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
