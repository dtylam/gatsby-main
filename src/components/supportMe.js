import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaypal } from "@fortawesome/free-brands-svg-icons"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"
import MonzoIcon from "../images/monzoicon"

const SupportMe = () => {
  const data = useStaticQuery(graphql`
    query SupportMeQuery {
      site {
        siteMetadata {
          social {
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
    <>
      <h2 class="subtitle">Support Me</h2>
      <div class="level is-mobile" style={{ display: `flex` }}>
        <a
          class="button level-item has-background-info-light"
          href={`https://paypal.me/${social.paypal}`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faPaypal} />
          &nbsp;PayPal
        </a>
        <a
          class="button level-item has-background-danger-light"
          href={`https://monzo.me/${social.monzo}`}
          target="_blank"
          rel="noreferrer"
        >
          <MonzoIcon />
          &nbsp;Monzo
        </a>
        <a
          class="button level-item has-background-warning-light"
          href={`https://buymeacoff.ee/${social.buymeacoffee}`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faMugHot} />
          &nbsp;Buy Me a Coffee
        </a>
      </div>
    </>
  )
}

export default SupportMe
