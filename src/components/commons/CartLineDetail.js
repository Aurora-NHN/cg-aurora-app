import React from "react";
export default function CartLineDetail() {
  return (
    <section className="ds s-py-90 s-py-xl-150 c-gutter-60">
      <div className="container">
        <div className="row">
          <main className="col-lg-12">
            <div className="woocommerce-notices-wrapper">
              <div className="woocommerce-message">
                <a href="#" tabIndex="1" className="button wc-forward">
                  View cart
                </a>
                "Premium quality" has been added to your cart.
              </div>
            </div>

            <form className="woocommerce-cart-form" action="/" method="post">
              <table className="shop_table shop_table_responsive cart">
                <thead>
                  <tr>
                    <th className="product-remove">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cart_item">
                    <td className="product-remove">
                      <a
                        href="#"
                        className="remove"
                        aria-label="Remove this item"
                        data-product_id="73"
                        data-product_sku=""
                      >
                        ×
                      </a>
                    </td>
                    <td className="product-thumbnail">
                      <a href="shop-product-right.html">
                        <img
                          width="180"
                          height="180"
                          src="images/shop/01.jpg"
                          className=""
                          alt="img"
                        />
                      </a>
                    </td>
                    <td className="product-name" data-title="Product">
                      <a href="shop-product-right.html">Premium Quality</a>
                    </td>
                    <td className="product-price" data-title="Price">
                      <span className="amount">
                        <span>$</span>12
                      </span>
                    </td>
                    <td className="product-quantity" data-title="Quantity">
                      <div className="quantity">
                        <input
                          type="number"
                          className="input-text qty text"
                          step="1"
                          min="1"
                          max="1000"
                          name="cart[qty]"
                          value="1"
                          title="Qty"
                          size="4"
                        />
                      </div>
                    </td>
                    <td className="product-subtotal" data-title="Total">
                      <span className="amount">
                        <span>$</span>12
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="actions">
                      <div className="coupon">
                        <label htmlFor="coupon_code">Coupon:</label>
                        <input
                          type="text"
                          name="coupon_code"
                          className="input-text"
                          id="coupon_code"
                          value=""
                          placeholder="Coupon code"
                        />
                        <input
                          type="submit"
                          className="button"
                          name="apply_coupon"
                          value="Apply coupon"
                        />
                      </div>
                      <input
                        type="submit"
                        className="button"
                        name="update_cart"
                        value="Update cart"
                        disabled=""
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>

            <div className="cart-collaterals">
              <div className="cross-sells">
                <h2>Other Products</h2>
                <div className="divider-30"></div>
                <ul className="products"></ul>
              </div>
              <div className="cart_totals ">
                <h2>Cart totals</h2>
                <table className="shop_table shop_table_responsive">
                  <tbody>
                    <tr className="cart-subtotal">
                      <th>Subtotal</th>
                      <td data-title="Subtotal">
                        <span className="amount">
                          <span>$</span>45.00
                        </span>
                      </td>
                    </tr>
                    <tr className="order-total">
                      <th>Total</th>
                      <td data-title="Total">
                        <strong>
                          <span className="amount">
                            <span>$</span>45.00
                          </span>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="wc-proceed-to-checkout">
                  <a
                    href="/checkout-form"
                    className="checkout-button button alt wc-forward"
                  >
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
