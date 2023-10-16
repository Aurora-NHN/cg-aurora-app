import React, { useState } from "react";

const CartLineQuantity = ({ cartLine }) => {
  console.log(cartLine);
  const [quantity, setQuantity] = useState(cartLine.quantity);
  const minQuantity = 1;
  const maxQuantity = cartLine.productResponseDTO.quantity;
  console.log("maxQuantity");
  console.log(maxQuantity);
  const handleIncrease = () => {
    console.log('cartLine');
    console.log(quantity);
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = async () => {
    if (quantity > minQuantity) {
      setQuantity(quantity - 1);
    }

  };

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
        onClick={handleDecrease}
      />
      <i

        className="fa fa-chevron-up"
        aria-hidden="true"
        onClick={handleIncrease}
      />

    </div>
  );
};

export default CartLineQuantity;
