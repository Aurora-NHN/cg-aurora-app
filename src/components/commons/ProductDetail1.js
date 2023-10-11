import React, { useState } from "react";
import CategorySidebar from "./CategorySideBar";
import Quantity from "./Quantity";
import { useSelector, useDispatch } from "react-redux";
import { selectProductDetail } from "~/features/productSlice";
import WoocommerceTabs from "./WoocommerceTabs";
import ProductInfo from "./ProductInfo";
import { useNavigate} from "react-router-dom";
// import { setSubCategoryId } from "~/features/CategorySlice";

function ProductDetail1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector(selectProductDetail);

  const minQuantity = 1;
  const maxQuantity = 10;
  const [quantity, setQuantity] = useState(minQuantity);
  console.log(product);

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

  // const handleSubCategorySelect = (selectedSubCategoryId) => {
  //   dispatch(setSubCategoryId(selectedSubCategoryId));
  //   navigate("/shop")
  // };

  return (
    <>
      <CategorySidebar  />

      <main className="col-lg-8 order-lg-2">
        <div className="product">
          <div className="images" data-columns="4">
            <div className="flex-active-slide">
              <img
                src={product.imageUrl}
                alt={product.alt}
                data-caption=""
                data-src={product.imageUrl}
                data-large_image={product.imageUrl}
                data-large_image_width={product.width}
                data-large_image_height={product.height}
                draggable="false"
              />
              <ol className="flex-control-nav flex-control-thumbs">
                {product.productImageUrlList.map((imageUrl) => (
                  <li key={imageUrl.id}>
                    <figure>
                      <div data-thumb={imageUrl}>
                        <a href={imageUrl}>
                          <img
                            className="flex-active"
                            draggable="false"
                            src={imageUrl.src}
                            alt={imageUrl}
                            data-caption=""
                            data-src={imageUrl}
                            data-large_image={imageUrl}
                            max-width="100px"
                            max-height="100px"
                            onClick={() => {
                              document.querySelector(".large-image").src =
                                imageUrl;
                            }}
                          />
                        </a>
                      </div>
                    </figure>
                  </li>
                ))}
              </ol>
            </div>
          </div>
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

export default ProductDetail1;
