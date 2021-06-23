import React, { useRef, useCallback, useState, useEffect } from 'react';
import {Link} from 'gatsby';
import wfToWordPress from '../../../static/images/webflow-to-wordpress.svg';
import wfToShopify from '../../../static/images/webflow-to-shopify.svg';
import wfToJamstack from '../../../static/images/webflow-to-jamstack.svg';
import wfToGhost from '../../../static/images/webflow-to-ghost.svg';

const Hamburger = () => {

  const [open, setOpen] = useState(false);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);


  const toggleMenu = useCallback(() => {
    if (!open) {
      line1.current.animate([
        { transform: "translateY(6px) rotate(-45deg)" }
      ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out"
      })
      line3.current.animate([
        { transform: "translateY(-6px) rotate(45deg)" }
      ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out"
      })
      line2.current.animate([
        { opacity: 0 }
      ], {
        duration: 200,
        easing: "ease-in-out",
        fill: "forwards",
      })
    } else {
      line1.current.animate([
        { transform: "translateY(0px) rotate(0deg)" }
      ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out"
      })
      line3.current.animate([
        { transform: "translateY(0px) rotate(0deg)" }
      ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out"
      })
      line2.current.animate([
        { opacity: 1 }
      ], {
        duration: 200,
        delay: 100,
        easing: "ease-in-out",
        fill: "forwards",
      })
    }
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [open])

  return (
    <>
      <button className="hamburger-button" onClick={toggleMenu}>
        <div className="hamburger-line-01" ref={line1}></div>
        <div className="hamburger-line-02" ref={line2}></div>
        <div className="hamburger-line-03" ref={line3}></div>
      </button>
      <div className={"mobile-menu" + (open ? " open" : " closed")}>
        <div className="mobile-links">
          <Link className="dropdown-link" to="/shopify/getting-started">
            <img src={wfToShopify} alt="webflow to shopify" />
            Webflow to Shopify
          </Link>
          <Link className="dropdown-link" to="/wordpress/getting-started">
            <img src={wfToWordPress} alt="webflow to wordpress" />
            Webflow to WordPress
          </Link>
          <Link className="dropdown-link" to="/jamstack/getting-started">
            <img src={wfToJamstack} alt="webflow to jamstack" />
            Webflow to JamStack
          </Link>

          <a className="dropdown-link disabled" href="#">
            <img src={wfToGhost} alt="webflow to ghost" />
            Webflow to Ghost
          </a>
          <a href="https://studio.udesly.com" target="_blank" rel="noreferrer noopener">Studio</a>
          <a href="https://udesly.com/help-center" target="_blank" rel="noreferrer noopener">Support</a>
        </div>
        <a href="https://udesly.com/" target="_blank" rel="noreferrer noopener" className="main">Back to Udesly</a>
      </div>
    </>
  )

}


export default Hamburger;