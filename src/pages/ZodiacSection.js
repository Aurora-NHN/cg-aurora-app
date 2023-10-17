import React from "react";
import { Link } from "react-router-dom";

const ZodiacSection = () => {
  const toTop = () => {
    window.scrollTo({ behavior: "smooth", top: 200, left: 0 });
  };
  return (
    <section
      id="forecasts"
      className="ds section-forecast s-overlay s-pt-90 s-pb-30 s-pt-xl-100 s-pb-xl-90 c-gutter-60 c-mb-60"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-0">
            <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
              <span>Choose Your Zodiac Sign</span>
            </h3>
            <div className="line"></div>
            <p className="text-center fs-20 mt-4">
              <span>
                What’s Your Sign? Read Your Daily <br />
                Horoscope Today
              </span>
            </p>

            <div className="divider-40 divider-xl-60"></div>
          </div>

          {/* Aries */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-aries" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_aries"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Aries</a>
                  </h5>
                  <p>Mar 21 - Apr 19</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Taurus */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-taurus" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_taurus"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Taurus</a>
                  </h5>
                  <p>Apr 20 - May 20</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Gemini */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-gemini" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_gemini"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Gemini</a>
                  </h5>
                  <p>May 21 - Jun 20</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Cancer */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-cancer" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_cancer"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Cancer</a>
                  </h5>
                  <p>Jun 21 - Jul 22</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Leo */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-leo" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_leo"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Leo</a>
                  </h5>
                  <p>Jul 23 - Aug 22</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Virgo */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-virgo" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_virgo"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Virgo</a>
                  </h5>
                  <p>Aug 23 - Sep 22</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Libra */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-libra" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_libra"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Libra</a>
                  </h5>
                  <p>Sep 23 - Oct 22</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Scorpio */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-scorpio" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_scorpio"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Scorpio</a>
                  </h5>
                  <p>Oct 23 - Nov 21</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Sagittarius */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-sagittarius" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_sagittarius"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Sagittarius</a>
                  </h5>
                  <p>Nov 22 - Dec 21</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Capricorn */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-capricorn" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_capricornius"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Capricorn</a>
                  </h5>
                  <p>Dec 22 - Jan 19</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Aquarius */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-aquarius" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_aquarius"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Aquarius</a>
                  </h5>
                  <p>Jan 20 - Feb 18</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Pisces */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="vertical-item text-center content-padding corner-box">
              <Link to="/zodiac-pisces" onClick={toTop}>
                <div className="item-content">
                  <div className="icon-styled fs-50">
                    <a className="color-darkgrey ico ico-icon_pisces"></a>
                  </div>
                  <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                    <a>Pisces</a>
                  </h5>
                  <p>Feb 19 - Mar 20</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZodiacSection;
