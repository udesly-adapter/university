import React from "react"
import SEO from "../../components/seo"
import { capitalize } from "../../utils/strings"


const DocSeo = ({ post }) => {
  
 const [_, folder, _1] = post.fields.slug.split("/").filter(e => !!e);

  return (
    <SEO
      title={`${post.frontmatter.title} | ${capitalize(folder.replace(/-/gm, ' '))} | ${capitalize(post.fields.cms).replace('Wordpress','WordPress')}`}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default DocSeo
