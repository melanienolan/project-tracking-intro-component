import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div
        className="absolute top-0 right-0 w-1/2 bg-neutral-100"
        style={{
          height: "45vh",
          borderBottomLeftRadius: "6rem",
          zIndex: "-1",
        }}
      ></div>
      <div className="container mx-auto h-screen">{children}</div>
    </>
  )
}

export default Layout
