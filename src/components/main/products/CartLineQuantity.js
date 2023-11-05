import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeCartLine, selectCartLine, setCartLine, setCurrentCartLine, setNewQuantity,} from "~/features/cartSlice";
import _ from "lodash";
import {setProductDetail} from "~/features/productSlice";
import {Link} from "react-router-dom";
import {selectToken} from "~/features/userSlice";

const CartLineQuantity = ({cartLine}) => {
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
            setQuantity(pre => pre + 1);
            dispatch(setNewQuantity(quantity));
            dispatch(setCartLine(currentCartLine));
        }
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (value >= minQuantity && value <= maxQuantity) {
            setQuantity(value);
        } else {
            setQuantity(value < minQuantity ? minQuantity : maxQuantity)
        }
    }

    useEffect(() => {
        if (quantity >= quantityInStock) {
            increaseRef.current.style.display = "none";
        } else {
            increaseRef.current.style.display = "inline-block";
        }
    }, [quantity, quantityInStock]);

    const handleDecrease = async () => {
        if (quantity > minQuantity) {
            setQuantity(pre => pre - 1);
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
        let requestData = {productId, token};
        dispatch(removeCartLine(requestData));
    };
    const renderCapitalizedText = (text) => {
        return (
            <h6 style={{fontFamily: "Arial", color: "white", whiteSpace: "pre-wrap"}}>
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
                    style={{cursor: "pointer"}}
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
                style={{fontFamily: "Arial"}}
            >
                {renderCapitalizedText(cartLine.productResponseDTO.name)}
            </td>
            <td className="product-price" data-title="Price">
            <div className="amount" style={{minWidth: '8em'}}>
             {formatCurrency(cartLine.productResponseDTO.price)}
            </div>
            </td>
            <td className="product-quantity" data-title="Quantity">
                <div className="quantity"></div>
                <div className="quantity d-inline-block float-right" style={{minWidth: '6em'}}>
                    <i
                        className="fa fa-chevron-down"
                        aria-hidden="true"
                        onClick={handleDecrease}
                        style={{position: "absolute", top: "40%", cursor: "pointer", left: 5}}
                    />
                    <input
                        type="number"
                        className="input-text text rounded"
                        min={minQuantity}
                        max={maxQuantity}
                        name="quantity"
                        value={quantity}
                        step={1}
                        style={{width: "100%"}}
                        onChange={handleQuantityChange}
                    />

                    <i
                        ref={increaseRef}
                        className="fa fa-chevron-up"
                        aria-hidden="true"
                        onClick={handleIncrease}
                        style={{position: "absolute", cursor: "pointer", top: "40%", right: 5}}
                    />
                </div>
            </td>
            <td className="product-subtotal" data-title="Total">
                <div className="amount" style={{minWidth: "9em"}}>{formatCurrency(totalPrice)}</div>
            </td>
        </>
    );
};

export default CartLineQuantity;
