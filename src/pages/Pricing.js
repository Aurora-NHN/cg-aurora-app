import React from "react";

const Pricing = () => {
  return (
    <section className="ds s-pt-90 s-pb-30 s-pt-xl-150 s-pb-xl-90 c-mb-60 c-gutter-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="pricing-plan price-layout-1 bg-darkgrey">
              <div className="icon-styled fs-50">
                <i className="color-darkgrey ico ico-diamond" />
              </div>
              <div className="plan-name">
                <div className="divider-25" />
                <h3 className="mt-0">Starter</h3>
                <div className="plan-description">Starting Business</div>
              </div>
              <div className="plan-features text-center">
                <ul className="list-bordered">
                  <li>Ask One Question</li>
                  <li>Half-Hour Reading</li>
                  <li>Newborn / Child Reading</li>
                  <li>Relationship Reading</li>
                </ul>
              </div>
              <div className="price-wrap">
                <div className="wrapper">
                  <span className="plan-sign">$</span>
                  <span className="plan-price">25</span>
                </div>
                <span className="plan-decimals text-left">
                  Per <br />
                  Month
                </span>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-medium btn-shop">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-plan price-layout-1 cs plan-featured">
              <div className="icon-styled fs-50">
                <i className="text-white ico ico-gem" />
              </div>
              <div className="plan-name">
                <div className="divider-25" />
                <h3 className="mt-0">Pro</h3>
                <div className="plan-description">Starting Business</div>
              </div>
              <div className="plan-features text-center">
                <ul className="list-bordered">
                  <li>Ask One Question</li>
                  <li>Half-Hour Reading</li>
                  <li>Newborn / Child Reading</li>
                  <li>Relationship Reading</li>
                </ul>
              </div>
              <div className="price-wrap">
                <div className="wrapper">
                  <span className="plan-sign">$</span>
                  <span className="plan-price">73</span>
                </div>
                <span className="plan-decimals text-left">
                  Per <br />
                  Month
                </span>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-medium btn-shop">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-plan price-layout-1 bg-darkgrey">
              <div className="icon-styled fs-50">
                <i className="color-darkgrey ico ico-gems" />
              </div>
              <div className="plan-name">
                <div className="divider-25" />
                <h3 className="mt-0">Business</h3>
                <div className="plan-description">Starting Business</div>
              </div>
              <div className="plan-features text-center">
                <ul className="list-bordered">
                  <li>Ask One Question</li>
                  <li>Half-Hour Reading</li>
                  <li>Newborn / Child Reading</li>
                  <li>Relationship Reading</li>
                </ul>
              </div>
              <div className="price-wrap">
                <div className="wrapper">
                  <span className="plan-sign">$</span>
                  <span className="plan-price">109</span>
                </div>
                <span className="plan-decimals text-left">
                  Per <br />
                  Month
                </span>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-medium btn-shop">
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
