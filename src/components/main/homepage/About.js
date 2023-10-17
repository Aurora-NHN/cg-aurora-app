import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const toTop = () => {
    window.scrollTo({ behavior: "smooth", top: 200, left: 0 });
  };

  return (
    <section className="ds s-pt-90 s-pt-xl-70 c-gutter-50">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aurora-webapp.appspot.com/o/about-img.png?alt=media&token=1bc780f2-1666-4e1f-9f27-73be5ea2ebdd"
              alt="img"
            />
          </div>
          <div className="col-lg-6 text-md-left">
            <div className="divider-60 divider-lg-0 " />
            <p className="text-white text-md-left fs-20 line-right mb-0">
              <span>About Us</span>
            </p>
            <h3 className="special-heading mt-2 fs-60 text-md-left">
              <span>We Are Welcome</span>
            </h3>
            <div className="divider-35" />
            <p>
              We have the World Famous Astrologers on the Best Astrology Website
              in India, practising both Indian Astrology and Western Astrology
              for astrology today.
            </p>
            <p>
              They will provide the best free horoscope astrology to you by
              analysing your birth chart and your astrology sign.
            </p>
            <div className="shortcode-simple-counter counter-layout-2">
              <div className="counter_wrap justify-content-md-start">
                <div className="counter-wrap">
                  <h2
                    className="counter counter-size"
                    data-from={0}
                    data-to={25}
                    data-speed={1000}
                  >
                    25
                  </h2>
                </div>
                <p className="counter-text ">
                  <span className="counter-add">
                    Years Of
                    <br />
                    <span className="color-dark fw-500">Experience</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="divider-30 divider-lg-30" />
            <Link
              to="/pricing"
              className="btn btn-outline-maincolor btn-medium"
              onClick={toTop}
            >
              Book Reading Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
