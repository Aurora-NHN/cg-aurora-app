import React from "react";
import { Link } from "react-router-dom";
import {ZODIACS} from "~/app/constants";

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

          {
            ZODIACS.map((zodiac,index) => (
                <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                  <div className="vertical-item text-center content-padding corner-box">
                    <Link to={`/zodiac/${zodiac.name}`} onClick={toTop}>
                      <div className="item-content">
                        <div className="icon-styled fs-50">
                          <span className={`color-darkgrey ico ico-icon_${zodiac.name}`}></span>
                        </div>
                        <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                          <span style={{textTransform: "capitalize"}}>{zodiac.name}</span>
                        </h5>
                        <p>{zodiac.date}</p>
                      </div>
                    </Link>
                  </div>
                </div>
            ))
          }


        </div>
      </div>
    </section>
  );
};

export default ZodiacSection;
