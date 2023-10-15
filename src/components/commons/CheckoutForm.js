import React from "react";

export default function CheckoutForm() {
  return (
    <>
      <section className="ds s-py-90 s-py-xl-150 c-gutter-60">
        <div className="container">
          <div className="row">
            <main className="col-lg-12">
              <div className="woocommerce-info">
                Returning customer?{" "}
                <a href="#" className="showlogin">
                  Click here to login
                </a>
              </div>

              <form
                className="woocommerce-form woocommerce-form-login login"
                method="post"
                style={{}}
              >
                <p>
                  If you have shopped with us before, please enter your details
                  in the boxes below. If you are a new customer, please proceed
                  to the Billing &amp; Shipping section.
                </p>

                <p className="form-row form-row-first">
                  <label htmlFor="username">
                    Username or email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    name="username"
                    id="username"
                  />
                </p>
                <p className="form-row form-row-last">
                  <label htmlFor="password">
                    Password <span className="required">*</span>
                  </label>
                  <input
                    className="input-text"
                    type="password"
                    name="password"
                    id="password"
                  />
                </p>
                <div className="clear"></div>

                <p className="form-row">
                  <input
                    type="submit"
                    className="button"
                    name="login"
                    value="Login"
                  />
                  <label>
                    <input
                      name="rememberme"
                      type="checkbox"
                      id="rememberme"
                      value="forever"
                    />
                    <span>Remember me</span>
                  </label>
                </p>
                <p className="lost_password">
                  <a href="shop-account-password-reset.html">
                    Lost your password?
                  </a>
                </p>

                <div className="clear"></div>
              </form>

              <div className="woocommerce-info">
                Have a coupon?{" "}
                <a href="#" className="showcoupon">
                  Click here to enter your code
                </a>
              </div>

              <form
                className="checkout_coupon"
                method="post"
                style={{ display: "none" }}
              >
                <p className="form-row form-row-first">
                  <input
                    type="text"
                    name="coupon_code"
                    className="input-text"
                    placeholder="Coupon code"
                    id="coupon_code"
                    value=""
                  />
                </p>
                <p className="form-row form-row-last">
                  <input
                    type="submit"
                    className="button"
                    name="apply_coupon"
                    value="Apply coupon"
                  />
                </p>
                <div className="clear"></div>
              </form>

              <form
                name="checkout"
                method="post"
                className="checkout woocommerce-checkout"
                action="/"
                encType="multipart/form-data"
                noValidate="novalidate"
              >
                <div className="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout">
                  <ul className="woocommerce-error">
                    <li>
                      <strong>Billing First name</strong> is a required field.
                    </li>
                    <li>
                      <strong>Billing Last name</strong> is a required field.
                    </li>
                    <li>Please enter a valid postcode / ZIP.</li>
                  </ul>
                </div>

                <div className="col2-set" id="customer_details">
                  <div className="col-1">
                    <div className="woocommerce-billing-fields">
                      <h3>Billing details</h3>

                      <div className="woocommerce-billing-fields__field-wrapper">
                        <p
                          className="form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
                          id="billing_first_name_field"
                          data-priority="10"
                        >
                          <label htmlFor="billing_first_name" className="">
                            First name{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name="billing_first_name"
                            id="billing_first_name"
                            placeholder=""
                            value=""
                            autoComplete="given-name"
                            autoFocus="autofocus"
                          />
                        </p>
                        <p
                          className="form-row form-row-last validate-required"
                          id="billing_last_name_field"
                          data-priority="20"
                        >
                          <label htmlFor="billing_last_name" className="">
                            Last name{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name="billing_last_name"
                            id="billing_last_name"
                            placeholder=""
                            value=""
                            autoComplete="family-name"
                          />
                        </p>
                        <p
                          className="form-row form-row-wide"
                          id="billing_company_field"
                          data-priority="30"
                        >
                          <label htmlFor="billing_company" className="">
                            Company name
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name="billing_company"
                            id="billing_company"
                            placeholder=""
                            value=""
                            autoComplete="organization"
                          />
                        </p>
                        <p
                          className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                          id="billing_country_field"
                          data-priority="40"
                        >
                          <label htmlFor="billing_country" className="">
                            Country{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <select
                            name="billing_country"
                            id="billing_country"
                            className="country_to_state country_select  select2-hidden-accessible"
                            autoComplete="country"
                            tabIndex="-1"
                            aria-hidden="true"
                          >
                            <option value="">Select a country…</option>
                            <option value="AX">Åland Islands</option>
                          </select>
                        </p>
                        <p
                          className="form-row form-row-wide address-field validate-required"
                          id="billing_address_1_field"
                          data-priority="50"
                        >
                          <label htmlFor="billing_address_1" className="">
                            Street address{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name="billing_address_1"
                            id="billing_address_1"
                            placeholder="House number and street name"
                            value=""
                            autoComplete="address-line1"
                          />
                        </p>
                        <p
                          className="form-row form-row-wide address-field"
                          id="billing_address_2_field"
                          data-priority="60"
                        >
                          <input
                            type="text"
                            className="input-text "
                            name="billing_address_2"
                            id="billing_address_2"
                            placeholder="Apartment, suite, unit etc. (optional)"
                            value=""
                            autoComplete="address-line2"
                          />
                        </p>
                        <p
                          className="form-row form-row-wide address-field validate-required"
                          id="billing_city_field"
                          data-priority="70"
                          data-o_class="form-row form-row-wide address-field validate-required"
                        >
                          <label htmlFor="billing_city" className="">
                            Town / City{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name="billing_city"
                            id="billing_city"
                            placeholder=""
                            value=""
                            autoComplete="address-level2"
                          />
                        </p>
                        <p
                          className="form-row form-row-wide address-field validate-state validate-required"
                          id="billing_state_field"
                          data-priority="80"
                          data-o_class="form-row form-row-wide address-field validate-required validate-state"
                        >
                          <label htmlFor="billing_state" className="">
                            State / County{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            value=""
                            placeholder=""
                            name="billing_state"
                            id="billing_state"
                            autoComplete="address-level1"
                          />
                        </p>
                        <p
                          className="form-row form-row-wide address-field validate-postcode validate-required"
                          id="billing_postcode_field"
                          data-priority="90"
                          data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
                        >
                          <label htmlFor="billing_postcode" className="">
                            Postcode / ZIP{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name="billing_postcode"
                            id="billing_postcode"
                            placeholder=""
                            value=""
                            autoComplete="postal-code"
                          />
                        </p>
                        <p
                          className="form-row form-row-first validate-required validate-phone"
                          id="billing_phone_field"
                          data-priority="100"
                        >
                          <label htmlFor="billing_phone" className="">
                            Phone{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="tel"
                            className="input-text "
                            name="billing_phone"
                            id="billing_phone"
                            placeholder=""
                            value=""
                            autoComplete="tel"
                          />
                        </p>
                        <p
                          className="form-row form-row-last validate-required validate-email"
                          id="billing_email_field"
                          data-priority="110"
                        >
                          <label htmlFor="billing_email" className="">
                            Email address{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            type="email"
                            className="input-text "
                            name="billing_email"
                            id="billing_email"
                            placeholder=""
                            value="admin@test.com"
                          />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="woocommerce-shipping-fields"></div>
                    <div className="woocommerce-additional-fields">
                      <h3>Additional information</h3>
                      <div className="woocommerce-additional-fields__field-wrapper">
                        <p
                          className="form-row notes"
                          id="order_comments_field"
                          data-priority=""
                        >
                          <label htmlFor="order_comments" className="">
                            Order notes
                          </label>
                          <textarea
                            name="order_comments"
                            className="input-text "
                            id="order_comments"
                            placeholder="Notes about your order, e.g. special notes for delivery."
                            rows="2"
                            cols="5"
                          ></textarea>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 id="order_review_heading">Your order</h3>

                <div
                  id="order_review"
                  className="woocommerce-checkout-review-order"
                >
                  <table className="shop_table woocommerce-checkout-review-order-table">
                    <thead>
                      <tr>
                        <th className="product-name">Product</th>
                        <th className="product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-name">
                          Premium Quality&nbsp;{" "}
                          <strong className="product-quantity">× 1</strong>
                        </td>
                        <td className="product-total">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            12.00
                          </span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-name">
                          Woo Ninja&nbsp;{" "}
                          <strong className="product-quantity">× 1</strong>
                        </td>
                        <td className="product-total">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            15.00
                          </span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-name">
                          Woo Album #3&nbsp;{" "}
                          <strong className="product-quantity">× 2</strong>
                        </td>
                        <td className="product-total">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            18.00
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            45.00
                          </span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td>
                          <strong>
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              45.00
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>

                  <div id="payment" className="woocommerce-checkout-payment">
                    <ul className="wc_payment_methods payment_methods methods">
                      <li className="wc_payment_method payment_method_cheque">
                        <input
                          id="payment_method_cheque"
                          type="radio"
                          className="input-radio"
                          name="payment_method"
                          value="cheque"
                          checked="checked"
                          data-order_button_text=""
                        />
                        <label htmlFor="payment_method_cheque">
                          Check payments
                        </label>
                        <div
                          className="payment_box payment_method_cheque"
                          style={{ display: "none" }}
                        >
                          <p>
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                      </li>
                      <li className="wc_payment_method payment_method_cod">
                        <input
                          id="payment_method_cod"
                          type="radio"
                          className="input-radio"
                          name="payment_method"
                          value="cod"
                          data-order_button_text=""
                        />
                        <label htmlFor="payment_method_cod">
                          Cash on delivery
                        </label>
                        <div
                          className="payment_box payment_method_cod"
                          style={{ display: "block" }}
                        >
                          <p>Pay with cash upon delivery.</p>
                        </div>
                      </li>
                    </ul>
                    <div className="form-row place-order">
                      <noscript>
                        Since your browser does not support JavaScript, or it is
                        disabled, please ensure you click the &lt;em&gt;Update
                        Totals&lt;/em&gt; button before placing your order. You
                        may be charged more than the amount stated above if you
                        fail to do so.
                      </noscript>
                      <input
                        type="submit"
                        className="button alt"
                        name="woocommerce_checkout_place_order"
                        id="place_order"
                        value="Place order"
                        data-value="Place order"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
