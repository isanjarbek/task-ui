import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  CheckOutIcon,
  HomeIcon,
  OrderIcon,
  ProductIcon,
  ReviewIcon,
} from "constants/icons"

import classes from "./style.module.css"

const Sidebar = () => {
  const location = useLocation()

  const sidebarData = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: (
        <HomeIcon active={location.pathname.includes("/admin/dashboard")} />
      ),
    },
    {
      label: "Orders",
      path: "/admin/orders",
      icon: <OrderIcon active={location.pathname.includes("/admin/orders")} />,
    },
    {
      label: "Products",
      path: "/admin/products",
      icon: (
        <ProductIcon active={location.pathname.includes("/admin/products")} />
      ),
    },
    {
      label: "Reviews",
      path: "/admin/reviews",
      icon: (
        <ReviewIcon active={location.pathname.includes("/admin/reviews")} />
      ),
    },
    {
      label: "Checkouts",
      path: "/admin/checkout",
      icon: (
        <CheckOutIcon active={location.pathname.includes("/admin/checkout")} />
      ),
    },
  ]

  return (
    <aside className={classes.sidebar}>
      <div className={classes.menu}>
        <ul>
          {sidebarData?.map(({ icon, label, path }, key) => (
            <li key={key} className={classes.menu_link}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  location.pathname.includes(path) || isActive
                    ? `${classes.link} ${classes.active}`
                    : classes.link
                }
              >
                <span>{icon}</span>
                <span className={classes.label}>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
