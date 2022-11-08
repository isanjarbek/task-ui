import React from "react"
import { SearchIcon } from "constants/icons"

import classes from "./style.module.css"

const SearchInput = ({ placeholder }) => {
  return (
    <div className={classes.input_container}>
      <input type="text" placeholder={placeholder} className={classes.input} />
      <span className={classes.icon}>
        <SearchIcon />
      </span>
    </div>
  )
}

export default SearchInput
