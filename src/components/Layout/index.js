import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

import classes from "./style.module.css"

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.content}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
