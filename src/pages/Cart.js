import React from "react";
import CartLineDetail from "~/components/main/products/CartLineDetail";

const Cart = () => {
  return (
    <div className="min-vh-100">
      <div class="ds woocommerce s-py-50 s-py-xl-100 c-gutter-60">
        <div class="container">
          <div class="row">
            <CartLineDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
