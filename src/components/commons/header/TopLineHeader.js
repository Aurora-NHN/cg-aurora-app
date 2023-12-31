import React, {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {getCart, selectCart} from "~/features/cartSlice";
import {
    logoutUser,
    selectError,
    selectLogoutSuccess,
    selectToken,
    setLogoutSuccess,
    setToken,
} from "~/features/userSlice";
import CartIcon from "~/components/main/products/CartIcon";

const TopLineHeader = () => {
    const token = useSelector(selectToken);
    const logoutSuccess = useSelector(selectLogoutSuccess);
    const logoutError = useSelector(selectError);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const cart = useSelector(selectCart);
    const [currentCart, setCurrentCart] = useState(cart);

    useEffect(() => {
        if (loggedIn) {
            const tokenGetCart = localStorage.getItem("token");
            dispatch(getCart(tokenGetCart));
            setCurrentCart(cart);
        }
    }, [loggedIn]);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) dispatch(setToken(storedToken));
    }, []);

    useEffect(() => {
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [token]);

    useEffect(() => {
        if (logoutSuccess) {
            toast.success("Logout Success !", {
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.SUCCESS,
            });
            dispatch(setLogoutSuccess(false));
            navigate("/");
        } else if (logoutError) {
            toast.error(logoutError, {
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.ERROR,
            });
        }
    }, [logoutSuccess]);

    const logout = () => {
        if (loggedIn) {
            let token = localStorage.getItem("token");
            dispatch(logoutUser(token));
            dispatch(setLogoutSuccess(false));
            localStorage.removeItem("token");
        }
    };

    return (
        <section className="page_topline ds s-py-10 c-my-10">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-lg-left text-center d-none d-lg-block">
                        <p>
                            <strong className="color-darkgrey">WELCOME TO AURORA</strong>
                        </p>
                    </div>
                    {!loggedIn ? (
                        <div className="col-lg-6 text-lg-right text-center">
                            <ul className="top-includes border-divided small-text">
                                <li className="hover-pointer">
                  <span>
                    <a data-bs-target="#popupLogin" data-bs-toggle="modal">
                      <i className="fa fa-user"></i> Login
                    </a>
                  </span>
                                </li>

                                <li className="hover-pointer">
                  <span>
                    <a data-bs-target="#popupRegistr" data-bs-toggle="modal">
                      <i className="fa fa-lock"></i> Register
                    </a>
                  </span>
                                </li>

                                <li>
                  <span className="social-icons">
                    <a
                        href="https://www.facebook.com/"
                        className="fa fa-facebook "
                        title="facebook"
                    ></a>
                    <a
                        href="https://twitter.com/"
                        className="fa fa-twitter "
                        title="twitter"
                    ></a>
                    <a
                        href="https://www.linkedin.com/"
                        className="fa fa-linkedin "
                        title="linkedin"
                    ></a>
                    <a
                        href="https://www.instagram.com/"
                        className="fa fa-instagram "
                        title="instagram"
                    ></a>
                    <a
                        href="https://www.youtube.com/"
                        className="fa fa-youtube-play "
                        title="youtube"
                    ></a>
                  </span>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="col-lg-6 text-lg-right text-center">
                            <ul className="top-includes border-divided small-text">
                                <li className="dropdown-account">
                                    <div className="dropdown show">
                                        <a
                                            className="dropdown-toggle"
                                            href="#"
                                            role="button"
                                            id="dropdown-account"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fa fa-user"></i> My Account
                                        </a>
                                        <div
                                            className="dropdown-menu ls"
                                            aria-labelledby="dropdown-account"
                                        >
                                            <Link to="/account">
                                                <i className="fa fa-user"></i> My Account
                                            </Link>
                                            <Link to="/pricing">
                                                <i className="fa fa-heart-o"></i> Buy Vip
                                            </Link>
                                            <Link to="/cart">
                                                <i className="fa fa-shopping-basket"></i> Cart
                                            </Link>
                                            <Link to="/change-password">
                                                <i className="fa fa-edit"></i> Change password
                                            </Link>
                                            <Link to="/numerology-report-history">
                                                <i className="fa fa-list-alt"></i> Numerology Report History
                                            </Link>
                                            <Link to="/" onClick={logout}>
                                                <i className="fa fa-lock"></i> Logout
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <CartIcon cart={currentCart}/>
                                </li>
                                <li>
                  <span className="social-icons">
                    <a
                        href="https://www.facebook.com/"
                        className="fa fa-facebook "
                        title="facebook"
                    ></a>
                    <a
                        href="https://twitter.com/"
                        className="fa fa-twitter "
                        title="twitter"
                    ></a>
                    <a
                        href="https://www.linkedin.com/"
                        className="fa fa-linkedin "
                        title="linkedin"
                    ></a>
                    <a
                        href="https://www.instagram.com/"
                        className="fa fa-instagram "
                        title="instagram"
                    ></a>
                    <a
                        href="https://www.youtube.com/"
                        className="fa fa-youtube-play "
                        title="youtube"
                    ></a>
                  </span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default memo(TopLineHeader);
