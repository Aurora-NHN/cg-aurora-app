import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";

const TopLogoHeader = () => {
  return (
    <section className="page_toplogo ds bs s-py-30">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="d-lg-flex justify-content-lg-end align-items-lg-center">
              <div className="me-auto">
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <Link to="/" className="logo">
                    {/* <a href=""> */}
                    <img src={logo} alt="img" />
                    <span className="logo-text color-darkgrey">AURORA</span>
                    {/* </a> */}
                  </Link>
                </div>
              </div>

              <div className="d-none d-lg-flex justify-lg-content-end align-items-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopLogoHeader;
