import React, { useState } from "react";

const WoocommerceTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return <div style={{ fontFamily: "Arial" }}>{product.description}</div>;
      case "review":
        return <div style={{ fontFamily: "Arial" }}>{product.reviews}</div>;
      case "Additional information":
        return (
          <div style={{ fontFamily: "Arial" }} 
          className="weight-container">
            Khối lượng: {product.weight}g
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="woocommerce-tabs wc-tabs-wrapper">
      <ul className="tabs wc-tabs" role="tablist">
        <li
          className={`description_tab ${
            activeTab === "description" ? "active" : ""
          }`}
        >
          <a
            style={{ fontFamily: "Arial" }}
            href="#tab-description"
            onClick={() => handleTabClick("description")}
          >
            Mô tả
          </a>
        </li>
        <li className={`reviews_tab ${activeTab === "review" ? "active" : ""}`}>
          <a
            style={{ fontFamily: "Arial" }}
            href="#tab-reviews"
            onClick={() => handleTabClick("review")}
          >
            Đánh giá
          </a>
        </li>
        <li
          className={`Additional information_tab ${
            activeTab === "Additional information" ? "active" : ""
          }`}
        >
          <a
            style={{ fontFamily: "Arial" }}
            href="#tab-Additional information"
            onClick={() => handleTabClick("Additional information")}
          >
            Thông tin sản phẩm
          </a>
        </li>
      </ul>
      <div className="panel wc-tab" id="tab-description" role="tabpanel">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default WoocommerceTabs;
