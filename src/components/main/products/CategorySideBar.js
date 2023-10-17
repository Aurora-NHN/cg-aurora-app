import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, selectCategories } from "~/features/CategorySlice";
import { useNavigate } from "react-router-dom";

export default function CategorySidebar({ onSubCategorySelect }) {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleCategoryClick = (categoryId) => {
    if (selectedCategoryId === categoryId) {
      setSelectedCategoryId(null);
    } else {
      setSelectedCategoryId(categoryId);
    }
  };

  const handleSubCategorySelect = (subCategoryId) => {
    onSubCategorySelect(subCategoryId);
    navigate("/shop?sub-category-id=" + subCategoryId);
  };


  return (
    <aside className="col-lg-4 order-lg-1">
      <div className="widget woocommerce widget_product_categories">
        <h3 className="widget-title">Categories</h3>
        <ul className="product-categories">
          {categories.map((category, index) => (
            <li className="cat-item cat-parent" key={index}>
              <a
                href={category.link}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </a>
              {category.id === selectedCategoryId &&
                category.subCategoryList &&
                category.subCategoryList.length > 0 && (
                  <ul className="children">
                    {category.subCategoryList.map(
                      (subCategoryList, subIndex) => (
                        <li className="cat-item" key={subIndex}>
                          <a
                            href={subCategoryList.link}
                            onClick={() =>
                              handleSubCategorySelect(subCategoryList.id)
                            }
                          >
                            {subCategoryList.name}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </div>
      <div className="widget woocommerce widget_recently_viewed_products">
        <h3 className="widget-title">Viewed Products</h3>
        <ul className="product_list_widget">
          <li>
            <a href="shop-product-right.html">
              <img src="images/shop/05.jpg" alt="img" />
              <span className="product-title">Premium Quality</span>
            </a>
            <del>
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>
                15.00
              </span>
            </del>
            <ins>
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>
                12.00
              </span>
            </ins>
          </li>
          <li>
            <a href="shop-product-right.html">
              <img src="images/shop/06.jpg" alt="img" />
              <span className="product-title">Flying Ninja</span>
            </a>
            <del>
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>
                15.00
              </span>
            </del>
            <ins>
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>
                12.00
              </span>
            </ins>
          </li>
        </ul>
      </div>
    </aside>
  );
}
