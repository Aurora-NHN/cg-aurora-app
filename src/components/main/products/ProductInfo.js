import React from "react";
import _ from "lodash";

const ProductInfo = ({ product }) => {
  console.log(product)
  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(price);
  }
      const renderCapitalizedText = (text) => {
        return <h4 style={{ fontFamily: "Arial" }}>{_.capitalize(text)}</h4>;
      };
      
  return (
    <>
      <div>
        {renderCapitalizedText(product.name)}
        <div style={{ padding: "80px",marginLeft: "-80px" }}>
          <p>
            <h6 style={{ fontFamily: "Arial" }}>
              Nhà sản xuất:
              <span style={{ color: "white", marginLeft: "10px" }}>
                {product.producer}
              </span>
            </h6>
            <span></span>
          </p>
          <p>
            <h6 style={{ fontFamily: "Arial" }}>
              Bao gồm:
              <span style={{ color: "white", marginLeft: "10px" }}>
                {product.include}
              </span>
            </h6>
            <span></span>
          </p>
          <p className="price">
            <h6>
              Đã bán:{" "}
              <span style={{ color: "white", marginLeft: "10px" }}>
                {product.quantitySold}
              </span>
            </h6>
            <span>
              <span style={{ color: "white" }}>
                {formatCurrency(product.price)}
              </span>
            </span>
          </p>
        </div>
        
      </div>
    </>
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
