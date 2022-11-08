import { ActiveCheckboxIcon } from "constants/icons"
import React, { forwardRef, useMemo, useState } from "react"

import classes from "./style.module.css"

const Checkbox = forwardRef(
  ({ name, title, value, checked, attr, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(checked || false)

    useMemo(() => {
      if (checked !== true) return
      setIsChecked(true)
    }, [checked])

    return (
      <div
        className={classes.input_container}
        onClick={() => {
          setIsChecked(!isChecked)
        }}
      >
        <input
          ref={ref}
          name={name}
          type="checkbox"
          value={value}
          checked={checked}
          className={classes.input}
          {...props}
        />
        {isChecked ? (
          <ActiveCheckboxIcon />
        ) : (
          <span className={classes.in_active_checkbox}></span>
        )}
      </div>
    )
  }
)

export default Checkbox
