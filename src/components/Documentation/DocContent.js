import React, {useEffect, useRef} from "react"
import DocInternalNavigationMobile from "./DocInternalNavigationMobile"
import "./doc-content.css"
import DocNavigation from './DocNavigation'


const DocContent = ({ post, previous, next, githubUrl }) => {
  const mtime = new Date(post.parent.modifiedTime)

  const localDate = mtime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const postRef = useRef(null);

  useEffect(() => {
    if (postRef.current) {
      postRef.current.querySelectorAll('li p').forEach(p => p.closest('li').style.display ="flex")
    }
  }, [postRef])

  return (
    <>
      <article className="doc-post">
        <header>
          <h1 id="top">{post.frontmatter.title}</h1>
           <DocInternalNavigationMobile
              headings={post.headings}
              title={post.frontmatter.title}
            />
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} ref={postRef}/>
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
