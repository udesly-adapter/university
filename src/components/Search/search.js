import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react"
import "./search.css"
import { StaticImage } from "gatsby-plugin-image"
import { DocContext } from "../Contexts/DocContext"
import { Link } from "gatsby"

export const Search = () => {
  const [isOpen, setOpen] = useState(false)

  const [results, setResults] = useState([])

  const [query, setQuery] = useState(``)

  const { post } = useContext(DocContext)

  const searchBox = useRef()

  const handleClickOutside = e => {
    if (searchBox.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setOpen(false)
  }

  const handleOpenSearch = useCallback(
    e => {
      if (e.keyCode === 70 && e.ctrlKey) {
        e.preventDefault()
        setOpen(!isOpen)
      }
    },
    [isOpen]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("mousedown", handleClickOutside)
      searchBox.current && searchBox.current.querySelector("input").focus()
    } else {
      document.body.style.overflow = ""
      document.removeEventListener("mousedown", handleClickOutside)
    }
    window.addEventListener("keydown", handleOpenSearch)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("keydown", handleOpenSearch)
    }
  }, [isOpen, handleOpenSearch])

  const search = useCallback(
    query => {
      if (!query) {
        setResults([])
        return
      }
      const searchIndex = window.__LUNR__[post.fields.cms]
      if (!searchIndex) {
        console.error("Search Index not found")
        setResults([])
        return
      }

      const searchResults = searchIndex.index.search(query)
      setResults(
        searchResults.map(({ ref, matchData }) => {
          const item = { ...searchIndex.store[ref] }
          const metadata = Object.values(matchData.metadata)[0]
          if (metadata) {
            for (let prop in metadata) {
              if (item[prop]) {
                try {
                  const [start, end] = metadata[prop]["position"][0]

                  if (start || end) {
                    const originalString = Array.from(item[prop])
                    originalString.splice(start, 0, "<mark>")
                    originalString.splice(start + end + 1, 0, "</mark>")
                    item[prop] = originalString.join("")
                  }
                } catch (e) {}
              }
            }
          }
          return item
        })
      )
    },
    [post.fields.cms]
  )

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const query = params.get("q")
    if (query) {
      setQuery(query)
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    if (!query) {
      return
    }
    search(query)
    const params = new URLSearchParams()
    params.set("q", query)
    window.history.replaceState(
      {},
      "",
      window.location.pathname + "?" + params.toString()
    )
  }, [query, search])

  return (
    <div className="flex-center mw-80">
      <span className="material-icons-outlined">search</span>
      <input
        type="search"
        placeholder="Search..."
        onClick={() => setOpen(true)}
        readOnly={true}
      ></input>
      <div className={"search-backdrop" + (isOpen ? " open" : " hidden")}>
        <div className="search-box" ref={searchBox}>
          <div className="header flex-center">
            <span className="material-icons-outlined">search</span>
            <input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            ></input>
            <button className="icon-button" onClick={() => setOpen(false)}>
            <span className="material-icons-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="results">
            <QueryResults query={query} results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

const QueryResults = ({ query, results }) => {
  if (!query) {
    return (
      <StaticImage
        src="../../images/search-placeholder.svg"
        alt="search-placeholder"
      />
    )
  }
  if (query && !results.length) {
    return (
      <div className="flex-center vertical">
        <StaticImage
          src="../../images/search-placeholder.svg"
          alt="search-placeholder"
        />
        <p>
          No results for: <strong>{query}</strong>
        </p>
      </div>
    )
  }
  if (results) {
    return (
      <div className="results-list">
        {results.map(result => (
          <Link key={result.url} to={result.url} className="result-item">
            <div
              className="result-item__folder"
              dangerouslySetInnerHTML={{ __html: result.folder }}
            ></div>
            <div
              className="result-item__title"
              dangerouslySetInnerHTML={{ __html: result.title }}
            ></div>
            <div
              className="result-item__excerpt"
              dangerouslySetInnerHTML={{ __html: result.excerpt }}
            ></div>
          </Link>
        ))}
      </div>
    )
  }
  return null
}

export default Search
