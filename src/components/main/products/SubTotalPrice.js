import React, {useState, useEffect} from "react";
import {} from "~/features/cartSlice";
import {useDispatch} from "react-redux";
import {getCartOrder} from "~/features/cartSlice";
import {useNavigate} from "react-router-dom";

export default function SubTotalPrice({cart}) {
    const currentSubTotalPrice = cart.totalAmount;
    const [subTotalPrice, setSubToTalPrice] = useState(cart.totalAmount);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        setSubToTalPrice(currentSubTotalPrice);
    }, [currentSubTotalPrice]);

    function formatCurrency(price) {
        const formatter = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        });
        return formatter.format(price);
    }

    const handleClickOrder = () => {
        navigate("/checkout-form");
    };

    return (
        <div className="cart_totals">
            {!subTotalPrice ? (
                <table className="shop_table shop_table_responsive">
                    <thead>
                    <tr className="cart-subtotal" key={cart.id}>
                        <th>
                            <h6 style={{fontFamily: "Arial"}}> Tổng số tiền </h6>
                        </th>
                        <td data-title="Subtotal">
                            <span className="amount">{formatCurrency(0)}</span>
                        </td>
                    </tr>
                    </thead>
                </table>
            ) : (
                <table className="shop_table shop_table_responsive">
                    <thead>
                    <tr className="cart-subtotal" key={cart.id}>
                        <th>
                            <h6 style={{fontFamily: "Arial"}}> Tổng số tiền </h6>
                        </th>
                        <td data-title="Subtotal">
                            <span className="amount">{formatCurrency(subTotalPrice)}</span>
                        </td>
                    </tr>
                    </thead>
                </table>
            )}

            {cart.cartLineDTOList.length > 0 && (
                <div className="wc-proceed-to-checkout">
                    <a
                        className="checkout-button button alt wc-forward"
                        style={{fontFamily: "Arial"}}
                        onClick={handleClickOrder}
                    >
                        Mua Hàng
                    </a>
                </div>
            )}
        </div>
    );
}
