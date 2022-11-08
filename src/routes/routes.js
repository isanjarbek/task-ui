import { lazy } from "react"

const Dashboard = lazy(() => import("pages/Admin/Dashboard"))
const Orders = lazy(() => import("pages/Admin/Orders"))
const Products = lazy(() => import("pages/Admin/Products"))
const ProductDetails = lazy(() => import("pages/Admin/Products/_pages/Details"))
const Reviews = lazy(() => import("pages/Admin/Reviews"))
const CheckOut = lazy(() => import("pages/Admin/CheckOut"))

export const routes = [
  { path: "/admin/dashboard", element: <Dashboard /> },
  { path: "/admin/orders", element: <Orders /> },
  { path: "/admin/products", element: <Products /> },
  { path: "/admin/products/:id", element: <ProductDetails /> },
  { path: "/admin/reviews", element: <Reviews /> },
  { path: "/admin/checkout", element: <CheckOut /> },
]
