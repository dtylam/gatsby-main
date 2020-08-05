import React from "react"

export const ProjectCard = ({
  title,
  description,
  logoChild,
  footerText,
  footerSrc,
}) => {
  return (
    <div className="card mb-5">
      <div className="card-content">
        <div className="media">
          <div className="media-left">{logoChild}</div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{description}</p>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <a
          href={footerSrc}
          class="card-footer-item"
          target="_blank"
          rel="noreferrer"
        >
          {footerText}
        </a>
      </footer>
    </div>
  )
}
