import React from 'react';
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
                                    <a href="../../pages" className="logo">
                                        <img src={logo} alt="img"/>
                                        <span className="logo-text color-darkgrey">vedi</span>
                                    </a>
                                </div>
                            </div>

                            <div className="d-none d-lg-flex justify-lg-content-end align-items-center">
                                <div className="media vertical_box">
                                    <div className="icon-styled color-main fs-50">
                                        <i className="ico ico-pin"></i>
                                    </div>

                                    <div className="media-body">
                                        <h4 className="fs-20 mt-0">
                                            <strong>Open Hours</strong>
                                        </h4>
                                        <p>
                                            Mon-Fri: 9-17; Sat: 9-20; Sun: Off
                                        </p>
                                    </div>
                                </div>

                                <div className="media vertical_box">
                                    <div className="icon-styled color-main fs-50">
                                        <i className="ico ico-message-on-phone"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="fs-20 mt-0">
                                            <strong>1-800-123-4567</strong>
                                        </h4>
                                        <p>
                                            Some Street, 123, Your City
                                        </p>
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