import React from "react"
import DocNavigation from "./DocNavigation"
import "./doc-content.css"

const DocContent = ({ post, previous, next, githubUrl }) => {
  const mtime = new Date(post.parent.modifiedTime)

  const localDate = mtime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <article className="doc-post">
        <header>
          <h1 id="top">{post.frontmatter.title}</h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <div className="article-footer">
        <div className="article-meta"><small>
          Last updated: <time>{localDate}</time>
        </small>

        
          <a className="edit-on-github" href={githubUrl} target="_blank" rel="noopener noreferrer">Edit on Github <img src="/images/github-icon.png"></img></a>
          </div>
        <DocNavigation previous={previous} next={next} />
      </div>
    </>
  )
}

export default DocContent
