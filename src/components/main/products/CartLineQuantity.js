import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCartLine,
  setNewQuantity,
  setCurrentCartLine,
  setCartLine,
  selectCartLine,
} from "~/features/cartSlice";
import _ from "lodash";
import { setProductDetail } from "~/features/productSlice";
import { Link } from "react-router-dom";
import { selectToken } from "~/features/userSlice";

const CartLineQuantity = ({ cartLine }) => {
  const dispatch = useDispatch();
  const currentCartLine = useSelector(selectCartLine);
  const [quantity, setQuantity] = useState(cartLine.quantity);
  const minQuantity = 1;
  const maxQuantity = cartLine.productResponseDTO.quantity;
  const token = useSelector(selectToken);
  const currentTotalPrice = cartLine.totalPrice;
  const [totalPrice, setTotalPrice] = useState(cartLine.totalPrice);
  const increaseRef = useRef(null);
  const [quantityInStock, setQuantityInStock] = useState(
    cartLine.productResponseDTO.quantity
  );
  useEffect(() => {
    setTotalPrice(currentTotalPrice);
  }, [currentTotalPrice]);

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
      dispatch(setNewQuantity(quantity));
      dispatch(setCartLine(currentCartLine));
    }
  };

  useEffect(() => {
    if (quantity >= quantityInStock) {
      increaseRef.current.style.display = "none";
    } else {
      increaseRef.current.style.display = "inline-block";
    }
  }, [quantity, quantityInStock]);

  const handleDecrease = async () => {
    if (quantity > minQuantity) {
      setQuantity(quantity - 1);
    }
  };

  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(price);
  }

  const handleClickProductLink = (product) => {
    dispatch(setProductDetail(product));
    setProductDetail(null);
  };

  useEffect(() => {
    dispatch(setNewQuantity(quantity));
    dispatch(setCurrentCartLine(cartLine));
  }, [quantity, totalPrice]);

  const handleClickRemoveCartLine = (productId) => {
    let requestData = { productId, token };
    dispatch(removeCartLine(requestData));
  };
  const renderCapitalizedText = (text) => {
    return (
      <h6 style={{ fontFamily: "Arial", color: "white" }}>
        {_.capitalize(text)}
      </h6>
    );
  };

  return (
    <>
      <td className="product-remove">
        <a
          name="id"
          className="remove"
          aria-label="Remove this cartLine"
          data-product_id={cartLine.id}
          data-product_sku=""
          onClick={() =>
            handleClickRemoveCartLine(cartLine.id)
          }
          style={{ cursor: "pointer" }}
        >
          ×
        </a>
      </td>
      <td className="product-thumbnail">
        <Link
          to={`/product-detail/${cartLine.productResponseDTO.id}`}
          onClick={() => handleClickProductLink(cartLine.productResponseDTO)}
        >
          {" "}
          <img
            width="180"
            height="180"
            src={cartLine.productResponseDTO.imageUrl}
            alt="img"
          />
        </Link>
      </td>
      <td
        className="product-name"
        data-title="Product"
        style={{ fontFamily: "Arial" }}
      >
        <p> {renderCapitalizedText(cartLine.productResponseDTO.name)}</p>
      </td>
      <td className="product-price" data-title="Price">
        <span className="amount">
          {formatCurrency(cartLine.productResponseDTO.price)}
        </span>
      </td>
      <td className="product-quantity" data-title="Quantity">
        <div className="quantity"></div>
        <div className="quantity d-inline-block float-right">
          <i
            className="fa fa-chevron-down"
            aria-hidden="true"
            onClick={handleDecrease}
            style={{ transform: "translateX(150%)", cursor: "pointer" }}
          />
          <input
            type="number"
            className="input-text text"
            min={minQuantity}
            max={maxQuantity}
            name="quantity"
            value={quantity}
            step={1}
            style={{ width: "80px" }}
          />

          <i
            ref={increaseRef}
            className="fa fa-chevron-up"
            aria-hidden="true"
            onClick={handleIncrease}
            style={{ transform: "translateX(-150%)", cursor: "pointer" }}
          />
        </div>
      </td>
      <td className="product-subtotal" data-title="Total">
        <span className="amount">{formatCurrency(totalPrice)}</span>
      </td>
    </>
  );
};

export default CartLineQuantity;
