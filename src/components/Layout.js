import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="container mx-auto h-screen">{children}</div>
    </>
  )
}

export default Layout
