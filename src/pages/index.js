import React from "react"
import { Link, graphql } from "gatsby"
import "./mystyles.scss"

import Bio from "../components/bio"
import Header from "../components/header"
import Layout from "../components/layout"
import { Projects } from "../components/projects"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import SupportMe from "../components/supportMe"
import { LatestBlogs } from "../components/latestBlogs"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <Header siteTitle={siteTitle} />
      <Layout>
        <SEO title="Home" />
        <div className="container">
          <div className="columns is-tablet is-multiline">
            <div className="column mr-5">
              <Bio />
              <LatestBlogs posts={posts} />
            </div>
            <div className="column is-4">
              <Projects />
            </div>
          </div>
        </div>
        <SupportMe />
      </Layout>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
