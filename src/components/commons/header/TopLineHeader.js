import React, { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setLoginSuccess } from "~/features/loginSlice";
import {
  logoutUser,
  selectLoading,
  selectError,
  selectLogoutSuccess,
  selectToken,
  setToken,
  setLogoutSuccess,
} from "~/features/userSlice";

const TopLineHeader = () => {
  const token = useSelector(selectToken);
  const logoutSuccess = useSelector(selectLogoutSuccess);
  const loading = useSelector(selectLoading);
  const logoutError = useSelector(selectError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

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

  function handleChangePassword() {
    navigate("/change-password");
  }

  const handleAccountDetail = () => {
    navigate("/account-detail");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    if (logoutSuccess) {
      toast.success("Logout Success !", {
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.SUCCESS,
      });
      dispatch(setLoginSuccess(false));
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
                <li>
                  <span>
                    <a
                      href="#"
                      data-bs-target="#popupLogin"
                      data-bs-toggle="modal"
                    >
                      <i className="fa fa-user"></i> Login
                    </a>
                  </span>
                </li>

                <li>
                  <span>
                    <a
                      href="#"
                      data-bs-target="#popupRegistr"
                      data-bs-toggle="modal"
                    >
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
                      href=""
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
                      <a href="" onClick={handleAccountDetail}>
                        <i className="fa fa-user"></i> My Account
                      </a>
                      {/* <a href="">
                        <i className="fa fa-heart-o"></i> Account detail
                      </a> */}
                      <a href="" onClick={handleCart}>
                        <i className="fa fa-shopping-basket"></i> Cart
                      </a>
                      <a href="" onClick={handleChangePassword}>
                        <i className="fa fa-edit"></i> Change password
                      </a>
                      <a href="" onClick={logout}>
                        <i className="fa fa-lock"></i> Logout
                      </a>
                    </div>
                  </div>
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
