import React, {useEffect} from "react"
import { Link } from "gatsby"
import Lottie from "lottie-react";
import './layout.css';
import anim from '../udesly-menu-lottie.json';

const Layout = ({ location, title, children }) => {
 

  return (
    <>
      <header className="udesly-doc-header">
          <nav className="navigation">
          <div className="navigation-container">
          <Link to="/">
            <Lottie animationData={anim} loop={false} autoplay={true} className="logo"/>
          </Link>
          <div className="dropdown" role="button">
            <div>Integrations</div>
            <div class="navigation-dropdown-parent">
            <div className="navigation-dropdown-wrapper">
              <Link className="dropdown-link" to="/wordpress/getting-started">
                Webflow to WordPress
              </Link>
              <Link className="dropdown-link" to="/jamstack/getting-started">
                Webflow to JamStack
              </Link>
              <Link className="dropdown-link" to="/shopify/getting-started">
                Webflow to Shopify
              </Link>
            </div>
            </div>
          </div>
          </div>
          </nav>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
      </footer>
    </>
  )
}

export default Layout
