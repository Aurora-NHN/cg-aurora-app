import React, { useState } from "react";

const WoocommerceTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return <div>{product.description}</div>;
      case "review":
        return <div>{product.reviews}</div>;
      case "Additional information":
        return <div className="weight-container">Weight: {product.weight}</div>;
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
            href="#tab-description"
            onClick={() => handleTabClick("description")}
          >
            Description
          </a>
        </li>
        <li className={`reviews_tab ${activeTab === "review" ? "active" : ""}`}>
          <a href="#tab-reviews" onClick={() => handleTabClick("review")}>
            Reviews
          </a>
        </li>
        <li
          className={`Additional information_tab ${
            activeTab === "Additional information" ? "active" : ""
          }`}
        >
          <a
            href="#tab-Additional information"
            onClick={() => handleTabClick("Additional information")}
          >
            Additional information
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
