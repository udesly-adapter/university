import React from "react"
import Footer from "../Footer/footer"
// import { Link } from "gatsby"
import Header from "../Header/header"

const DocLayout = ({ children, className }) => {

  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  )
}

export default DocLayout
