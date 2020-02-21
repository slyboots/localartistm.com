import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
    {/* <Header headerText="About Gatsby" /> */}
    <h1>Hi! I'm trying to migrate my wife's set away from stupid stinky wordpress!</h1>
    <Link to="/gallery/">Gallery</Link>
    <p>What do I like to do? Lots of course but definitely enjoy building websites.</p>
    <p>Such wow. Very React.</p>
  </Layout>
)
