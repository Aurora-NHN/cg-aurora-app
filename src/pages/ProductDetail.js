import React from "react";
import ProductDetail1 from "~/components/commons/ProductDetail1";
import FormComment from "~/components/commons/FormComment";
const ProductDetail = () => {
  return (
    <div className="min-vh-100">
      <section class="ds woocommerce s-py-90 s-py-xl-150 c-gutter-60">
        <div class="container">
          <div class="row">
            <ProductDetail1 />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
