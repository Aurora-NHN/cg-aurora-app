import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLoading, selectOrder } from "~/features/orderSlice";
import {useNavigate} from "react-router-dom";

export default function OrderDetails() {
  const order = useSelector(selectOrder);
  const [currentOrder, setCurrentOrder] = useState(order);
  const loading = useSelector(selectLoading);
  const [onloading, setOnloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/order-details") {
      window.addEventListener("popstate", (event) => {
        navigate("/shop");
      });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOnloading(false);
    }, 1000);
  }, [loading]);
  
  useEffect(() => {
    setCurrentOrder(order);
  }, [order]);

  const renderCapitalizedText = (text) => {
    return <h6 style={{ fontFamily: "Arial" }}>{text}</h6>;
  };

  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formatter.format(price);
  }
  return (
    <section className="ds s-py-50 s-py-xl-100 c-gutter-60">
      <div className="container">
        <div className="row">
          <main className="col-lg-12">
            <h3 style={{ fontFamily: "Arial" }}>Thông tin đơn hàng</h3>
            {onloading ? (
              <h3>Loading...</h3>
            ) : (
              <>
                <div className="woocommerce-notices-wrapper">
                  <div
                    className="woocommerce-info"
                    style={{ fontFamily: "Arial" }}
                  >
                    <a tabIndex="1" className="showcoupon"></a>
                    <div>
                      <p>
                        <h6 style={{ fontFamily: "Arial" }}>
                          {" "}
                          Tên người nhận:
                        </h6>
                        {currentOrder.addressResponseDTO.fullName}
                      </p>
                      <br />
                      <p>
                        <h6 style={{ fontFamily: "Arial" }}>
                          {" "}
                          Địa chỉ giao hàng:
                        </h6>
                        {currentOrder.addressResponseDTO.deliveryAddress},
                        {currentOrder.addressResponseDTO.ward},
                        {currentOrder.addressResponseDTO.district},
                        {currentOrder.addressResponseDTO.city}.
                      </p>
                      <br />
                      <p>
                        <h6 style={{ fontFamily: "Arial" }}> Ngày đặt hàng:</h6>
                        {currentOrder.orderDate}
                      </p>
                      <br />
                      <p>
                        <h6 style={{ fontFamily: "Arial" }}>
                          Tình trạng đơn hàng:
                        </h6>
                        {currentOrder.status}
                      </p>
                      <br />
                      <p>
                        <h6 style={{ fontFamily: "Arial" }}>
                          Tổng giá trị đơn hàng:
                        </h6>
                        {formatCurrency(currentOrder.totalAmount)}
                      </p>
                      {currentOrder.addressResponseDTO.additionalInformation !==
                      "" ? (
                        <>
                          <br />
                          <p>
                            <h6> Ghi chú:</h6>
                            {
                              currentOrder.addressResponseDTO
                                .additionalInformation
                            }
                          </p>
                        </>
                      ) : (
                        ""
                      )}
                      <br />
                      <p>
                        <h6 style={{ color: "white", fontFamily: "Arial" }}>
                          Sản phẩm sẽ được giao cho bạn từ 3 đến 7 ngày tới.
                        </h6>
                      </p>
                    </div>
                  </div>
                </div>

                <table className="shop_table shop_table_responsive cart">
                  <thead>
                    <tr>
                      <th className="product-name">
                        {renderCapitalizedText("sản phẩm")}
                      </th>
                      <th className="product-quantity">
                        {renderCapitalizedText("Số lượng")}
                      </th>
                      <th className="product-price">
                        {renderCapitalizedText("giá")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentOrder.orderDetailList.map((orderDetail) => (
                      <tr className="cart_item" key={orderDetail.id}>
                        <td className="product-name">
                          {orderDetail.productResponseDTO.name}
                        </td>
                        <td className="product-quantity">
                          {orderDetail.quantity}
                        </td>
                        <td className="product-price">
                          {formatCurrency(orderDetail.totalPrice)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
