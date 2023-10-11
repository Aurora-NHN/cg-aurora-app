import React from "react";
import ProductDetail from "~/components/main/shopDetailPage/ProductDetail";
import ShopDetailPageTitle from "~/components/main/shopDetailPage/ShopDetailPageTitle";

const ShopDetail = () => {
  return (
    <>
      <ShopDetailPageTitle />
      <section className="ds s-py-90 s-py-xl-150 c-gutter-60">
        <div className="container">
          <div className="row">
            <main className="col-lg-12">
              <ProductDetail/>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetail;
