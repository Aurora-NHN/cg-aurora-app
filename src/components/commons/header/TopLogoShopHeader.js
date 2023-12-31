import React from "react";
import logo from "~/assets/images/logo.png";
import { Link } from "react-router-dom";
import DynamicHeader from "~/components/commons/header/DynamicHeader";

const ShopHeader = ({ loggedIn = false }) => {
  return (
    <>

      <section className="page_toplogo ds bs c-my-10 s-py-10">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center text-lg-start">
              <Link to="/" className="logo">
                <img src={logo} alt="img" />
                <span className="logo-text color-darkgrey">Aurora</span>
              </Link>
            </div>

            <div className="col-lg-4 text-center">
              <div className="widget widget_search">
                <form
                  role="search"
                  method="get"
                  className="search-form"
                  action="/"
                >
                  <label htmlFor="search-form-top">
                    <span className="screen-reader-text">Search for:</span>
                  </label>
                </form>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-lg-flex justify-content-lg-end align-items-lg-center">
                <ul className="top-includes">
                  <div className="media vertical_box">
                    <div className="icon-styled color-main fs-40 px-4">
                      <i className="ico ico-pin"></i>
                    </div>

                    <div className="media-body">
                      <h4 className="fs-20 mt-0">
                        <strong>Open Hours</strong>
                      </h4>
                      <p>Mon-Fri: 9am-17pm; Sat: 9am-20pm; Sun: Off</p>
                    </div>
                  </div>

                  <div className="media vertical_box">
                    <div className="icon-styled color-main fs-40 px-4">
                      <i className="ico ico-message-on-phone"></i>
                    </div>
                    <div className="media-body">
                      <h4 className="fs-20 mt-0">
                        <strong>AURORA SHOP</strong>
                      </h4>
                      <p>21K Nguyễn Văn Trỗi, Nhú Nhuận, HCM</p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DynamicHeader topHeaderHeight={184} />
    </>
  );
};

export default ShopHeader;
