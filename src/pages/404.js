import * as React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import logo from '../../static/images/logo.svg';

const NotFoundPage = ({ data }) => {

  return (
    <>
      <SEO title="404: Not Found" />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>
        <img src={logo} alt="logo" width="200px" height="auto"/>
        <h1 style={{fontWeight: "normal", marginTop: "30px"}}>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link className="main-button" to="/">Back to Home</Link>
      </div>

    </>
  )
}

export default NotFoundPage