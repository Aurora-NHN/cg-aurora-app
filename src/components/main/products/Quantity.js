import React, { useRef, useEffect } from "react";

const Quantity = ({
  quantity,
  handleDecrease,
  handleIncrease,
  minQuantity,
  maxQuantity,
}) => {
   const increaseRef = useRef(null);
  useEffect(() => {
    if (quantity >= maxQuantity) {
      increaseRef.current.style.display = "none";
    } else {
      increaseRef.current.style.display = "inline-block";
    }
  }, [quantity, maxQuantity]);
  return (
    <div className="quantity d-inline-block float-right grid">
      <i
        className="fa fa-chevron-down"
        aria-hidden="true"
        onClick={handleDecrease}
        style={{ transform: "translateX(160%)", cursor: "pointer" }}
      />
      <input
        type="number"
        className="input-text text"
        min={minQuantity}
        max={maxQuantity}
        name="quantity"
        value={quantity}
        step={1}
        size={4}
        style={{ width: "80px" }}
      />

      <i
        ref={increaseRef}
        className="fa fa-chevron-up"
        aria-hidden="true"
        onClick={handleIncrease}
        style={{ transform: "translateX(-160%)", cursor: "pointer" }}
      />
    </div>
  );
};

export default Quantity;
