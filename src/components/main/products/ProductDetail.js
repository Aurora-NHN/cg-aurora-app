import React, { useEffect, useState, useRef } from "react";
import CategorySidebar from "./CategorySideBar";
import Quantity from "./Quantity";
import { useDispatch, useSelector } from "react-redux";
import { selectProductDetail } from "~/features/productSlice";
import { setSubCategoryId } from "~/features/CategorySlice";
import WoocommerceTabs from "./WoocommerceTabs";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  getCart,
  selectAddToCartResponse,
} from "~/features/CartSlice";
import { selectToken } from "~/features/userSlice";
import { toast } from "react-toastify";

function ProductDetail() {
  const product = useSelector(selectProductDetail);
  const minQuantity = 1;
  const [quantity, setQuantity] = useState(minQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const maxQuantity = product.quantity;
  const [check, setCheck] = useState(false);
  const selectAddToCart = useSelector(selectAddToCartResponse);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > minQuantity) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCartClick = (productId) => {
    if (loggedIn) {
      const requestData = { productId, quantity, token };
      dispatch(addToCart(requestData));
      setCheck(true);
    } else if (!loggedIn) {
      toast.error("Bạn chưa đăng nhập, vui lòng đăng nhập!", {
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.ERROR,
      });
    }
  };

  const handleSubCategorySelect = (selectedSubCategoryId) => {
    dispatch(setSubCategoryId(selectedSubCategoryId));
    navigate("/shop?sub-category-id=" + selectedSubCategoryId);
    setSubCategoryId(null);
  };

  useEffect(() => {
    dispatch(getCart(token));
    if (selectAddToCart.message === "Product added to cart successfully") {
      addToCartSuccess();
      setCheck(false);
    } else if (selectAddToCart.message === "Out of stock") {
      addToCartFail();
      setCheck(false);
    }
  }, [selectAddToCart]);

  const addToCartSuccess = () => {
    toast.success("Đã thêm sản phẩm thành công!", {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.SUCCESS,
    });
  };

  const addToCartFail = () => {
    toast.error("Sản phẩm đã hết hàng!", {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.ERROR,
    });
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
        <div className="product">
          <ProductImage product={product} />
          <div className="summary entry-summary">
            <ProductInfo product={product} />
            <div>
              <div className="quantity" style={{ marginLeft: "-15px" }}>
                <div>
                  <Quantity
                    quantity={quantity}
                    handleDecrease={handleDecrease}
                    handleIncrease={handleIncrease}
                    maxQuantity={maxQuantity}
                    minQuantity={minQuantity}
                  />
                  <button
                    type="submit"
                    className="single_add_to_cart_button button alt"
                    onClick={() => handleAddToCartClick(product.id)}
                    style={{ fontFamily: "Arial" }}
                  >
                    Thêm vào giỏ Hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <input type="hidden" name="product" />
          <WoocommerceTabs product={product} />
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
