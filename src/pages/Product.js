import React from "react";
import ProductDetail from "~/components/main/products/ProductDetail";
const Product = () => {
  return (
    <div className="min-vh-100">
      <section class="ds woocommerce s-py-90 s-py-xl-150 c-gutter-60">
        <div class="container">
          <div class="row">
            <ProductDetail />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
