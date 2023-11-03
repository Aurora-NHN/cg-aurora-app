import React, { useState, useEffect } from "react";
import {
  selectCart,
  selectQuantity,
  addNewQuantity,
  selectCartLine,
} from "~/features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading } from "~/features/cartSlice";
import { selectToken } from "~/features/userSlice";
import CartLineQuantity from "./CartLineQuantity";
import SubTotalPrice from "./SubTotalPrice";
import _ from "lodash";

export default function CartLineDetail() {
  const currentCartLine = useSelector(selectCartLine);
  const quantity = useSelector(selectQuantity);
  const cart = useSelector(selectCart);
  const [currentCart, setCurrentCart] = useState(cart);
  const [onloading, setOnloading] = useState(true);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    setTimeout(() => {
      setOnloading(false);
    }, 500);
  }, [loading]);

  useEffect(() => {
    setCurrentCart(cart);
  }, [cart]);

  useEffect(() => {
    if (currentCartLine) {
      if (quantity != currentCartLine.quantity) {
        let productId = currentCartLine.productResponseDTO.id;
        let requestData = { productId, quantity, token };
        dispatch(addNewQuantity(requestData));
      }
    }
  }, [quantity, currentCartLine]);

  const renderCapitalizedText = (text) => {
    return <h6 style={{ fontFamily: "Arial" }}>{text}</h6>;
  };


  return (
    <section className="ds s-py-50 s-py-xl-100 c-gutter-60">
      {onloading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="container">
          <div className="row">
            <main className="col-lg-12">
              <div className="woocommerce-notices-wrapper">
                <div
                  className="woocommerce-info"
                  style={{ fontFamily: "Arial" }}
                >
                  <a tabIndex="1" className="showcoupon"></a>
                  Những sản phẩm chất lượng cao cấp đã được thêm vào giỏ hàng
                  của bạn.
                </div>
              </div>
              {currentCart.cartLineDTOList === undefined ||
              currentCart.cartLineDTOList.length === 0 ? (
                <h3>Không có sản phẩm trong giỏ hàng</h3>
              ) : (
                <table className="shop_table shop_table_responsive cart">
                  <thead>
                    <tr>
                      <th className="product-remove">&nbsp;</th>
                      <th className="product-thumbnail">&nbsp;</th>
                      <th className="product-name">
                        {renderCapitalizedText("sản phẩm")}
                      </th>
                      <th className="product-price">
                        {renderCapitalizedText("giá")}
                      </th>
                      <th className="product-quantity">
                        {renderCapitalizedText("Số lượng")}
                      </th>
                      <th className="product-subtotal" >
                        {renderCapitalizedText("Tổng")}
                      </th>
                    </tr>
                  </thead>

                  {cart.cartLineDTOList.map((cartLine) => (
                    <tr className="cart_item" key={cartLine.id}>
                      <CartLineQuantity cartLine={cartLine} />
                    </tr>
                  ))}
                </table>
              )}
              <SubTotalPrice cart={currentCart} />
            </main>
          </div>
        </div>
      )}
    </section>
  );
}
