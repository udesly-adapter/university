import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero';
import Tutorials from "../components/Tutorials";
import Cards from "../components/Cards";

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="How to convert Webflow to WordPress, Shopify, JamStack and Ghost" />
      <Hero />
      <Tutorials />
      <Cards />
    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
