import React from 'react';
import logo from "~/assets/images/logo.png"
import usFlag from "~/assets/images/flags/us.gif"
import shop26 from "~/assets/images/shop/26.jpg"
import shop37 from "~/assets/images/shop/37.jpg"
import {Link} from "react-router-dom";
import DynamicHeader from "~/components/commons/header/DynamicHeader";

const ShopHeader = ({loggedIn = false}) => {
    return (
        <>
            <section className="page_topline ds c-my-10 s-py-15 small-text">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-lg-start">
                            <ul className="top-includes border-divided">

                                <li className="dropdown-currency">
                                    <div className="dropdown show">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdown-currency"
                                           data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            USD
                                        </a>
                                        <div className="dropdown-menu ls" aria-labelledby="dropdown-currency">
                                            <a href="#">USD</a>
                                            <a href="#">EUR</a>
                                            <a href="#">GBP</a>
                                        </div>
                                    </div>

                                </li>

                                <li className="dropdown-language">
                                    <div className="dropdown show">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdown-language"
                                           data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src={usFlag} alt="img"/>
                                                English
                                        </a>
                                        <div className="dropdown-menu ls" aria-labelledby="dropdown-language">
                                            <a href="#"><img src="de.gif" alt="img"/> German</a>
                                            <a href="#"><img src="us.gif" alt="img"/> English</a>
                                            <a href="#"><img src="fr.gif" alt="img"/> French</a>
                                            <a href="#"><img src="it.gif" alt="img"/> Italian</a>
                                        </div>
                                    </div>
                                </li>

                                <li className="dropdown-account">
                                    <div className="dropdown show">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdown-account"
                                           data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-user"></i> My Account
                                        </a>
                                        <div className="dropdown-menu ls" aria-labelledby="dropdown-account">
                                            <a href="#"><i className="fa fa-user"></i> My Account</a>
                                            <a href="#"><i className="fa fa-heart-o"></i> Wishlist</a>
                                            <a href="#"><i className="fa fa-shopping-basket"></i> Cart</a>
                                            <a href="#"><i className="fa fa-edit"></i> Checkout</a>
                                            <a href="#"><i className="fa fa-lock"></i> Logout</a>
                                        </div>
                                    </div>
                                </li>

                            </ul>

                        </div>
                        <div className="col-md-6 text-center text-lg-end">
                            <ul className="top-includes border-divided">
                                <li>
                                    <a href="#"><i className="fa fa-comment"></i> Start live chat</a>
                                </li>
                                <li>
                                    <i className="fa fa-phone color-darkgrey px-1"></i> <span
                                    className="color-main">1-800-123-4567</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page_toplogo ds bs c-my-10 s-py-10">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-center text-lg-start">
                            <Link to="/" className="logo">
                                <img src={logo} alt="img"/>
                                    <span className="logo-text color-darkgrey">vedi</span>
                            </Link>
                        </div>

                        <div className="col-lg-4 text-center">

                            <div className="widget widget_search">
                                <form role="search" method="get" className="search-form" action="/">
                                    <label htmlFor="search-form-top">
                                        <span className="screen-reader-text">Search for:</span>
                                    </label>
                                    <input type="search" id="search-form-top" className="search-field"
                                           placeholder="Search keyword" name="search"/>
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

											<a href="https://www.facebook.com/" className="fa fa-facebook "
                                               title="facebook"></a>
											<a href="https://twitter.com/" className="fa fa-twitter "
                                               title="twitter"></a>
											<a href="https://www.linkedin.com/" className="fa fa-linkedin "
                                               title="linkedin"></a>
											<a href="https://www.instagram.com/" className="fa fa-instagram "
                                               title="instagram"></a>
											<a href="https://www.youtube.com/" className="fa fa-youtube-play "
                                               title="youtube"></a>

										</span>
                                    </li>


                                    <li>

                                        <div className="dropdown">
                                            <a className="dropdown-toggle dropdown-shopping-cart" href="#" role="button"
                                               id="dropdown-shopping-cart" data-bs-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                <i className="fa fa-shopping-basket"></i>
                                                <span className="badge bg-maincolor">3</span>
                                                $27.00
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right ds bs box-shadow bordered rounded"
                                                 aria-labelledby="dropdown-shopping-cart">
                                                <div className="widget woocommerce widget_shopping_cart">


                                                    <div className="widget_shopping_cart_content">

                                                        <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                                                            <li className="woocommerce-mini-cart-item mini_cart_item">
                                                                <a href="#" className="remove"
                                                                   aria-label="Remove this item" data-product_id="73"
                                                                   data-product_sku="">×</a>
                                                                <a href="shop-product-right.html">
                                                                    <img src={shop37} alt="img"/>Quidem
                                                                        repellat repellendus sit suscipit
                                                                </a>

                                                                <span className="quantity">1 ×
																	<span className="woocommerce-Price-amount amount">
																		<span
                                                                            className="woocommerce-Price-currencySymbol">$</span>
																		12.00
																	</span>
																</span>
                                                            </li>
                                                            <li className="woocommerce-mini-cart-item mini_cart_item">
                                                                <a href="#" className="remove"
                                                                   aria-label="Remove this item" data-product_id="76"
                                                                   data-product_sku="">×</a>
                                                                <a href="shop-product-right.html">
                                                                    <img src={shop26} alt="img"/>Laudantium
                                                                        nostrum quas quasi quisquam
                                                                </a>

                                                                <span className="quantity">1 ×
																	<span className="woocommerce-Price-amount amount">
																		<span
                                                                            className="woocommerce-Price-currencySymbol">$</span>
																		15.00
																	</span>
																</span>
                                                            </li>
                                                        </ul>

                                                        <p className="woocommerce-mini-cart__total total">
                                                            <strong>Subtotal: </strong>
                                                            <span className="woocommerce-Price-amount amount">
																<span
                                                                    className="woocommerce-Price-currencySymbol">$</span>
																27.00
															</span>
                                                        </p>

                                                        <div className="woocommerce-mini-cart__buttons buttons d-flex justify-content-around">
                                                            <button className="button wc-forward">View
                                                                cart</button>
                                                            <button
                                                               className="button checkout wc-forward">Checkout</button>
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

            <DynamicHeader topHeaderHeight={184}/>
        </>
    );
};

export default ShopHeader;