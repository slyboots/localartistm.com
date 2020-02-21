import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

fairyGateTheme.headerFontFamily = ["Prata", "serif"]
fairyGateTheme.bodyFontFamily = [
  "apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen-Sans",
  "Ubuntu",
  "Cantarell",
  "Helvetica Neue",
  "sans-serif",
]

fairyGateTheme.googleFonts = [
  { name: "Prata", styles: ["400", "500", "600"] },
  { name: "Odor Mean Chey", styles: ["500", "600", "700"] },
]

const typography = new Typography(fairyGateTheme)
export const { scale, rhythm, options } = typography
export default typography
