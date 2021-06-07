import React from "react"
import { graphql } from "gatsby"

import DocLayout from "../components/Layouts/doc-layout"
import DocSeo from "../components/Documentation/DocSeo"
import DocContent from "../components/Documentation/DocContent"
import DocInternalNavigation from "../components/Documentation/DocInternalNavigation"
import DocSidebar from "../components/Documentation/DocSidebar"
import {DocContext} from '../components/Contexts/DocContext';


const DocTemplate = ({ data, location, pageContext, path }) => {
  // console.log(data, location, pageContext.sidebar, path)
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <DocContext.Provider value={{post, sidebar: pageContext.sidebar, path, previous, next}}>
      <DocLayout
        title={siteTitle}
        className={"content-page relative secondary"}
      >
        <DocSeo post={post} />
        <div className="sticky-wrapper oy-auto">
          <div className="content aside">
            <DocSidebar
              location={location}
              cms={post.fields.cms}
              sidebar={pageContext.sidebar}
            />
          </div>
        </div>
        <div className="main-content-wrapper">
          <div className="main-content">
            <DocContent post={post} previous={previous} next={next} />
          </div>
          <div className="sticky-wrapper">
            <DocInternalNavigation
              headings={post.headings}
              title={post.frontmatter.title}
            />
          </div>
        </div>
      </DocLayout>
    </DocContext.Provider>
  )
}

export default DocTemplate

export const pageQuery = graphql`
  query DocBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        cms
        slug
      }
      headings {
        id
        value,
        depth
      }
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      parent {
        ... on File {
          modifiedTime(formatString: "")
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
        sidebar {
          folder
        }
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
        sidebar {
          folder
        }
      }
      frontmatter {
        title
      }
    }
  }
`
