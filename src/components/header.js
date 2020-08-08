import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faSpotify,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons"
import {
  faMugHot
}from "@fortawesome/free-solid-svg-icons"
import MonzoIcon from "../images/monzoicon"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          social {
            twitter
            instagram
            spotify
            paypal
            monzo
            buymeacoffee
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
      <div class="level is-mobile" style={{display: `flex`}}>
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
        <a
          class="level-item"
          style={{minHeight: `100%`, display: `flex`}}
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          class="level-item"
          href={`https://instagram.com/${social.instagram}`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          class="level-item"
          href={`https://https://open.spotify.com/user/${social.spotify}`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a
          class="level-item"
          href={`https://paypal.me/${social.paypal}`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faPaypal} />
        </a>
        <a
          class="level-item"
          href={`https://monzo.me/${social.monzo}`}
          target="_blank"
          rel="noreferrer"
        >
          <MonzoIcon/>
        </a>
        <a
          class="level-item"
          href={`https://buymeacoff.ee/${social.buymeacoffee}`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faMugHot} />
        </a>
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
