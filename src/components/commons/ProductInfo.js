import React from "react";

const ProductInfo = ({ product }) => {
  console.log(product);
  const title = product.name;
  // const rating = product.rating;
  const quantitySold = product.quantitySold;
  const price = product.price;
  const description = product.description;

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <h5>description: </h5>
      </div>
      <div>{description}</div>
      <p className="price">
        <h6>đã bán:{quantitySold}</h6>
        <span>
          <span>{price}Đ</span>
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
