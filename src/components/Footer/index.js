import {Link} from "react-router-dom";
import logo from "~/assets/images/logo.png"
function Footer(){

    return (
      <>
        <footer className="page_footer ds ms s-py-90 s-pb-lg-60 s-pt-xl-150 s-pb-xl-120">
          <div className="container">
            <div className="row align-center">
              <div
                className="col-xl-5 col-lg-5 text-center text-lg-left animate animated fadeInUp"
                data-animation="fadeInUp"
              >
                <Link to="/" className="logo">
                  <img src={logo} alt="img" />
                  <span className="logo-text color-darkgrey">AURORA</span>
                </Link>
                <div className="divider-60 divider-lg-0"></div>
              </div>
              <div
                className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left animate animated fadeInUp"
                data-animation="fadeInUp"
              >
                <div className="widget widget_nav_menu">
                  <h3>Services</h3>
                  <ul className="menu">
                    <li className="menu-item">
                      <a href="./shop-left">Shop</a>
                    </li>
                    <li className="menu-item">
                      <a href="./services2">Services</a>
                    </li>
                    <li className="menu-item">
                      <a href="./service-single">Single Service</a>
                    </li>
                  </ul>
                </div>
                <div className="divider-60 divider-lg-0"></div>
              </div>
              <div
                className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left animate animated fadeInUp"
                data-animation="fadeInUp"
              >
                <div className="widget widget_nav_menu">
                  <h3>About Me</h3>
                  <ul className="menu">
                    <li className="menu-item">
                      <a href="./index_blocks">Homeblocks</a>
                    </li>
                    <li className="menu-item">
                      <a href="./about">About</a>
                    </li>
                    <li className="menu-item">
                      <a href="./contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="divider-60 divider-lg-0"></div>
              </div>
              <div
                className="col-xl-3 col-lg-3 align-self-start text-center text-lg-left animate animated fadeInUp"
                data-animation="fadeInUp"
              >
                <div className="widget widget_text">
                  <h3>Contact Info</h3>
                  <p>
                    21K Nguyễn Văn Trỗi, <br />
                    Nhú Nhuận, HCM
                  </p>
                  <p className="social-icons">
                    <a
                      href="https://www.facebook.com/"
                      className="fa fa-facebook"
                      title="facebook"
                    ></a>
                    <a
                      href="https://twitter.com/"
                      className="fa fa-twitter"
                      title="twitter"
                    ></a>
                    <a
                      href="https://www.instagram.com/"
                      className="fa fa-instagram"
                      title="instagram"
                    ></a>
                    <a
                      href="https://www.linkedin.com/"
                      className="fa fa-linkedin"
                      title="linkedin"
                    ></a>
                    <a
                      href="https://www.youtube.com/"
                      className="fa fa-youtube-play"
                      title="youtube"
                    ></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <section className="page_copyright ds ms s-py-25 s-bordertop-container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <p>
                  &copy; Copyright <span className="copyright_year">2023</span>{" "}
                  Aurora.com - All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default Footer