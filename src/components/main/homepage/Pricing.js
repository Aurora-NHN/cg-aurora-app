import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrder,
  setValue,
  setOrderSuccess,
  selectOrderSuccess,
  selectBillSuccess,
  selectPaymentIsError,
  createOrderVNPay,
  } from "~/features/paymentSlice";

const Pricing = () => {
  const [order, setOrder] = useState({});
  const dispatch = useDispatch();
  const orderSuccess = useSelector(selectOrderSuccess);
  const paymentSuccess = useSelector(selectBillSuccess);
  const vnPayUrl = useSelector(selectOrder);
  // let vnPayUrl = null;

  const handleCreateOrderVip = () => {
    let amount = 250000;
    let orderInfo = "Pay The Bill: Vip";
    setOrder({amount, orderInfo});
    console.log(order);
    dispatch(createOrderVNPay(order));
  };

  const handleCreateOrderVipPro = () => {
    let amount = 650000;
    let orderInfo = "Pay The Bill: Vip Pro";
    setOrder({ amount, orderInfo });
    dispatch(createOrderVNPay(orderInfo));
  };

  const handleCreateOrderVipSuper = () => {
    let amount = 900000;
    let orderInfo = "Pay The Bill: Super Vip";
    setOrder({ amount, orderInfo });
    dispatch(createOrderVNPay(orderInfo));
  };

  
  useEffect(() => {
    
  }, [order, orderSuccess]);

  return (
    <section className="ds s-pt-90 s-pb-30 s-pt-xl-100 s-pb-xl-90 c-mb-60 c-gutter-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="pricing-plan price-layout-1 bg-darkgrey">
              <div className="icon-styled fs-50">
                <i className="color-darkgrey ico ico-diamond" />
              </div>
              <div className="plan-name">
                <div className="divider-25" />
                <h3 className="mt-0">Vip</h3>
                <div className="plan-description">Starting View Numerology</div>
              </div>
              <div className="plan-features text-center">
                <ul className="list-bordered">
                  <li>Ask One Question</li>
                  <li>Vip Account</li>
                  <li>View Numerolory</li>
                  <li>View History Numerolory</li>
                </ul>
              </div>
              <div className="price-wrap">
                <div className="wrapper">
                  <span className="plan-price">250.000</span>
                  <span className="plan-sign">đ</span>
                </div>
                <span className="plan-decimals text-left">
                  1 <br />
                  People
                </span>
              </div>
              <div className="plan-button">
                <a
                  href="#"
                  className="btn btn-medium btn-shop"
                  onClick={handleCreateOrderVip}
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-plan price-layout-1 cs plan-featured">
              <div className="icon-styled fs-50">
                <i className="text-white ico ico-gem" />
              </div>
              <div className="plan-name">
                <div className="divider-25" />
                <h3 className="mt-0">Vip Pro</h3>
                <div className="plan-description">Starting View Numerology</div>
              </div>
              <div className="plan-features text-center">
                <ul className="list-bordered">
                  <li>Ask Three Question</li>
                  <li>Vip Account</li>
                  <li>View Numerolory</li>
                  <li>View History Numerolory</li>
                </ul>
              </div>
              <div className="price-wrap">
                <div className="wrapper">
                  <span className="plan-price">650.000</span>
                  <span className="plan-sign">đ</span>
                </div>
                <span className="plan-decimals text-left">
                  3 <br />
                  People
                </span>
              </div>
              <div className="plan-button">
                <a
                  href="#"
                  className="btn btn-medium btn-shop"
                  onClick={handleCreateOrderVipPro}
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-plan price-layout-1 bg-darkgrey">
              <div className="icon-styled fs-50">
                <i className="color-darkgrey ico ico-gems" />
              </div>
              <div className="plan-name">
                <div className="divider-25" />
                <h3 className="mt-0">Super Vip</h3>
                <div className="plan-description">Starting View Numerology</div>
              </div>
              <div className="plan-features text-center">
                <ul className="list-bordered">
                  <li>Ask Seven Question</li>
                  <li>Vip Account</li>
                  <li>View Numerolory</li>
                  <li>View History Numerolory</li>
                </ul>
              </div>
              <div className="price-wrap">
                <div className="wrapper">
                  <span className="plan-price">900.000</span>
                  <span className="plan-sign">đ</span>
                </div>
                <span className="plan-decimals text-left">
                  5 <br />
                  People
                </span>
              </div>
              <div className="plan-button">
                <a
                  href="#"
                  className="btn btn-medium btn-shop"
                  onClick={handleCreateOrderVipSuper}
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
