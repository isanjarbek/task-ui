import { AccountIcon, BellIcon } from "constants/icons"
import React from "react"
import { Link } from "react-router-dom"

import classes from "./style.module.css"

const Header = () => {
  return (
    <header>
      <div className={classes.logo}>
        <Link>LOGO</Link>
      </div>
      <div className={classes.right_content}>
        <div className={classes.notification}>
          <BellIcon />
          <span className={classes.notifations_count}>1</span>
        </div>
        <div className={classes.profile}>
          Personal Area
          <AccountIcon />
        </div>
      </div>
    </header>
  )
}

export default Header
