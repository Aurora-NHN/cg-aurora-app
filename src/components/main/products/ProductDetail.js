import React, { useState } from "react";
import CategorySidebar from "./CategorySideBar";
import Quantity from "./Quantity";
import { useDispatch, useSelector } from "react-redux";
import { selectProductDetail } from "~/features/productSlice";
import { setSubCategoryId } from "~/features/CategorySlice"
import WoocommerceTabs from "./WoocommerceTabs";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const product = useSelector(selectProductDetail);
  const minQuantity = 1;
  const maxQuantity = 10;
  const [quantity, setQuantity] = useState(minQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const handleSubCategorySelect = (selectedSubCategoryId) => {
        dispatch(setSubCategoryId(selectedSubCategoryId));
   navigate("/shop?sub-category-id="+selectedSubCategoryId);
   setSubCategoryId(null);
  };


  return (
    <>
      <CategorySidebar onSubCategorySelect={handleSubCategorySelect} />
      <main className="col-lg-8 order-lg-2">
        <div className="product">
          <ProductImage product={product} />
          <div className="summary entry-summary">
            <ProductInfo product={product} />
            <div>
              <div className="quantity" style={{ marginLeft: "10px" }}>
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
                  >
                    Add to cart
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
