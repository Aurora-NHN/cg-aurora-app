import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewQuantity,setCartLine } from "~/features/CartSlice";

const CartLineQuantity = ({ cartLine }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(cartLine.quantity);
  const minQuantity = 1;
  const maxQuantity = cartLine.productResponseDTO.quantity;
  const [currentCartLine, setCurrentCartLine] = useState(cartLine);

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
      dispatch(setNewQuantity(quantity));
      dispatch(setCartLine(currentCartLine))
    }
  };

  const handleDecrease = async () => {
    if (quantity > minQuantity) {
      setQuantity(quantity - 1);
      dispatch(setNewQuantity(quantity));
      dispatch(setCartLine(cartLine))
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
