import React, { useState, useEffect } from "react";
import { selectCart, removeCartLine } from "~/features/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectQuantity, selectCartLine } from "~/features/CartSlice";
import { setProductDetail } from "~/features/productSlice";
import { Link } from "react-router-dom";
import { selectToken } from "~/features/userSlice";
import CartLineQuantity from "./CartLineQuantity";

export default function CartLineDetail() {
  const cart = useSelector(selectCart);
  const [onloading, setOnloading] = useState(true);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const newQuantity = useSelector(selectQuantity);
  const currentCartLine = useSelector(selectCartLine);
  const [subTotalPrice, setSubToTalPrice] = useState(cart.totalAmount);
  const [newCartLinePrice, setNewCartLinePrice] = useState(0);
  console.log(newQuantity)
  useEffect(() => {
    setTimeout(() => {
      setOnloading(false);
    }, 500);
  }, [loading]);


  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(price);
  }

  const handleClickProductLink = (product) => {
    dispatch(setProductDetail(product));
    setProductDetail(null);
  };

  const handleClickRemoveCartLine = (cartLineId) => {
    let requestData = { cartLineId, token }
    dispatch(removeCartLine(requestData))
  }

  return (

    <section className="ds s-py-50 s-py-xl-100 c-gutter-60">
      {onloading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="container">
          <div className="row">
            <main className="col-lg-12">
              <div className="woocommerce-notices-wrapper">
                <div className="woocommerce-message">
                  <a href="#" tabIndex="1" className="button wc-forward">
                    View cart
                  </a>
                  Premium quality has been added to your cart.
                </div>
              </div>
              {cart.cartLineDTOList.length === 0 ? (
                <h3>Không có sản phẩm trong giỏ hàng</h3>
              ) : (
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

                  {cart.cartLineDTOList.map((cartLine) => (
                    <tr className="cart_item" key={cartLine.id}>
                      <td className="product-remove">
                        <a
                          className="remove"
                          aria-label="Remove this cartLine"
                          data-product_id={cartLine.id}
                          data-product_sku=""
                          onClick={() => handleClickRemoveCartLine(cartLine.id)}
                        >
                          ×
                        </a>
                      </td>
                      <td className="product-thumbnail">
                        <Link
                          to={`/product-detail/${cartLine.productResponseDTO.id}`}
                          onClick={() => handleClickProductLink(cartLine.productResponseDTO)}
                        >
                          {" "}
                          <img
                            width="180"
                            height="180"
                            src={cartLine.productResponseDTO.imageUrl}
                            alt="img"
                          />
                        </Link>
                      </td>
                      <td className="product-name" data-title="Product">
                        <a>{cartLine.productResponseDTO.name}</a>
                      </td>
                      <td className="product-price" data-title="Price">
                        <span className="amount">
                          {formatCurrency(cartLine.productResponseDTO.price)}
                        </span>
                      </td>
                      <td className="product-quantity" data-title="Quantity">
                        <div className="quantity">
                          <CartLineQuantity
                            cartLine={cartLine}
                          />
                        </div>
                      </td>
                      <td className="product-subtotal" data-title="Total">
                        <span className="amount">
                          {formatCurrency(cartLine.totalPrice)}
                        </span>
                      </td>
                    </tr>
                  ))}

                </table>
              )}
              <div className="cart-collaterals">
                <div className="cross-sells">
                  <h2>Other Products</h2>
                  <div className="divider-30"></div>
                  <ul className="products"></ul>
                </div>
                <div className="cart_totals">
                  <h2>Cart totals</h2>
                  <table className="shop_table shop_table_responsive">
                    <tr className="cart-subtotal" key={cart.id}>
                      <th>Subtotal</th>
                      <td data-title="Subtotal">
                        <span className="amount">
                          {formatCurrency(cart.totalAmount)}
                        </span>
                      </td>
                    </tr>
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
      )}
    </section>
  );
}