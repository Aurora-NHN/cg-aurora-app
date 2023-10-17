import React, { useEffect, useState } from "react";

function Tarot() {
  return (
    <section className="ds bs features-section s-overlay s-overlay-half-left s-py-90 s-py-xl-100 container-px-xl-30">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-5 text-lg-left left section-special-2">
            <div className="z-index-2">
              <div className="px-2"> 
                <p className="text-white text-md-left fs-20 line-right mb-0">
                  <span>Advantages</span>
                </p>
                <h3 className="special-heading mt-2 fs-60 text-md-left">
                  <span>
                    Benefits of <br />
                    Learning Magic
                  </span>
                </h3>
                <p className=" text-md-left mt-4">
                  <span>
                    They will provide the best free horoscope <br />
                    astrology to you by analysing your sign.
                  </span>
                </p>
                <div className="divider-60 divider-lg-0" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 section-special-3">
            <div className="z-index-2 ds opacity">
              <div>
                <div className="media">
                  <div className="fs-50">
                    <i className="ico ico-moon" />
                  </div>
                  <div className="media-body">
                    <h6 className="mt-1 mb-2 color-main2">
                      Acts as a Financial Planner
                    </h6>
                    <p>
                      The planet in the 1st house of your horoscope and its lord
                      influence the skills and talent in a person.
                    </p>
                  </div>
                </div>
                <div className="divider-40 divider-xl-60" />
                <div className="media">
                  <div className="fs-50">
                    <i className="ico ico-tarot" />
                  </div>
                  <div className="media-body">
                    <h6 className="mt-1 mb-2 color-main2">
                      Makes You Confident and Optimistic
                    </h6>
                    <p>
                      If you hone the skills you are naturally good at and use
                      it to your benefit, you will not just save your time
                    </p>
                  </div>
                </div>
                <div className="divider-40 divider-xl-60" />
                <div className="media">
                  <div className="fs-50">
                    <i className="ico ico-gem" />
                  </div>
                  <div className="media-body">
                    <h6 className="mt-1 mb-2 color-main2">
                      Helps in Decision Making
                    </h6>
                    <p>
                      A person with Ascendant lord Venus will be inclined
                      towards creative, artistic and innovative fields.
                    </p>
                  </div>
                </div>
                <div className="divider-40 divider-xl-60" />
                <div className="media">
                  <div className="fs-50">
                    <i className="ico ico-diamond" />
                  </div>
                  <div className="media-body">
                    <h6 className="mt-1 mb-2 color-main2">
                      Tells if Your Partner Is Rich and Attractive
                    </h6>
                    <p>
                      Horoscope not just informs you about your skills but also
                      tells you a specific career which will benefit you the
                      most.
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
export default Tarot;
