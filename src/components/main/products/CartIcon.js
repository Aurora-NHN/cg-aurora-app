import React from "react";
export default function CartIcon(){

    return(
        <div className="dropdown">
        <a
          className="dropdown-toggle dropdown-shopping-cart"
          href="#"
          role="button"
          id="dropdown-shopping-cart"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        
        >
          {/* <i className="fa fa-shopping-basket"></i>
          <span className="badge bg-maincolor">3</span>
          $27.00 */}
        </a>
        <div
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
                      </div> 
        </div>
              
    );
}