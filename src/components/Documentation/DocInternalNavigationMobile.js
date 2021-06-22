import React, { useState } from "react"
import "./doc-internal-mobile.css"


const DocInternalNavigation = ({ headings }) => {

  const handleScrollClick = (e, id) => {
    e.preventDefault()
   
    window.history.replaceState({}, "", window.location.pathname + "#" + id)
    document.getElementById(id).scrollIntoView({ offset: 10 })
    window.dispatchEvent(new HashChangeEvent("hashchange"))
    setOpen(false);
  }

  const [open, setOpen] = useState(false);

  return (
    <>
       <button className="internal-nav-button" onClick={() => setOpen(!open)}>
          <span className="material-icons-outlined" style={{fontSize: 16, marginLeft: 0}}>format_align_right</span>
          {open && <div className="internal-nav-backdrop"></div>} 
        </button>
          <nav className={"internal-nav-mobile" + (open? " open" : "")}>
            {(headings || [])
              .filter(heading => [2, 3].includes(heading.depth))
              .map(heading => (
                <a
                  onClick={e => handleScrollClick(e, heading.id)}
                  href={"#" + heading.id}
                  key={heading.id}
                  className={
                    "depth-" +
                    heading.depth              
                  }
                >
                  {heading.value}
                </a>
              ))}
          </nav>
          

            
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
