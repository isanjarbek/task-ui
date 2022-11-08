import React from "react"
import cn from "classnames"

import classes from "./style.module.css"

const Button = ({
  children,
  className,
  iconMode,
  singleIconMode,
  addMode,
  filter,
  fullWidth,
  active,
  ...props
}) => {
  const classNames = cn(
    className && className,
    active && classes.active_button,
    fullWidth && classes.full_width,
    addMode && classes.btn_add
  )
  return (
    <button className={`${classes.button} ${classNames}`} {...props}>
      {children}
    </button>
  )
}

export default Button
