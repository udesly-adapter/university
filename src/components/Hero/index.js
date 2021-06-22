import React from 'react';
import './hero.css';
import { Link } from 'gatsby';

const Hero = () => {

    return (
        <div className="hero">
            <div className="hero-content-wrapper">
                <div className="hero-text-wrap">
                    <h1 className="hero-heading">The no<span className="text-space">-</span>code app to create any <span className="underline">project</span>
                    </h1>
                    <p className="big-paragraph max-width">Use <span className="text-span">Webflow</span> to design your project and <span className="text-span">convert</span> it in a seconds with Udesly, to create professional themes for Shopify, WordPress, Jamstack or Ghost.</p>
                    <div className="logo-wrapper">
                        <Link to="/shopify/getting-started" className="logo-container w-inline-block">
                            <img src="https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328a117e774358_webflow-to-shopify.svg" loading="lazy" alt="Webflow to Shopify" />
                        </Link>
                        <Link to="/wordpress/getting-started" className="logo-container w-inline-block">
                            <img src="https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328ae528774364_webflow-to-wordpress.svg" loading="lazy" alt="Webflow to WordPress" />
                        </Link>
                        <Link to="/jamstack/getting-started" className="logo-container w-inline-block">
                            <img src="https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328ab98277435a_webflow-to-jamstack.svg" loading="lazy" alt="Webflow to Jamstack" />
                        </Link>
                        <a href="#" style={{ cursor: "not-allowed" }} className="logo-container disabled w-inline-block"><img src="https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328ab132774363_webflow-to-ghost.svg" loading="lazy" alt="Webflow to Ghost" /></a>
                    </div><div className="button-container"><a href="https://www.udesly.com/why-udesly" target="_blank" rel="noopener noreferrer" className="arrow-link w-button">Why you should use Udesly </a></div></div><div className="hero-image-wrapper"><img src="https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328aa2e07743c6_hero-home.jpg" alt="udesly-hero" srcSet="https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328aa2e07743c6_hero-home-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328aa2e07743c6_hero-home-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60acf65ac9328ac27c774303/60acf65ac9328aa2e07743c6_hero-home.jpg 1000w" sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1439px) 58vw, 660px" width="500" className="hero-image" /></div></div>
        </div>
    );

}

export default Hero;