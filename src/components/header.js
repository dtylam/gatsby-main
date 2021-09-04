import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      style={{ background: `#00d1b2` }}
    >
      <div className="level is-mobile" style={{ display: `flex` }}>
        <div
          className="level-item has-text-centered"
          style={{
            margin: `0 auto`,
            padding: `1.45rem`,
          }}
        >
          <h1>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
