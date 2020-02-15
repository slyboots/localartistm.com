import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/gallery/">Gallery</Link>
    <Header headerText="About Gatsby" />
    <p>Such wow. Very React.</p>
  </div>
)
