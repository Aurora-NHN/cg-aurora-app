import React from 'react';
import ReviewProduct from '~/components/main/shopDetailPage/ReviewProduct';
import RelatedProducts from '~/components/main/shopDetailPage/RelatedProducts';
import ProductImage from '~/components/main/shopDetailPage/product_image/ProductImage';

function ProductDetail() {
    return (
        <>

            <div className="product">
                <ProductImage />
                <div className="summary entry-summary">
                    <h1 className="product_title entry-title">Product name</h1>
                    <div className="woocommerce-product-rating">
                        <div className="star-rating">
                          <span style={{ width: '72.6%' }}>
                            Rated <strong className="rating">4.33</strong> out of 5 based on{' '}
                              <span className="rating">3</span> customer ratings
                          </span>
                        </div>
                        <a href="#reviews" className="woocommerce-review-link" rel="nofollow">
                            (<span className="count">3</span> customer reviews)
                        </a>
                    </div>
                    <p className="price">
                        <span>
                          <span>$</span>20.00
                        </span>
                    </p>
                    <div>
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
                            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
                            semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        </p>
                    </div>
                    <form>
                        <table className="variations">
                            <tbody>
                            <tr>
                                <td className="label">
                                    <label htmlFor="pa_color">Color</label>
                                </td>
                                <td className="value">
                                    <select id="pa_color" className="wc-default-select" name="attribute_pa_color" data-attribute_name="attribute_pa_color">
                                        <option value="">Choose an option</option>
                                        <option value="blue" className="attached enabled">Blue</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="label">
                                    <label htmlFor="pa_size">Size</label>
                                </td>
                                <td className="value">
                                    <select id="pa_size" className="wc-default-select" name="attribute_pa_size" data-attribute_name="attribute_pa_size">
                                        <option value="">Choose an option</option>
                                        <option value="x-small" className="attached enabled">X Small</option>
                                        <option value="small" className="attached enabled">Small</option>
                                        <option value="medium" className="attached enabled">Medium</option>
                                        <option value="large" className="attached enabled">Large</option>
                                        <option value="x-large" className="attached enabled">X Large</option>
                                        <option value="xx-large" className="attached enabled">XX Large</option>
                                        <option value="xxx-large" className="attached enabled">XXX Large</option>
                                    </select>
                                    <a className="reset_variations" href="#">
                                        Clear
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="single_variation_wrap">
                            <div>
                                <div className="quantity">
                                    <input type="number" className="input-text qty text" step="1" min="1" max="1000" name="quantity" value="1" title="Qty" size="4" />
                                </div>
                                <button type="submit" className="single_add_to_cart_button button alt">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="product_meta">
            <span className="sku_wrapper">
              SKU: <span className="sku">N/A</span>
            </span>
                        <span className="posted_in">
              Categories: <a href="#" rel="tag">Clothing</a>, <a href="shop-right.html" rel="tag">T-shirts</a>
            </span>
                        <span className="tagged_as">
              Tag: <a href="#" rel="tag">premium</a>
            </span>
                    </div>
                </div>
                <div className="woocommerce-tabs wc-tabs-wrapper">
                    <ul className="tabs wc-tabs" role="tablist">
                        <li className="description_tab" id="tab-title-description" role="tab" aria-controls="tab-description">
                            <a href="#tab-description">Description</a>
                        </li>
                        <li className="additional_information_tab active" id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
                            <a href="#tab-additional_information">Additional information</a>
                        </li>
                        <li className="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                            <a href="#tab-reviews">Reviews (3)</a>
                        </li>
                    </ul>

                    <div className="panel wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
                        <h2>Description</h2>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>

                    <div className="panel wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information">
                        <h2>Additional information</h2>
                        <table className="shop_attributes">
                            <tbody>
                            <tr>
                                <th>Color</th>
                                <td>
                                    <p>Blue</p>
                                </td>
                            </tr>
                            <tr>
                                <th>Size</th>
                                <td>
                                    <p>X Small, Small, Medium, Large, X Large, XX Large, XXX Large</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <ReviewProduct/>
                </div>
                <RelatedProducts/>
            </div>
        </>
    );
}
export default ProductDetail;
