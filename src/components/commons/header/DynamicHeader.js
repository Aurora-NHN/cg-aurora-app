
import React, { memo, useEffect, useState } from "react";

import cx from "clsx";
import { Link } from "react-router-dom";

const DynamicHeader = ({ topHeaderHeight = 192 }) => {
  const [headOfPage, setHeadOfPage] = useState(true);
  const [mobileActive, setMobileActive] = useState(false);

  const getLoaderScrollImage = (event) => {
    const HEAD_PAGE_TO_SPINNER_HEIGHT = topHeaderHeight;
    const scrollToTop = event.target.scrollingElement.scrollTop;
    if (scrollToTop > HEAD_PAGE_TO_SPINNER_HEIGHT) setHeadOfPage(false);
    if (scrollToTop < HEAD_PAGE_TO_SPINNER_HEIGHT) setHeadOfPage(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", getLoaderScrollImage);

    return () => {
      window.removeEventListener("scroll", getLoaderScrollImage);
    };
  }, []);

  const toggleMenu = () => {
    setMobileActive((prevState) => !prevState);
  };
  const toTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  };

  return (
    <div className="page_header_wrapper ds ms">
      <header
        className={cx(
          "page_header ds ms s-overlay justify-nav-start",
          { "affix-top": headOfPage },
          { affix: !headOfPage },
          { "mobile-active": mobileActive }
        )}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9 col-1 order-2 order-xl-1">
              <div className="nav-wrap">
                <nav className="top-nav">
                  <ul className="nav sf-menu">
                    <li className="active">
                      <Link to="/" onClick={toTop}>
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link to="/blogs" onClick={toTop}>
                        Blog
                      </Link>
                    </li>

                    <li>
                      <Link to="/shop" onClick={toTop}>
                        Shop
                      </Link>
                    </li>

                    <li>
                      <Link to="/zodiac" onClick={toTop}>
                        Zodiac
                      </Link>
                    </li>

                    <li>
                      <Link to="/numerology" onClick={toTop}>
                        Numerology
                      </Link>
                    </li>

                    <li>
                      <Link to="/tarot" onClick={toTop}>
                        Tarot
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <span
          onClick={toggleMenu}
          className={cx("toggle_menu", { "mobile-active": mobileActive })}
        >
          <span></span>
        </span>
      </header>

      <div
        id="toTop"
        className={cx({ "d-inline": !headOfPage })}
        onClick={toTop}
      ></div>
    </div>
  );
};

export default memo(DynamicHeader);
