import React, { useEffect, useState } from "react";
import OrderCustomerDetail from "./OrderCustomerDetail";
import { selectCart } from "~/features/CartSlice";
import { useSelector } from "react-redux";
import {
  selectAddress,
  selectGetAddressSuccess,
  setAddressSuccess,
  createOrder,
} from "~/features/OrderSlice";
import { useDispatch } from "react-redux";
import _ from "lodash";

export default function CheckoutForm() {
  const cart = useSelector(selectCart);
  const [currentCart, setCurrentCart] = useState(cart);
  const address = useSelector(selectAddress);
  const [checkCity, setCheckCity] = useState(false);
  const [shipmentCost, setShipmentCost] = useState(0);
  const success = useSelector(selectGetAddressSuccess);
  const dispatch = useDispatch();

  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(price);
  }

  const renderCapitalizedText = (text) => {
    return <h6 style={{ fontFamily: "Arial" }}>{_.capitalize(text)}</h6>;
  };

  useEffect(() => {
    setCurrentCart(cart);
    if (success) {
      if (address.city === "Hồ Chí Minh") {
        setShipmentCost(25000);
      } else if (address.city !== "Hồ Chí Minh") {
        setShipmentCost(35000);
      }
    }
    setCheckCity(false);
  }, [success, cart]);

    const onClickOrder = () => {
      let token = localStorage.getItem("token");
      let requestData = {address,token}
      dispatch(createOrder(requestData));
    };

  return (
    <>
      <section className="ds s-py-90 s-py-xl-150 c-gutter-60">
        <div className="container">
          <div className="row">
            <main className="col-lg-12 checkout woocommerce-checkout">
              <div className="woocommerce-info">
                Have a coupon?{" "}
                <a href="#" className="showcoupon">
                  Click here to enter your code
                </a>
              </div>
              <div className="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout"></div>
              <OrderCustomerDetail />
          
                <div
                  id="order_review"
                  className="woocommerce-checkout-review-order"
                >
                  <h3>Thanh toán</h3>
                  <table className="shop_table woocommerce-checkout-review-order-table">
                    <thead>
                      <tr>
                        <th className="product-name">
                          {renderCapitalizedText("Sản phẩm")}
                        </th>
                        <th className="product-total">
                          {renderCapitalizedText("sl")}
                        </th>
                        <th className="product-total">
                          {renderCapitalizedText("Giá")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCart.cartLineDTOList.map((cartLine) => (
                        <tr key={cartLine.id} className="cart_item">
                          <td className="product-name">
                            {cartLine.productResponseDTO.name}&nbsp;
                          </td>
                          <td className="product-total">{cartLine.quantity}</td>
                          <td className="product-total">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol"></span>
                              {formatCurrency(cartLine.totalPrice)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <div style={{ padding: "30px", marginLeft: "-30px" }}>
                        {success ? (
                          <div>
                            <p>
                              <h4 style={{ fontFamily: "Arial" }}>
                                Phí giao hàng
                                <span
                                  style={{ color: "white", marginLeft: "10px" }}
                                >
                                  {formatCurrency(shipmentCost)}
                                </span>
                              </h4>
                              <span></span>
                            </p>
                            <p>
                              <h4 style={{ fontFamily: "Arial" }}>
                                Tổng
                                <span
                                  style={{ color: "white", marginLeft: "10px" }}
                                >
                                  {formatCurrency(
                                    cart.totalAmount + shipmentCost
                                  )}
                                </span>
                              </h4>
                              <span></span>
                            </p>
                          </div>
                        ) : (
                          <p>
                            <h4 style={{ fontFamily: "Arial" }}>
                              Tổng
                              <span
                                style={{ color: "white", marginLeft: "10px" }}
                              >
                                {formatCurrency(cart.totalAmount)}
                              </span>
                            </h4>
                            <span></span>
                          </p>
                        )}
                      </div>
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
                          Thanh toán vnpay
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
                          Thanh toán khi nhận hàng
                        </label>
                      </li>
                    </ul>
                    <div className="form-row place-order">
                      <input
                        type="submit"
                        className="button alt"
                        name="woocommerce_checkout_place_order"
                        id="place_order"
                        value="Thanh toán"
                        data-value="Place order"
                        onClick={onClickOrder}

                      />
                    </div>
                  </div>
                </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
