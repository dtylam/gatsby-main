/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faSpotify } from "@fortawesome/free-brands-svg-icons"
import { rhythm } from "../utils/typography"
import ProfilePic from "../images/profilepic"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            spotify
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div class="card mb-5 mt-6">
      <div class="card-content">
        <div class="media">
          <ProfilePic />
          <div class="media-content">
            <p class="title is-4">{author.name}</p>
            <p class="subtitle is-6">{author.summary}</p>
            <div class="buttons">
              <a
                className="button"
                href={`https://twitter.com/${social.twitter}`}
                target="_blank"
                rel="noreferrer"
              >
                <span class="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </a>
              <a
                className="button"
                href={`https://open.spotify.com/user/${social.spotify}`}
                target="_blank"
                rel="noreferrer"
              >
                <span class="icon">
                  <FontAwesomeIcon icon={faSpotify} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
