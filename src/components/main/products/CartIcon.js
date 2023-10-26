import React, { useEffect, useState } from "react";
import {
  selectCart,
  getCart,
} from "~/features/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function CartIcon({ cart }) {
  const newCart = useSelector(selectCart);
  const [currentCart, setCurrentCart] = useState(cart);
  const dispatch = useDispatch();

  const showCart = () => {
    let token = localStorage.getItem("token");
    dispatch(getCart(token));
  };
  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(price);
  }
  useEffect(() => {
    setCurrentCart(newCart);
  }, [newCart]);

  return (
    <div className="dropdown">
      <Link to="/cart" onClick={showCart}>
        <div className="dropdown-toggle dropdown-shopping-cart">
          <i className="fa fa-shopping-basket"></i>
          {currentCart.cartLineDTOList === undefined ||
          currentCart.cartLineDTOList.length === 0 ? (
            <span className="badge bg-maincolor">0</span>
          ) : (
            <span className="badge bg-maincolor">
              {currentCart.cartLineDTOList.length}
            </span>
          )}
          {currentCart.totalAmount === undefined
            ? formatCurrency(0)
            : formatCurrency(currentCart.totalAmount)}
        </div>
      </Link>
      {/* <i className="fa fa-shopping-basket"></i>
          <span className="badge bg-maincolor">3</span>
          $27.00 */}
      {/* </a> */}
      {/* <div
                        className="dropdown-menu dropdown-menu-right ds bs box-shadow bordered rounded"
                        aria-labelledby="dropdown-shopping-cart"
                      >
                        <div className="widget woocommerce widget_shopping_cart">
                          <div className="widget_shopping_cart_content">
                            <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                              <li className="woocommerce-mini-cart-item mini_cart_item">
                                <a
                                  href="#"
                                  className="remove"
                                  aria-label="Remove this item"
                                  data-product_id="73"
                                  data-product_sku=""
                                >
                                  ×
                                </a>
                                <a href="shop-product-right.html">
                                  <img src={shop37} alt="img" />
                                  Quidem repellat repellendus sit suscipit
                                </a>

                                <span className="quantity">
                                  1 ×
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                      $
                                    </span>
                                    12.00
                                  </span>
                                </span>
                              </li>
                              <li className="woocommerce-mini-cart-item mini_cart_item">
                                <a
                                  href="#"
                                  className="remove"
                                  aria-label="Remove this item"
                                  data-product_id="76"
                                  data-product_sku=""
                                >
                                  ×
                                </a>
                                <a href="shop-product-right.html">
                                  <img src={shop26} alt="img" />
                                  Laudantium nostrum quas quasi quisquam
                                </a>

                                <span className="quantity">
                                  1 ×
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                      $
                                    </span>
                                    15.00
                                  </span>
                                </span>
                              </li>
                            </ul>

                            <p className="woocommerce-mini-cart__total total">
                              <strong>Subtotal: </strong>
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                27.00
                              </span>
                            </p>

                            <div className="woocommerce-mini-cart__buttons buttons d-flex justify-content-around">
                              <Link to="/cart" className="button wc-forward">
                                View cart
                              </Link>
                              <button className="button checkout wc-forward">
                                Checkout
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>  */}
    </div>
  );
}
