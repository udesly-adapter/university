import React, {useEffect} from "react"
import Footer from "../Footer/footer"
// import { Link } from "gatsby"
import Header from "../Header/header"

const DocLayout = ({ children, className }) => {

  useEffect(() => {
    
      setTimeout(() => {
        const el = document.querySelector('.internal-nav-mobile');
        el.style.visibility = "visible";
        el.style.animationDuration = "0.3s";
      }, 100);
      document.body.setAttribute('data-layout', 'home');
    
  
    document.body.setAttribute('data-layout', 'doc');
  }, [])

  return (
    <>
      <Header />
      <main className={className + " doc-layout"}>{children}</main>
      <Footer />
    </>
  )
}

export default DocLayout
