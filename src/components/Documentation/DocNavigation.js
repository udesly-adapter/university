import { Link } from "gatsby"
import React from "react"
import "./doc-external.css"

const DocNavigation = ({ previous, next }) => {
  return (
    <nav className="external-navigation">
      {previous && (
        <Link
          className="card-link previous"
          to={previous.fields.slug}
          rel="prev"
        >
          <div className="icon">
            <span className="material-icons-outlined">arrow_back</span>
          </div>{" "}
          <div className="card-body previous">
            <div className="folder">{previous.fields.sidebar.folder}</div>
            <div className="title">{previous.frontmatter.title}</div>
          </div>
        </Link>
      )}

      {next && (
        <Link className="card-link next" to={next.fields.slug} rel="next">
          <div className="card-body next">
            <div className="folder">{next.fields.sidebar.folder}</div>
            <div className="title">{next.frontmatter.title}</div>
          </div>
          <div className="icon">
            <span className="material-icons-outlined">arrow_forward</span>
          </div>
        </Link>
      )}
    </nav>
  )
}

export default DocNavigation
