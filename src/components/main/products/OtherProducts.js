import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import ShortenText from "./ShortenText";
import {
  setProductDetail,
  selectOtherProduct,
  getOtherProducts,
} from "~/features/productSlice";

export default function OtherProducts() {
  const dispatch = useDispatch();
  const otherProducts = useSelector(selectOtherProduct);
  const [currentProducts, setCurrentProducts] = useState(otherProducts);
  useEffect(() => {
    dispatch(getOtherProducts());
  }, []);
  useEffect(() => {
    setCurrentProducts(otherProducts);
  }, [otherProducts]);

  const handleClickProduct = (product) => {
    dispatch(setProductDetail(product));
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  };

  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(price);
  }
  const renderCapitalizedText = (text) => {
    return (
      <h6 style={{ fontFamily: "Arial" }}>
        {_.capitalize(ShortenText(text, 25))}
      </h6>
    );
  };

  return (
    <>
      <h2 style={{ fontFamily: "Arial" }}>Sản phẩm khác</h2>
      <ul className="products columns-4">
        {currentProducts.length === 0 ? (
          <h3 style={{ textAlign: "right" }}> Không có sản phẩm </h3>
        ) : (
          currentProducts.map((product) => (
            <li className="product" key={product.id}>
              <div className="product-inner">
                <Link
                  to={`/product-detail/${product.id}`}
                  onClick={() => handleClickProduct(product)}
                >
                  <img
                    className="product-image"
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: "300px", height: "250px" }}
                  />
                </Link>
                <div className="product-wrap">
                  <h6 className="woocommerce-loop-product__title">
                    <td>
                      <Link
                        to={`/product-detail/${product.id}`}
                        onClick={() => handleClickProduct(product)}
                      >
                        {renderCapitalizedText(product.name)}
                      </Link>
                    </td>
                  </h6>
                  <div className="price-wrap">
                    <span className="price" style={{ color: "white" }}>
                      <span>{formatCurrency(product.price)}</span>
                    </span>
                    <p
                      style={{
                        fontSize: "15px",
                        fontFamily: "Arial",
                        marginLeft: "90px",
                      }}
                    >
                      Đã bán:
                      {product.quantitySold}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
