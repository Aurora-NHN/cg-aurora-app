import React from 'react';
import ProductList from '~/components/commons/productList';
const Shop = () => {

    return (
      <div className="min-vh-100">
        <section class="ds woocommerce s-py-90 s-py-xl-150 c-gutter-60">
          <div class="container">
            <div class="row">
              <ProductList />
            </div>
          </div>
        </section>
      </div>
    );
};

export default Shop;