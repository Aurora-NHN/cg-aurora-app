import React from "react";
import CheckoutForm from "~/components/commons/CheckoutForm";

export default function Checkout () {
  return (
    <div className="min-vh-100">
      <div className="ds woocommerce s-py-90 s-py-xl-150 c-gutter-60">
        <div className="container">
          <div className="row">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </div>
  );
};

