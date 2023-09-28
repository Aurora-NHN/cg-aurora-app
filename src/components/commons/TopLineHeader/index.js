import React from 'react';

const TopLineHeader = () => {
    return (
        <section className="page_topline ds s-py-10 c-my-10">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-lg-left text-center d-none d-lg-block">
                        <p><strong className="color-darkgrey">Welcome to our site! Check our services and gain
                            success!</strong></p>
                    </div>
                    <div className="col-lg-6 text-lg-right text-center">

                        <ul className="top-includes border-divided small-text">

                            <li>
									<span>
										<a href="src/components/Header#" data-bs-target="#popupLogin" data-bs-toggle="modal"><i
                                            className="fa fa-user"></i> Login</a>
									</span>
                            </li>


                            <li>
									<span>
										<a href="src/components/Header#" data-bs-target="#popupRegistr" data-bs-toggle="modal"><i
                                            className="fa fa-lock"></i> Register</a>
									</span>
                            </li>


                            <li>
									<span className="social-icons">

										<a href="https://www.facebook.com/" className="fa fa-facebook "
                                           title="facebook"></a>
										<a href="https://twitter.com/" className="fa fa-twitter " title="twitter"></a>
										<a href="https://www.linkedin.com/" className="fa fa-linkedin "
                                           title="linkedin"></a>
										<a href="https://www.instagram.com/" className="fa fa-instagram "
                                           title="instagram"></a>
										<a href="https://www.youtube.com/" className="fa fa-youtube-play "
                                           title="youtube"></a>

									</span>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopLineHeader;