import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createOrderVNPay, selectOrder, selectOrderSuccess, setOrderSuccess,} from "~/features/paymentSlice";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {selectToken} from "~/features/userSlice";

const Pricing = () => {
    const [order, setOrder] = useState(null);
    const dispatch = useDispatch();
    const orderSuccess = useSelector(selectOrderSuccess);
    const vnPayUrl = useSelector(selectOrder);
    const token = useSelector(selectToken);
    const [loggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        if (token) {
            setLoggedIn(true);

        } else {
            setLoggedIn(false);
        }
        if (order !== null) {
            dispatch(createOrderVNPay(order));
        }
    }, [token, order]);

    const handleCreateOrderVip = async (vipPack) => {
        if (loggedIn) {
            await setOrder({vipPack: vipPack});

        } else if (!loggedIn) {
            toast.error("You have not signed in, login please!", {
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.ERROR,
            });
        }
    };


    useEffect(() => {
        if (orderSuccess === true) {
            window.location.href = vnPayUrl;
        }
        dispatch(setOrderSuccess(false));
    }, [orderSuccess]);

    return (
        <section className="ds pattern s-parallax bs s-pb-90 s-pt-85 s-pb-xl-150 s-pt-xl-100">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                            <span>Purchase Vip Numerology</span>
                        </h3>
                        <div className="line"/>
                        <p className="text-center fs-20 mt-4">
              <span>
                What’s Your Sign? Read Your Three Years <br/>
                Numerology Today
              </span>
                        </p>
                        <div className="divider-40 divider-xl-60"/>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-plan price-layout-1 bg-darkgrey">
                            <div className="icon-styled fs-50">
                                <i className="color-darkgrey ico ico-diamond"/>
                            </div>
                            <div className="plan-name">
                                <div className="divider-25"/>
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
                  1 <br/>
                  People
                </span>
                            </div>
                            <div className="plan-button">
                                <a
                                    className="btn btn-medium btn-shop"
                                    onClick={() => handleCreateOrderVip(1)}
                                >
                                    Purchase
                                </a>
                            </div>
                        </div>
                        <div className="divider-60 divider-lg-0"/>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-plan price-layout-1 cs plan-featured">
                            <div className="icon-styled fs-50">
                                <i className="text-white ico ico-gem"/>
                            </div>
                            <div className="plan-name">
                                <div className="divider-25"/>
                                <h3 className="mt-0">Vip Pro</h3>
                                <div className="plan-description">Starting View Numerology</div>
                            </div>
                            <div className="plan-features text-center ">
                                <ul className="list-bordered ">
                                    <li className={"text-white"}>Ask Three Question</li>
                                    <li className={"text-white"}>Vip Account</li>
                                    <li className={"text-white"}>View Numerolory</li>
                                    <li className={"text-white"}>View History Numerolory</li>
                                </ul>
                            </div>
                            <div className="price-wrap">
                                <div className="wrapper">
                                    <span className="plan-price">650.000</span>
                                    <span className="plan-sign text-white">đ</span>
                                </div>
                                <span className="plan-decimals text-left text-white">
                  3 <br/>
                  People
                </span>
                            </div>
                            <div className="plan-button">
                                <a
                                    className="btn btn-medium btn-shop"
                                    onClick={() => handleCreateOrderVip(2)}
                                >
                                    Purchase
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-plan price-layout-1 bg-darkgrey">
                            <div className="icon-styled fs-50">
                                <i className="color-darkgrey ico ico-gems"/>
                            </div>
                            <div className="plan-name">
                                <div className="divider-25"/>
                                <h3 className="mt-0">Super Vip</h3>
                                <div className="plan-description">Starting View Numerology</div>
                            </div>
                            <div className="plan-features text-center">
                                <ul className="list-bordered">
                                    <li>Ask Five Question</li>
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
                  5 <br/>
                  People
                </span>
                            </div>
                            <div className="plan-button">
                                <a
                                    className="btn btn-medium btn-shop"
                                    onClick={() => handleCreateOrderVip(3)}
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
