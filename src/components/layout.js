import React from "react"

import { rhythm } from "../utils/typography"

const Layout = ({ children }) => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }}
  >
    <main>{children}</main>
    <footer>
      dtylam © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` and `}
      <a href="https://bulma.io">Bulma</a>
    </footer>
  </div>
)

export default Layout
