import React from "react"
import { Link } from "gatsby"

import Container from "../components/container"
import Header from "../components/header"

export default () => (
  <Container>
    <div style={{ color: `teal` }}>
      <Link to="/gallery/">Gallery</Link>
      <Header headerText="404:" />
      <p>Page not found.</p>
    </div>
  </Container>
)
