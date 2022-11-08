import React from "react"
import { Link } from "react-router-dom"
import { ArrowRightIcon } from "constants/icons"

import classes from "./style.module.css"

const BreadCrumb = ({ breadCrumb }) => {
  return (
    <div className={classes.breadcrumb}>
      {breadCrumb?.map((item, index) => (
        <li className={classes.bread_item} key={index}>
          {item.path ? (
            <span className={classes.item}>
              <Link to={item.path}>{item.title}</Link>
              <span className={classes.bread_crumb_seperator}>
                <ArrowRightIcon />
              </span>
            </span>
          ) : (
            <span className={classes.current_item}>{item.title}</span>
          )}
        </li>
      ))}
    </div>
  )
}

export default BreadCrumb
