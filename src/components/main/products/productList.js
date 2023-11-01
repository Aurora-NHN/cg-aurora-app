import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import ShortenText from "./ShortenText";
import {
  getProducts,
  getProductsByKeyword,
  getProductsBySubCategoryId,
  getProductsSortByPriceAscending,
  getProductsSortByPriceDescending,
  selectLoading,
  selectProductList,
  setProductDetail,
} from "~/features/productSlice";
import {addToCart, getCart, selectAddToCartResponse,} from "~/features/CartSlice";
import {selectSubCategoryId} from "~/features/CategorySlice";
import Pagination from "./Pagination";
import Search from "./Search";
import CategorySidebar from "./CategorySideBar";
import {selectToken} from "~/features/userSlice";
import {toast} from "react-toastify";

export default function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const token = useSelector(selectToken);
  const productList = useSelector(selectProductList);
  const selectAddToCart = useSelector(selectAddToCartResponse);
  const newSubCategoryId = useSelector(selectSubCategoryId);
  const [keyword, setKeyword] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const [search, setSearch] = useState(false);
  const [subCategoryId, setSubCategoryId] = useState(null);
  const [productsBySubCategory, setProductsBySubCategory] = useState(false);
  const [onloading, setOnloading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [check, setCheck] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const renderCapitalizedText = (text) => {
    return (
      <h6 style={{ fontFamily: "Arial" }}>
        {_.capitalize(ShortenText(text, 15))}
      </h6>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setOnloading(false);
    }, 700);
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

  const handleAddToCartClick = (productId) => {
    if (loggedIn) {
      const requestData = { productId, quantity, token };
      dispatch(addToCart(requestData));
      setCheck(true);
    } else if (!loggedIn) {
      toast.error("You have not signed in, login please!", {
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.ERROR,
      });
    }
  };

  useEffect(() => {
    if (check) {
      dispatch(getCart(token));
      if (selectAddToCart.message === "Product added to cart successfully") {
        addToCartSuccess();
        setCheck(false);
      } else if (selectAddToCart.message === "Out of stock") {
        addToCartFail();
        setCheck(false);
      }
    }
  }, [selectAddToCart]);

  const addToCartSuccess = () => {
    toast.success("Đã thêm sản phẩm thành công!", {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.SUCCESS,
      duration: 50,
    });
    setCheck(false);
  };

  const addToCartFail = () => {
    toast.error("Thêm quá sản phẩm trong kho hàng !", {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.ERROR,
      duration: 50,
    });
    setCheck(false);
  };
  const handleClickProductLink = (product) => {
    dispatch(setProductDetail(product));
    setProductDetail(null);
  };

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [token]);

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
                    style={{ color: "white", fontFamily: "Arial" }}
                  >
                    Sắp xếp theo giá
                  </a>
                  <ul>
                    <li>
                      <a
                        style={{ fontFamily: "Arial" }}
                        onClick={() => handleSortByPrice("desc")}
                      >
                        Sắp xếp theo giá giảm dần
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ fontFamily: "Arial" }}
                        onClick={() => handleSortByPrice("asc")}
                      >
                        Sắp xếp theo giá tăng dần
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
                <h3 style={{ textAlign: "right" }}> Không có sản phẩm </h3>
              ) : (
                productList.map((product) => (
                  <li className="product" key={product.id}>
                    <div className="product-inner">
                      <Link
                        to={`/product-detail/${product.id}`}
                        onClick={handleClickProductLink(product)}
                      >
                        {" "}
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
                              onClick={() => handleClickProductLink(product)}
                            >
                              {renderCapitalizedText(product.name)}
                            </Link>
                          </td>
                        </h6>
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
                            onClick={() => handleAddToCartClick(product.id)}
                            style={{ fontSize: "25px" }}
                          >
                            <i className="fa fa-shopping-cart"></i>
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
