import React from "react"
import "./hero.css"
import { Link } from "gatsby"
import heroImage from "../../../static/images/hero-image.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content-wrapper">
        <div className="hero-text-wrap">
          <h1 className="hero-heading">
            Easy docs, tips & tricks, tutorials...
          </h1>
          <p className="big-paragraph max-width">
            Use <span className="text-span">Webflow</span> to design your
            project and <span className="text-span">convert</span> it in a
            seconds with Udesly, to create professional themes for Shopify,
            WordPress, Jamstack or Ghost.
          </p>
          <div className="logo-wrapper">
            <Link
              to="/shopify/getting-started"
              className="logo-container w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328a117e774358_webflow-to-shopify.svg"
                loading="lazy"
                alt="Webflow to Shopify"
              />
            </Link>
            <Link
              to="/wordpress/getting-started"
              className="logo-container w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328ae528774364_webflow-to-wordpress.svg"
                loading="lazy"
                alt="Webflow to WordPress"
              />
            </Link>
            <Link
              to="/jamstack/getting-started"
              className="logo-container w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328ab98277435a_webflow-to-jamstack.svg"
                loading="lazy"
                alt="Webflow to Jamstack"
              />
            </Link>
            <Link
              to="/ghost/getting-started"
              className="logo-container w-inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328ab132774363_webflow-to-ghost.svg"
                loading="lazy"
                alt="Webflow to Ghost"
              />
            </Link>
          </div>
          <div className="button-container">
            <a
              href="https://www.udesly.com/why-udesly"
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link w-button"
            >
              Why you should use Udesly{" "}
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="udesly-hero" className="hero-image" />
        </div>
      </div>
    </div>
  )
}

export default Hero
