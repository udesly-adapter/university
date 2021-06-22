import React from "react"
import Logo from "../logo"
import { Link } from "gatsby"
import Search from "../Search/search"
import "./header.css"
import HamburgerDoc from "../HamburgerDoc"

const Header = () => {
  return (
    <header className="doc">
      <div className="boxed-wrapper main-columns">
        <div className="only-mobile">
          <HamburgerDoc />
        </div>
        <div className="logo line-after">
          <Link className="flex-center w100" to="/">
            <Logo />
          </Link>
        </div>
        <div className="links hide-mobile"></div>
        <div className="search line-before flex-center">
          <Search />
        </div>
      </div>
    </header>
  )
}

export default Header
