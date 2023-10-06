import React from 'react';
import image_34 from '~/assets/images/shop/34.jpg';
import image_35 from '~/assets/images/shop/35.jpg'; // Chú ý thay đổi ảnh
import image_36 from '~/assets/images/shop/36.jpg'; // Chú ý thay đổi ảnh
import image_37 from '~/assets/images/shop/37.jpg'; // Chú ý thay đổi ảnh

function ReviewProduct() {
    return (
        <div className="panel wc-tab" id="tab-reviews" role="tabpanel"
             aria-labelledby="tab-title-reviews">
            <section className="up-sells upsells products">
            <h2>Other Products</h2>
            <div className="divider-30"></div>
            <ul className="products">
                <li className="product">
                    <div className="product-inner">
                        <span className="onsale">Sale!</span>
                        <a href="#">
                            <img src={image_34} alt="img" />
                        </a>
                        <div className="product-wrap">
                            <h2 className="woocommerce-loop-product__title">
                                <a href="#">Treasure Yellow </a>
                            </h2>
                            <div className="product_meta">
                                <span className="posted_in">
                                    Categories: <a href="#" rel="tag">Magic</a>,{' '}
                                    <a href="#" rel="tag">Attributes</a>
                                </span>
                            </div>
                            <div className="star-rating">
                                <span style={{ width: '80%' }}>Rated <strong className="rating">4.00</strong> out of 5</span>
                            </div>
                            <div className="price-wrap">
                                <span className="price">
                                    <span>
                                        <span>$</span>58.99
                                    </span>
                                </span>
                                <a rel="nofollow" href="#" className="button product_type_simple add_to_cart_button">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="product">
                    <div className="product-inner">
                        <span className="onsale">Sale!</span>
                        <a href="#">
                            <img src={image_35} alt="img" />
                        </a>
                        <div className="product-wrap">
                            <h2 className="woocommerce-loop-product__title">
                                <a href="#">Another Product</a> {/* Đặt tên cho sản phẩm này */}
                            </h2>
                            <div className="product_meta">
                                <span className="posted_in">
                                    Categories: <a href="#" rel="tag">Magic</a>,{' '}
                                    <a href="#" rel="tag">Attributes</a>
                                </span>
                            </div>
                            <div className="star-rating">
                                <span style={{ width: '80%' }}>Rated <strong className="rating">4.00</strong> out of 5</span>
                            </div>
                            <div className="price-wrap">
                                <span className="price">
                                    <span>
                                        <span>$</span>49.99 {/* Giá mới của sản phẩm này */}
                                    </span>
                                </span>
                                <a rel="nofollow" href="#" className="button product_type_simple add_to_cart_button">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="product">
                    <div className="product-inner">
                        <span className="onsale">Sale!</span>
                        <a href="#">
                            <img src={image_36} alt="img" />
                        </a>
                        <div className="product-wrap">
                            <h2 className="woocommerce-loop-product__title">
                                <a href="#">Yet Another Product</a> {/* Đặt tên cho sản phẩm này */}
                            </h2>
                            <div className="product_meta">
                                <span className="posted_in">
                                    Categories: <a href="#" rel="tag">Magic</a>,{' '}
                                    <a href="#" rel="tag">Attributes</a>
                                </span>
                            </div>
                            <div className="star-rating">
                                <span style={{ width: '80%' }}>Rated <strong className="rating">4.00</strong> out of 5</span>
                            </div>
                            <div className="price-wrap">
                                <span className="price">
                                    <span>
                                        <span>$</span>39.99 {/* Giá mới của sản phẩm này */}
                                    </span>
                                </span>
                                <a rel="nofollow" href="#" className="button product_type_simple add_to_cart_button">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="product">
                    <div className="product-inner">
                        <span className="onsale">Sale!</span>
                        <a href="#">
                            <img src={image_37} alt="img" />
                        </a>
                        <div className="product-wrap">
                            <h2 className="woocommerce-loop-product__title">
                                <a href="#">One More Product</a> {/* Đặt tên cho sản phẩm này */}
                            </h2>
                            <div className="product_meta">
                                <span className="posted_in">
                                    Categories: <a href="#" rel="tag">Magic</a>,{' '}
                                    <a href="#" rel="tag">Attributes</a>
                                </span>
                            </div>
                            <div className="star-rating">
                                <span style={{ width: '80%' }}>Rated <strong className="rating">4.00</strong> out of 5</span>
                            </div>
                            <div className="price-wrap">
                                <span className="price">
                                    <span>
                                        <span>$</span>29.99 {/* Giá mới của sản phẩm này */}
                                    </span>
                                </span>
                                <a rel="nofollow" href="#" className="button product_type_simple add_to_cart_button">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        </div>
    );
}

export default ReviewProduct;
