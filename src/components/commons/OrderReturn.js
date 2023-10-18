import React from "react";

const OrderReturn = () => {

  return (
    <div className="body py-5">
      <div className="container">
        <div className="w-50 m-auto">
          <h1 className="my-3 text-center">Thanh toán thất bại</h1>
          <h2 className="my-2">Chi tiết đơn hàng</h2>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Thông tin đơn hàng:</td>
                <td>
                  <span>Mua vip</span>
                </td>
              </tr>
              <tr>
                <td>Tổng tiền:</td>
                <td>
                  <span>20000</span>
                </td>
              </tr>
              <tr>
                <td>Thời gian thanh toán:</td>
                <td>
                  <span>time</span>
                </td>
              </tr>
              <tr>
                <td>Mã giao dịch:</td>
                <td>
                  <span>ahjgsfs</span>
                </td>
              </tr>
            </tbody>
          </table>
          <a href="/" className="btn btn-primary">
            Về trang chủ
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderReturn;
