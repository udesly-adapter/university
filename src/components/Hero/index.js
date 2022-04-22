import React from "react"
import "./hero.css"
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content-wrapper">
        <div className="hero-text-wrap">
          <h1 className="hero-heading">
            Easy docs, tips & tricks, tutorials...
          </h1>
          <p className="big-paragraph max-width">
            Follow our simple docs to convert your Webflow project. You will
            find any info you need to create simple or more advanced projects
            for Shopify, WordPress, Jamstack or Ghost.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
