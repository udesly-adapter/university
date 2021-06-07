import React, { useState, useEffect } from "react"
import "./doc-internal.css"
import "waypoints/lib/noframework.waypoints"

const initWaypoint = () => {
  document.body
    .querySelector("article section")
    .querySelectorAll("h2,h3")
    .forEach(el => {
      new window.Waypoint({
        element: el,
        handler: () => {
          window.history.replaceState(
            {},
            "",
            window.location.pathname + "#" + el.id
          )
          window.dispatchEvent(new HashChangeEvent("hashchange"))
        },
      })
    })
}

const destroyWaypoints = () => {
  window.Waypoint.destroyAll()
}

const DocInternalNavigation = ({ title, headings }) => {
  const [activeSection, setActiveSection] = useState(null)

  const onHashChange = () => {
    setActiveSection(window.location.hash.replace("#", ""))
  }

  useEffect(() => {
    initWaypoint()
    onHashChange()

    if (window.location.hash) {
      window.Waypoint.disableAll()
      setTimeout(() => {
        window.Waypoint.enableAll()
      }, 3000)
    }

    window.addEventListener("hashchange", onHashChange)

    const enterTarget = document.getElementById("back-to-top-enter-target")

    const exitTarget = document.getElementById("back-to-top-exit-target")

    const scrollToTopBtn = document.getElementById("scroll-to-top-btn")

    if (window.scrollY > enterTarget.getBoundingClientRect().y) {
      scrollToTopBtn.classList.add("showBtn")
    }

    document.body.append(enterTarget, exitTarget)

    function enterCallback(entries) {
      // The callback will return an array of entries, even if you are only observing a single item
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Show button
          scrollToTopBtn.classList.add("showBtn")
        }
      })
    }

    function exitCallback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Show button
          scrollToTopBtn.classList.remove("showBtn")
        }
      })
    }

    let observer = new IntersectionObserver(enterCallback)

    let observer2 = new IntersectionObserver(exitCallback)

    observer.observe(enterTarget)

    observer2.observe(exitTarget)

    return () => {
      window.removeEventListener("hashchange", onHashChange)
      observer.disconnect()
      observer2.disconnect()
      destroyWaypoints()
    }
  }, [])

  const handleScrollClick = (e, id) => {
    e.preventDefault()
    window.Waypoint.disableAll()
    window.history.replaceState({}, "", window.location.pathname + "#" + id)
    document.getElementById(id).scrollIntoView({ offset: 10 })
    window.dispatchEvent(new HashChangeEvent("hashchange"))

    setTimeout(() => {
      window.Waypoint.enableAll()
    }, 3000)
  }

  return (
    <>
      <div className="internal-navigation-wrapper">
        <div className="internal-navigation">
          <div
            onKeyPress={e => e.key === "Enter" && handleScrollClick(e, "top")}
            tabIndex="0"
            role="button"
            className="internal-navigation-header flex-center"
            onClick={e => handleScrollClick(e, "top")}
          >
            <span className="material-icons-outlined" style={{fontSize: 16, marginLeft: 0}}>format_align_right</span>
            <span>{title}</span>
          </div>
          <nav>
            {headings
              .filter(heading => [2, 3].includes(heading.depth))
              .map(heading => (
                <a
                  onClick={e => handleScrollClick(e, heading.id)}
                  href={"#" + heading.id}
                  key={heading.id}
                  className={
                    "depth-" +
                    heading.depth +
                    " " +
                    (activeSection === heading.id ? "active" : "")
                  }
                >
                  {heading.value}
                </a>
              ))}
          </nav>
        </div>
      </div>
      <div id="back-to-top-exit-target"></div>
      <div id="back-to-top-enter-target"></div>

      <a
        href="#top"
        id="scroll-to-top-btn"
        onClick={e => handleScrollClick(e, "top")}
      >
        <span className="material-icons-outlined">arrow_upward</span>
      </a>
    </>
  )
}

export default DocInternalNavigation
