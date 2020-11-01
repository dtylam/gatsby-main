import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

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
  const { social } = data.site.siteMetadata
  return (
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      style={{ background: `#00d1b2` }}
    >
      <div class="level is-mobile" style={{ display: `flex` }}>
        <div
          class="level-item has-text-centered"
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
        <div class="level-item has-text-centered">
          <a
            style={{ minHeight: `100%`, display: `flex` }}
            href={`https://twitter.com/${social.twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faTwitter} />
          </a>
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
