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
  setProductDetail,
  selectLoading,
  setLoading,
} from "~/features/productSlice";
import { selectSubCategoryId } from "~/features/CategorySlice";
import Pagination from "./Pagination";
import Search from "./Search";
import CategorySidebar from "./CategorySideBar";
export default function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);
  const [keyword, setKeyword] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const [search, setSearch] = useState(false);
  const [subCategoryId, setSubCategoryId] = useState(null);
  const [productsBySubCategory, setProductsBySubCategory] = useState(false);
  const newSubCategoryId = useSelector(selectSubCategoryId);
  const loading = useSelector(selectLoading);
  const [onloading, setOnloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOnloading(false);
    }, 1000);
  }, [loading]);

  useEffect(() => {
    const currentSubCategoryId = subCategoryId || newSubCategoryId;
    if (search) {
      const requestData = { keyword, pageNumber, sortOrder };
      dispatch(getProductsByKeyword(requestData));
      navigate("/shop?keyword=" + keyword + "&page-number=" + pageNumber);
    } else if (currentSubCategoryId && pageNumber) {
      const requestData = {
        subCategoryId: currentSubCategoryId,
        pageNumber,
        sortOrder,
      };
      dispatch(getProductsBySubCategoryId(requestData));
      navigate(
        "/shop?sub-category?id=" +
          currentSubCategoryId +
          "&page-number=" +
          pageNumber
      );
    } else if (pageNumber) {
      if (sortOrder === "asc") {
        dispatch(getProductsSortByPriceAscending(pageNumber));
        setProductsBySubCategory(true);
        navigate("/shop?sort=" + sortOrder + "&page-number=" + pageNumber);
      } else if (sortOrder === "desc") {
        dispatch(getProductsSortByPriceDescending(pageNumber));
        navigate("/shop?sort=" + sortOrder + "&page-number=" + pageNumber);
      } else {
        dispatch(getProducts(pageNumber));
      }
    }
  }, [search, pageNumber, sortOrder, subCategoryId, newSubCategoryId]);

  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(price);
  }

  const handleSearch = (keyword) => {
    setKeyword(keyword);
    const requestData = { keyword, pageNumber: 1 };
    dispatch(getProductsByKeyword(requestData));
    setSearch(true);
    navigate("/shop?keyword=" + keyword);
  };

  function handleSubmitPage(newPageNumber) {
    setPageNumber(newPageNumber);
  }

  function nextPage() {
    setPageNumber(pageNumber + 1);
  }

  function backPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function handleSortByPrice(order) {
    if (search) {
      const requestData = { keyword, sortOrder: order, pageNumber: 1 };
      dispatch(getProductsByKeyword(requestData));
      navigate(
        "/shop?sort=" +
          order +
          "&keyword=" +
          keyword +
          "&page-number=" +
          pageNumber
      );
    } else if (productsBySubCategory && subCategoryId) {
      const requestProductsBySubcategoryId = {
        subCategoryId,
        sortOrder: order,
        pageNumber: 1,
      };
      dispatch(getProductsBySubCategoryId(requestProductsBySubcategoryId));
      navigate(
        "/shop?sort=" +
          order +
          "&sub-category?id=" +
          subCategoryId +
          "&page-number=" +
          pageNumber
      );
    } else if (order === "asc") {
      dispatch(getProductsSortByPriceAscending(1));
    } else if (order === "desc") {
      dispatch(getProductsSortByPriceDescending(1));
    }
    setSortOrder(order);
  }

  const handleSubCategorySelect = (selectedSubCategoryId) => {
    setSearch(false);
    const requestProductsBySubcategoryId = {
      subCategoryId: selectedSubCategoryId,
      pageNumber: 1,
    };
    dispatch(getProductsBySubCategoryId(requestProductsBySubcategoryId));
    setSubCategoryId(selectedSubCategoryId);
    setProductsBySubCategory(true);
  };

  const handleClickProductLink = (product) => {
    dispatch(setProductDetail(product));
    setProductDetail(null);
  };

  return (
    <>
      <CategorySidebar onSubCategorySelect={handleSubCategorySelect} />
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
          {onloading ? (
            <h3>Loading...</h3>
          ) : (
            <ul className="products columns-3">
              {productList.length === 0 ? (
                <h3 style={{ textAlign: "right" }}> Product not found</h3>
              ) : (
                productList.map((product) => (
                  <li className="product" key={product.id}>
                    <div className="product-inner">
                      <Link
                        to={`/product-detail/${product.id}`}
                        onClick={() => handleClickProductLink(product)}
                      >
                        {" "}
                        <img src={product.imageUrl} alt={product.name} />
                      </Link>
                      <div className="product-wrap">
                        <h2 className="woocommerce-loop-product__title">
                          <td>
                            <Link
                              to={`/product-detail/${product.id}`}
                              onClick={() => handleClickProductLink(product)}
                            >
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
          )}
          <Pagination
            pageNumber={pageNumber}
            onNextPage={nextPage}
            onPrevPage={backPage}
            onPageClick={handleSubmitPage}
          />
        </div>
      </main>
    </>
  );
}
