import React from "react";
import ProductList from "~/components/main/products/productList";

const Shop = () => {
  return (
      <div className="min-vh-100">
          <section className="ds woocommerce s-py-90 s-py-xl-100 c-gutter-60">
              <div className="container pt-5">
                  <div className="row">
                      <ProductList/>
                  </div>
              </div>
          </section>
      </div>
  );
};

export default Shop;
