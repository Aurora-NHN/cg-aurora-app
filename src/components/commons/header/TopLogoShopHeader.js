import React from "react";
import logo from "~/assets/images/logo.png";
import shop26 from "~/assets/images/shop/26.jpg";
import shop37 from "~/assets/images/shop/37.jpg";
import { Link } from "react-router-dom";
import DynamicHeader from "~/components/commons/header/DynamicHeader";

const ShopHeader = ({ loggedIn = false }) => {
  return (
    <>

      <section className="page_toplogo ds bs c-my-10 s-py-10">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center text-lg-start">
              <Link to="/" className="logo">
                <img src={logo} alt="img" />
                <span className="logo-text color-darkgrey">Aurora</span>
              </Link>
            </div>

            <div className="col-lg-4 text-center">
              <div className="widget widget_search">
                <form
                  role="search"
                  method="get"
                  className="search-form"
                  action="/"
                >
                  <label htmlFor="search-form-top">
                    <span className="screen-reader-text">Search for:</span>
                  </label>
                  <input
                    type="search"
                    id="search-form-top"
                    className="search-field"
                    placeholder="Search keyword"
                    name="search"
                  />
                  <button type="submit" className="search-submit">
                    <span className="screen-reader-text">Search</span>
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-lg-flex justify-content-lg-end align-items-lg-center">
                <ul className="top-includes">
                  <li>
                    <span className="social-icons">
                      <a
                        href="https://www.facebook.com/"
                        className="fa fa-facebook "
                        title="facebook"
                      ></a>
                      <a
                        href="https://twitter.com/"
                        className="fa fa-twitter "
                        title="twitter"
                      ></a>
                      <a
                        href="https://www.linkedin.com/"
                        className="fa fa-linkedin "
                        title="linkedin"
                      ></a>
                      <a
                        href="https://www.instagram.com/"
                        className="fa fa-instagram "
                        title="instagram"
                      ></a>
                      <a
                        href="https://www.youtube.com/"
                        className="fa fa-youtube-play "
                        title="youtube"
                      ></a>
                    </span>
                  </li>

                  <li>
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
                        <i className="fa fa-shopping-basket"></i>
                        <span className="badge bg-maincolor">3</span>
                        $27.00
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DynamicHeader topHeaderHeight={184} />
    </>
  );
};

export default ShopHeader;
