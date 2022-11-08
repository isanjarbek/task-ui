import React from "react"
import Product from "components/Product"
import ProductImg from "assets/images/product.png"
import BreadCrumb from "components/BreadCrumb"
import { SearchInput } from "components/FormElements"

import classes from "./style.module.css"

const Products = () => {
  const breadCrumb = [
    { id: 1, title: "Dashboard", path: "/admin/dashboard" },
    { id: 2, title: `Products` },
  ]
  return (
    <>
      <BreadCrumb breadCrumb={breadCrumb} />
      <h2 className="page_title">Products</h2>
      <SearchInput placeholder="Search by product name" />
      <h4 className={classes.section_title}>All Products (1)</h4>
      <section className={classes.products}>
        <Product
          id={1}
          gift
          exchange
          payInstallments
          image={ProductImg}
          name="Смартфон Samsung G..."
          price="7300000"
          payInstallmentsPrice="2435000"
        />
      </section>
    </>
  )
}

export default Products
