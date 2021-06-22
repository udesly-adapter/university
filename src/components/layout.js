import React, { useEffect, useRef, useState, useCallback } from "react"
import { Link } from "gatsby"
import { useLottie } from "lottie-react";
import './layout.css';
import anim from '../udesly-menu-lottie.json';
import wfToWordPress from '../../static/images/webflow-to-wordpress.svg';
import wfToShopify from '../../static/images/webflow-to-shopify.svg';
import wfToJamstack from '../../static/images/webflow-to-jamstack.svg';
import wfToGhost from '../../static/images/webflow-to-ghost.svg';
import Footer from './Footer/footer';
import Hamburger from "./Hamburger";

const Layout = ({ children }) => {

  useEffect(() => {
    setTimeout(() => {
      const el = document.querySelector('.navigation-dropdown-parent');
      el.style.visibility = "visible";
      el.style.animationDuration = "0.3s";
    }, 100);
    document.body.setAttribute('data-layout', 'home');
  }, [])


  const Lottie = useLottie({
    loop: false,
    autoplay: true,
    animationData: anim,
    className: "logo",
    onClick: () => {
      Lottie.setDirection(Lottie.animationItem.playDirection * -1);
      Lottie.play();
    },
    onComplete: () => {
      if (Lottie.animationItem.playDirection == -1) {
        setTimeout(() => {
          Lottie.setDirection(Lottie.animationItem.playDirection * -1);
          Lottie.play();
        }, 250)
      }
    }
  })


  return (
    <>
      <header className="udesly-doc-homepage-header">
        <nav className="navigation">
          <div className="navigation-container">
            <Link to="/">
              {Lottie.View}
            </Link>
            <div style={{ flex: 1 }}></div>
            <div className="only-on-desktop">
              <div className="dropdown" role="button">
                <div>Integrations</div>
                <div className="navigation-dropdown-parent">
                  <div className="navigation-dropdown-wrapper">
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
                  </div>
                </div>
              </div>
              <a href="https://studio.udesly.com" target="_blank" rel="noreferrer noopener">Studio</a>
              <a href="https://udesly.com/help-center" target="_blank" rel="noreferrer noopener">Support</a>
              <a href="https://udesly.com/" target="_blank" rel="noreferrer noopener" className="main">Back to Udesly</a>
            </div>
            
            <Hamburger />
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
