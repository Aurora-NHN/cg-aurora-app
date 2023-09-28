import React, {useEffect, useState} from 'react';
import cx from "clsx";
import {Link} from "react-router-dom";

const DynamicHeader = ({topHeaderHeight = 120}) => {
    const [headOfPage, setHeadOfPage] = useState(true)
    const [mobileActive, setMobileActive] = useState(false)

    const getLoaderScrollImage = (event) => {
        const HEAD_PAGE_TO_SPINNER_HEIGHT = topHeaderHeight;
        const scrollToTop = event.target.scrollingElement.scrollTop;
        if (scrollToTop > HEAD_PAGE_TO_SPINNER_HEIGHT) setHeadOfPage(false);
        if (scrollToTop < HEAD_PAGE_TO_SPINNER_HEIGHT) setHeadOfPage(true);
    }

    useEffect(() => {
        window.addEventListener("scroll", getLoaderScrollImage)

        return () => {
            window.removeEventListener("scroll", getLoaderScrollImage)
        }
    }, [])

    const toggleMenu = () => {
        setMobileActive(prevState => !prevState)
    }
    const toTop = () => {
        window.scrollTo({behavior: "smooth", top:0,left:0})
    }

    return (
        <div className={cx("page_header_wrapper ds ms")}>
            <header className={cx(
                "page_header ds ms s-overlay justify-nav-start"
                , {"affix-top": headOfPage}
                , {"affix": !headOfPage}
                , {"mobile-active": mobileActive})
            }>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-9 col-1 order-2 order-xl-1">
                            <div className="nav-wrap">

                                <nav className="top-nav">
                                    <ul className="nav sf-menu">
                                        <li className="active">
                                            <Link to="/">Home</Link>

                                        </li>

                                        <li>
                                            <Link to="/blogs">Blog</Link>
                                        </li>

                                        <li>
                                            <Link to="/shop">Shop</Link>
                                        </li>

                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>

                                        <li>
                                            <Link to="/gallery">Gallery</Link>
                                        </li>

                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>

                                </nav>

                            </div>
                        </div>
                        <div className="col-xl-3 col-9 order-1 order-xl-2 text-xl-right text-left">
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
                        </div>
                    </div>
                </div>
                <span onClick={toggleMenu} className={cx("toggle_menu", {"mobile-active": mobileActive})}><span></span></span>
            </header>
            <div id="toTop" className={cx({"d-inline": !headOfPage})} onClick={toTop}></div>
        </div>
    );
};

export default DynamicHeader;