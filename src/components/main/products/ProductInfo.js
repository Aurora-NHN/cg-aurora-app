import React from "react";

const ProductInfo = ({ product }) => {
  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(price);
  }
  return (
    <div>
      <h2>{product.name}</h2>
      <div>
        <h5>description: </h5>
      </div>
      <div>{product.description}</div>
      <p className="price">
        <h6>đã bán:{product.quantitySold}</h6>
        <span>
          <span>{formatCurrency(product.price)}</span>
        </span>
      </p>
    </div>
  );
};

export default ProductInfo;

{
  /* <div className="woocommerce-product-rating"> */
}
{
  /* <div className="star-rating">
          <span style={{ width: `${rating * 20}%` }}>
            Rated <strong className="rating">{rating}</strong> out of 5 based on
            <span className="rating">{reviewsCount}</span> customer ratings
          </span>
        </div> */
}
{
  /* <a href="#reviews" className="woocommerce-review-link" rel="nofollow">
          (<span className="count">{quantitySold}</span> Đã bán)
        </a> */
}
{
  /* </div> */
}
