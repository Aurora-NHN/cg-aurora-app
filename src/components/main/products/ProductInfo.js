import React from "react";

const ProductInfo = ({ product }) => {
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
          <span>{product.price}Đ</span>
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
