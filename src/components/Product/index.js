import React from "react"
import { separateNumberThousands } from "utils/numbers"
import { ExchangeIcon, GiftIcon, PayInstallmentsIcon } from "constants/icons"

import classes from "./style.module.css"
import { Link } from "react-router-dom"

const Product = ({
  id,
  name,
  price,
  payInstallmentsPrice,
  gift,
  exchange,
  payInstallments,
  discount,
  image,
}) => {
  return (
    <Link to={`/admin/products/${id}`} className={classes.product}>
      <div className={classes.product_image_box}>
        <div className={classes.features}>
          {gift && <GiftIcon />}
          {payInstallments && <PayInstallmentsIcon />}
          {exchange && <ExchangeIcon />}
          {/* {discount && <ExchangeIcon />} */}
        </div>
        <img src={image} alt={name} />
      </div>
      <div className={classes.product_info}>
        <h3 className={classes.product_name}>{name}</h3>
        <p className={classes.price}>{separateNumberThousands(price)} uzs</p>
        <div className={classes.pay_intallments}>
          <span className={classes.pay_installments_price}>
            from {separateNumberThousands(payInstallmentsPrice)} uzs
          </span>
          <span className={classes.pay_installments_month}>x24</span>
        </div>
      </div>
    </Link>
  )
}

export default Product
