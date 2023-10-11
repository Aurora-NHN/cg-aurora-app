import React, { useState } from "react";

const Quantity = ({
  quantity,
  handleDecrease,
  handleIncrease,
  minQuantity,
  maxQuantity,
}) => {
  return (
    <div className="quantity d-inline-block float-right">
      <input
        type="number"
        className="input-text qty text"
        min={minQuantity}
        max={maxQuantity}
        name="quantity"
        value={quantity}
        step={1}
        size={4}
        style={{ width: "100px" }}
      />
      <i
        className="fa fa-chevron-down"
        aria-hidden="true"
        style={{ marginLeft: "5px" }}
        onClick={handleDecrease}
      />
      <i
        className="fa fa-chevron-up"
        aria-hidden="true"
        style={{ marginRight: "5px" }}
        onClick={handleIncrease}
      />
    </div>
  );
};

export default Quantity;
