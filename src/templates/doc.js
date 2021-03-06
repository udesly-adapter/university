import React from "react"
import { graphql } from "gatsby"

import DocLayout from "../components/Layouts/doc-layout"
import DocSeo from "../components/Documentation/DocSeo"
import DocContent from "../components/Documentation/DocContent"
import DocSidebar from "../components/Documentation/DocSidebar"
import { DocContext } from '../components/Contexts/DocContext';

const DocInternalNavigation = React.lazy(() =>
  import("../components/Documentation/DocInternalNavigation")
)

const DocTemplate = ({ data, location, pageContext, path }) => {
  // console.log(data, location, pageContext.sidebar, path)
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Doc`
  const { previous, next } = data

  const githubUrl = data.site.siteMetadata.repoUrl + 'blob/main/docs/' + data.markdownRemark.fields.cms + "/" + data.markdownRemark.parent.relativePath;

  const isSSR = typeof window === "undefined"

  return (
    <DocContext.Provider value={{ post, sidebar: pageContext.sidebar, path, previous, next }}>
        <div className="only-mobile sidebar-mobile" style={{transform: 'translateX(-100%)'}}>
          <DocSidebar
          location={location}
          cms={post.fields.cms}
          sidebar={pageContext.sidebar}
        />
        </div>
      <DocLayout
        title={siteTitle}
        className={"content-page relative secondary"}
      >
        <DocSeo post={post} />
        <div className="sticky-wrapper oy-auto hide-mobile">
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
            <DocContent post={post} githubUrl={githubUrl} previous={previous} next={next} />
          </div>
          <div className="sticky-wrapper">
          {!isSSR && (
        <React.Suspense fallback={<div />}>
          <DocInternalNavigation
              headings={post.headings}
              title={post.frontmatter.title}
            />
        </React.Suspense>
      )}
            
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
        repoUrl
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
          relativePath
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
