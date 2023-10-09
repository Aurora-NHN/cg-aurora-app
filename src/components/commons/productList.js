import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  selectProductList,
  getProductsByKeyword,
  getProductsSortByPriceDescending,
  getProductsSortByPriceAscending,
  getProductsBySubCategoryId,
} from "~/features/productSlice";
import Pagination from "./Pagination";
import Search from "./Search";
import CategorySideBar from "./CategorySideBar";
export default function ProductList(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const productList = useSelector(selectProductList);
  // const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [sortOrder, setSortOrder] = useState("");
  const [search, setSearch] = useState(false);
  const [subCategoryId, setSubCategoryId] = useState(null);
  const [newProductsBySubCategory, setNewProductsBySubCategory] =
    useState(false);

  useEffect(() => {
    if (keyword) {
      const requestData = { keyword, pageNumber };
      dispatch(getProductsByKeyword(requestData));
    } else if (subCategoryId) {
      const requestData = { subCategoryId, pageNumber, sortOrder };
      dispatch(getProductsBySubCategoryId(requestData));
      setNewProductsBySubCategory(true);
    } else if (sortOrder === "asc") {
      dispatch(getProductsSortByPriceAscending(pageNumber));
    } else if (sortOrder === "desc") {
      dispatch(getProductsSortByPriceDescending(pageNumber));
    } else {
      dispatch(getProducts(pageNumber));
    }
   
  }, [keyword, pageNumber, sortOrder, subCategoryId]);
 
  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(price);
  }

  function handleSubmitPage(newPageNumber) {
    setPageNumber(newPageNumber);
  }

  function nextPage() {
    // if (!isNextButtonDisabled) {
      const newPageNumber = pageNumber + 1;
      setPageNumber(newPageNumber);
    // }
  }

  function backPage() {
    if (pageNumber > 1) {
      const newPageNumber = pageNumber - 1;
      setPageNumber(newPageNumber);
    }
  }

  function handleSortByPrice(order) {
    setSortOrder(order);
    setPageNumber(1);

    if (search) {
      const requestData = { keyword, sortOrder: order, pageNumber: 1 };
      dispatch(getProductsByKeyword(requestData));
    } else if (newProductsBySubCategory) {
      const requestProductsBySubcategoryId = {
        subCategoryId,
        sortOrder: order,
        pageNumber: 1,
      };
      dispatch(getProductsBySubCategoryId(requestProductsBySubcategoryId));
    } else if (order === "asc") {
      dispatch(getProductsSortByPriceAscending(1));
    } else if (order === "desc") {
      dispatch(getProductsSortByPriceDescending(1));
    }
  }

  const handleSearch = (keyword) => {
    setKeyword(keyword);
    setSearch(true);
    const requestData = { keyword, pageNumber, sortOrder };
    dispatch(getProductsByKeyword(requestData));
  };

  const handleSubCategorySelect = (selectedSubCategoryId) => {
    setSubCategoryId(selectedSubCategoryId);
  };

  return (
    <>
      <CategorySideBar onSubCategorySelect={handleSubCategorySelect} />
      <main className="col-lg-8 order-lg-2">
        <div className="">
          <div className="products-selection">
            <Search onSearch={handleSearch} />
            <nav className="orderby">
              <ul className="nav sf-menu">
                <li className="active">
                  <a
                    value="menu_order"
                    className="btn btn-outline-maincolor btn-medium d-none d-md-block"
                    style={{ color: "white" }}
                  >
                    Default sorting
                  </a>
                  <ul>
                    <li>
                      <a onClick={() => handleSortByPrice("desc")}>
                        Sort by price descending
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleSortByPrice("asc")}>
                        Sort by price ascending
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>{" "}
          <ul className="products columns-3">
            {productList.length === 0 ? (
              <h3 style={{ textAlign: "right" }}> Product not found</h3>
            ) : (
              productList.map((product) => (
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
              ))
            )}
          </ul>
          <Pagination
            pageNumber={pageNumber}
            // isNextButtonDisabled={isNextButtonDisabled}
            onNextPage={nextPage}
            onPrevPage={backPage}
            onPageClick={handleSubmitPage}
          />
        </div>
      </main>
    </>
  );
}
