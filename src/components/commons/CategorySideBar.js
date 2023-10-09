import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, selectCategories } from "~/features/CategorySlice";

export default function CategorySidebar({ onSubCategorySelect }) {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

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
    </aside>
  );
}