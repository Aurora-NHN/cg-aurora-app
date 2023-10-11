import React from "react";

function Product(props) {
  const product = props.product;

  return (
    <div className="product col-md-4 col-lg-3">
      <div className="product-inner">
        <span className="onsale">Sale!</span>
        <a href="shop-product-right.html">
          <img src={product.image} alt="img" />
        </a>
        <div className="product-wrap">
          <h2 className="woocommerce-loop-product__title">
            <a href="shop-product-right.html">{product.name}</a>
          </h2>
          <div className="product_meta">
            <span className="posted_in">
              Category:{" "}
              <a href="shop-right.html" rel="tag">
                {product.category}
              </a>
            </span>
          </div>
          <div className="star-rating">
            <span style={{ width: "80%" }}>
              Rated <strong className="rating">{product.rated}</strong> out of 5
            </span>
          </div>
          <div className="price-wrap">
            <span className="price">
              <span>
                <span>$</span>
                {product.price}
              </span>
            </span>
            <a
              rel="nofollow"
              href="shop-cart.html"
              className="button product_type_simple add_to_cart_button"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
