import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  selectProductList,
  getProductsByKeyword,
} from "~/features/productSlice";

export default function ProductList() {
 const [keyword, setKeytword] = useState("");
 const [pageNumber, setPageNumber] = useState("");
 const [change, setChange] = useState("");

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const productList = useSelector(selectProductList);

 useEffect(() => {
   if (keyword == null) {
     dispatch(getProducts());
   } else {
     dispatch(getProducts(keyword));
   }
 }, [dispatch]);

 function formatCurrency(price) {
   const formatter = new Intl.NumberFormat("vi-VN", {
     style: "currency",
     currency: "VND",
   });
   return formatter.format(price);
 }

 function handleSubmit(event, keyword) {
   dispatch(getProducts(keyword));
 }

 function handleSearchChange(event) {
   setKeytword(event.target.value);
 }


  return (
    <>
      <main className="col-lg-8 order-lg-2">
        <div className="">
          <div className="products-selection">
            <div className="widget widget_search">
              <label htmlFor="search-form-top">
                <span className="screen-reader-text">Search for:</span>
              </label>
              <input
                type="search"
                id="search-form-top"
                className="search-field"
                placeholder="Search keyword"
                name="search"
                onChange={handleSearchChange}
              />
              <button
                type="button"
                className="search-submit"
                onClick={(event) => handleSubmit(event,keyword)}
              >
                <span className="screen-reader-text">Search</span>
              </button>
            </div>
            <select name="orderby" className="orderby">
              <option value="menu_order" selected="selected">
                Default sorting
              </option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="date">Sort by newness</option>
              <option value="price">Sort by price: low to high</option>
              <option value="price-desc">Sort by price: high to low</option>
            </select>
          </div>{" "}
          <ul className="products columns-3">
            {productList.map((product) => (
              <li className="product" key={product.id}>
                <div className="product-inner">
                  <a href={`shop-product-right.html/${product.id}`}>
                    <img src={product.imageUrl} alt={product.name} />
                  </a>
                  <div className="product-wrap">
                    <h2 className="woocommerce-loop-product__title">
                      <td>
                        <Link to={`/product-detail/${product.id}`}>
                          {product.name}
                        </Link>
                      </td>
                    </h2>
                    <div className="star-rating">
                      <span style={{ width: `${product.rating}%` }}>
                        Rated{" "}
                        <strong className="rating">
                          {product.rating / 20} out of 5
                        </strong>
                      </span>
                    </div>
                    <div className="price-wrap">
                      <span className="price">
                        <span>{formatCurrency(product.price)}</span>
                      </span>
                      <a
                        rel="nofollow"
                        className="button product_type_simple add_to_cart_button"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <nav className="woocommerce-pagination">
            <ul className="page-numbers">
              <li>
                <a className="back page-numbers" href="shop-right.html">
                  ←
                </a>
              </li>
              <li>
                <span className="page-numbers">1</span>
              </li>
              <li>
                <a className="page-numbers" href="shop-right.html">
                  2
                </a>
              </li>
              <li>
                <a className="page-numbers" href="shop-right.html">
                  3
                </a>
              </li>
              <li>
                <a className="next page-numbers" href="shop-right.html">
                  →
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}
