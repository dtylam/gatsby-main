import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faSpotify, faPaypal } from "@fortawesome/free-brands-svg-icons"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          social {
            twitter,
            instagram,
            spotify,
            paypal,
            monzo,
            buymeacoffee
          }
        }
      }
    }
  `)
  const { social } = data.site.siteMetadata
  return (
    <nav class="navbar is-fixed-top" role="navigation" style={{ background: `#00d1b2` }}>
      <div
        class="navbar-brand"
        style={{
          margin: `0 auto`,
          padding: `1.45rem`,
        }}
      >
        <h1>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div class="navbar-menu is-active">
        <div div class="navbar-start">
          <a class="navbar-item" href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a class="navbar-item" href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a class="navbar-item" href={`https://https://open.spotify.com/user/${social.spotify}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <a class="navbar-item" href={`https://paypal.me/${social.paypal}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faPaypal} />
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
