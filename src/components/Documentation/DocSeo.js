import React from "react"
import SEO from "../../components/seo"
import { capitalize } from "../../utils/strings"


const DocSeo = ({ post }) => {
  
  return (
    <SEO
      title={`${post.frontmatter.title} | ${capitalize(post.fields.cms)}`}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default DocSeo
