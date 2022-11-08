import React, { useState } from "react"
import BreadCrumb from "components/BreadCrumb"
import {
  ArrowRightGreyIcon,
  DiscountGreyIcon,
  ExchangeIcon,
  GiftIcon,
  PayInstallmentsIcon,
} from "constants/icons"
import ProductImg from "assets/images/product.png"
import { separateNumberThousands } from "utils/numbers"
import { Checkbox } from "components/FormElements"
import Button from "components/FormElements/Button"

import classes from "./style.module.css"

const Details = () => {
  const [activeMonth, setActiveMonth] = useState(3)
  const product = {
    id: 1,
    name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
    price: 6000000,
    payInstallmentsPrice: 7300000,
    gift: true,
    exchange: true,
    payInstallments: true,
    discount: true,
    image: ProductImg,
  }

  const breadCrumb = [
    { id: 1, title: "Dashboard", path: "/admin/dashboard" },
    { id: 2, title: `Products`, path: "/admin/products" },
    {
      id: 2,
      title: product.name,
    },
  ]
  const months = [3, 6, 12, 24]
  return (
    <>
      <BreadCrumb breadCrumb={breadCrumb} />
      <div className={classes.product_details}>
        <h2 className="page_title">{product.name}</h2>
        <section className={classes.product_details_top}>
          <div className={classes.product_details_img}>
            <div className={classes.product_features}>
              {product.gift && <GiftIcon />}
              {product.payInstallments && <PayInstallmentsIcon />}
              {product.exchange && <ExchangeIcon />}
              {product.discount && <DiscountGreyIcon />}
            </div>
            <img src={product.image} alt="" className={classes.product_img} />
          </div>
          <div className={classes.product_details_info}>
            <div className={classes.product_details_info_box}>
              <p className={classes.product_details_info_title}>
                Цена телефона
              </p>
              <p className={classes.product_details_info_value}>
                {separateNumberThousands(product.price)} uzs
              </p>
            </div>
            <div className={classes.product_details_info_box}>
              <div className={classes.pay_installments_month_price_box}>
                <div className={classes.pay_installments_month_price}>
                  <p className={classes.product_details_info_title}>
                    Общая цена (с наценкой)
                  </p>
                  <p className={classes.product_details_info_value}>
                    {separateNumberThousands(product.payInstallmentsPrice)} uzs
                  </p>
                </div>
                <div className={classes.pay_installments_month_value}>
                  <span className={classes.pay_installments_price}>
                    {separateNumberThousands(2433333)} uzs
                  </span>
                  <span className={classes.pay_installments_price_month}>
                    x{activeMonth}
                  </span>
                </div>
              </div>

              <div className={classes.pay_installments_box_month}>
                {months.map((month) => (
                  <span
                    key={month}
                    onClick={() => setActiveMonth(month)}
                    className={`${
                      activeMonth === month &&
                      classes.pay_installments_month_active
                    } ${classes.pay_installments_month}`}
                  >
                    {month} мес
                  </span>
                ))}
              </div>

              <div className={classes.mark_up}>
                Наценка: <span className={classes.mark_up_value}> 5%</span>
              </div>
            </div>

            <div className={classes.characteristics}>
              <p className={classes.product_details_info_title}>
                Общие характеристики
              </p>
              <div className={classes.characteristic_elements}>
                <p>Тип: моноблок (классический)</p>
                <p>Стандарт: 2G, 3G, 4G (LTE), 5G </p>
                <p>Операционная система: iOS 14</p>
              </div>
            </div>

            <div className={classes.show_all}>
              <span className={classes.grey_title}>Показать все</span>
              <ArrowRightGreyIcon />
            </div>
          </div>
        </section>

        <section className={classes.product_details_bottom}>
          <p className={classes.grey_title}>Акции</p>

          <div className={classes.product_details_bottom_box}>
            <div className={classes.box_element_container}>
              <div className={classes.product_details_bottom_box_element}>
                <PayInstallmentsIcon />
                <div className={classes.product_details_box_element_title}>
                  Обменяй свой старый айфон и получи скидку на новый
                  <span>- 400 000 сум</span>
                </div>
              </div>
              <Checkbox />
            </div>
            <div className={classes.box_element_container}>
              <div className={classes.product_details_bottom_box_element}>
                <GiftIcon />
                <div className={classes.product_details_box_element_title}>
                  Наушники в подарок
                  <span>Apple EarPods</span>
                </div>
              </div>
              <Checkbox />
            </div>
            <div className={classes.box_element_container}>
              <div className={classes.product_details_bottom_box_element}>
                <ExchangeIcon />
                <div className={classes.product_details_box_element_title}>
                  Скидка 20% на смартфоны
                  <span>- 10 000 сум</span>
                </div>
              </div>
              <Checkbox />
            </div>
            <div className={classes.box_element_container}>
              <div className={classes.product_details_bottom_box_element}>
                <DiscountGreyIcon />
                <div className={classes.product_details_box_element_title}>
                  Скидка на айфоны
                  <p>IMEI 012345678901234</p>
                  <span>- 10 000 сум</span>
                </div>
              </div>
              <Checkbox />
            </div>
          </div>
        </section>

        <Button
          fullWidth
          onClick={() => {
            console.log("clicked")
          }}
        >
          Добавить в корзину
        </Button>
      </div>
    </>
  )
}

export default Details
