import React from "react"
import { ProjectCard } from "./projectCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import ChexplaindLogo from "../images/chexplaindlogo"
import GustoTimerLogo from "../images/gustotimerlogo"
import TflTelescopeLogo from "../images/tfltelescopelogo"

export const Projects = () => {
  return (
    <>
      <h2 className="subtitle mt-6">My Projects</h2>
      <ProjectCard
        title="The Literal Chinese Dictionary"
        description="A web app that shows what translations, cities, countries and names mean in Chinese, 2019"
        logoChild={<ChexplaindLogo />}
        footerText="Visit"
        footerSrc="https://chexplaind.github.io/"
      />
      <ProjectCard
        title="TfL Telescope"
        description="A simple web app to search for where a vehicle is currently in the TfL tube network, 2018"
        logoChild={<TflTelescopeLogo />}
        footerText="Visit"
        footerSrc="https://dtylam.github.io/tfl-telescope/"
      />
      <ProjectCard
        title="Dolce Gusto Timer"
        description="A touch timer for Nestle Dolce Gusto manual machines, 2017"
        logoChild={<GustoTimerLogo />}
        footerText="Get on Google Play"
        footerSrc="https://play.google.com/store/apps/details?id=com.dtylam.gustotimer"
      />
      <a
        alt="GitHub"
        href="https://github.com/dtylam"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
        &emsp; See more projects on GitHub
      </a>
    </>
  )
}
