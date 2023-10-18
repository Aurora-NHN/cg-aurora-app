import { clsx } from "clsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Colleagues() {
  return (
    <section className="ds s-pb-90 s-pt-85 s-pb-xl-150 s-pt-xl-145">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
              <span>My Colleagues</span>
            </h3>
            <div className="line" />
            <p className="text-center fs-20 mt-4">
              <span>
                What’s Your Sign? Read Your Daily <br />
                Horoscope Today
              </span>
            </p>
            <div className="divider-40 divider-xl-60" />
            <div
              className="owl-carousel owl-loaded owl-drag owl-theme d-flex justify-content-between row"
              data-responsive-lg={3}
              data-responsive-md={2}
              data-responsive-sm={1}
              data-responsive-xs={1}
              data-nav="false"
              data-margin={60}
              data-loop="true"
            >
              <div className="col-md-4 pe-5">
                <div className="vertical-item bg-darkgrey text-center team-layout box-shadow content-padding">
                  <div className="item-media">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/aurora-webapp.appspot.com/o/PInky.png?alt=media"
                      alt="img"
                    />
                    <div className="media-links">
                      <a
                        className="abs-link"
                        title=""
                        href="team-single.html"
                      />
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="mb-0 links-maincolor2">
                      <a href="team-single.html">Đinh Phương Duy Ngọc</a>
                    </h6>
                    <p className="team-position mb-30">Astrologer</p>
                    <p className="social-icons">
                      <a
                        href="https://www.facebook.com/"
                        className="fa fa-facebook"
                        title="facebook"
                      />
                      <a
                        href="https://www.instagram.com/"
                        className="fa fa-instagram"
                        title="instagram"
                      />
                      <a
                        href="https://www.youtube.com/"
                        className="fa fa-youtube-play"
                        title="youtube"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pe-5">
                <div className="vertical-item bg-darkgrey text-center team-layout box-shadow content-padding">
                  <div className="item-media">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/aurora-webapp.appspot.com/o/PInky.png?alt=media"
                      alt="img"
                    />
                    <div className="media-links">
                      <a
                        className="abs-link"
                        title=""
                        href="team-single.html"
                      />
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="mb-0 links-maincolor2">
                      <a href="team-single.html">Hoàng Thị Yến Hồng</a>
                    </h6>
                    <p className="team-position mb-30">Astrologer</p>
                    <p className="social-icons">
                      <a
                        href="https://www.facebook.com/"
                        className="fa fa-facebook"
                        title="facebook"
                      />
                      <a
                        href="https://www.instagram.com/"
                        className="fa fa-instagram"
                        title="instagram"
                      />
                      <a
                        href="https://www.youtube.com/"
                        className="fa fa-youtube-play"
                        title="youtube"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pe-5">
                <div className="vertical-item bg-darkgrey text-center team-layout box-shadow content-padding">
                  <div className="item-media">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/aurora-webapp.appspot.com/o/PInky.png?alt=media"
                      alt="img"
                    />
                    <div className="media-links">
                      <a
                        className="abs-link"
                        title=""
                        href="team-single.html"
                      />
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="mb-0 links-maincolor2">
                      <a href="team-single.html">Mai Thị Quỳnh Như</a>
                    </h6>
                    <p className="team-position mb-30">Astrologer</p>
                    <p className="social-icons">
                      <a
                        href="https://www.facebook.com/"
                        className="fa fa-facebook"
                        title="facebook"
                      />
                      <a
                        href="https://www.instagram.com/"
                        className="fa fa-instagram"
                        title="instagram"
                      />
                      <a
                        href="https://www.youtube.com/"
                        className="fa fa-youtube-play"
                        title="youtube"
                      />
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
}
export default Colleagues;
