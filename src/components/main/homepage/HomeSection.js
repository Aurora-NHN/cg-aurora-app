import horoscope from "~/assets/images/horoscope.png"
import {Link} from "react-router-dom";
import clsx from "clsx";

function HomeSection(){

    return (
      <>
        <section
          className={clsx(
            "ds section-home s-py-90 s-pb-lg-80 s-pt-xl-150 s-pb-xl-140"
          )}
        >
          <div className="container">
            <div className="divider-50 divider-xl-65"></div>
            <div className="row align-center">
              <div className="col-lg-6 col-xl-5 order-lg-1 order-2 text-center text-md-left">
                <div className="divider-60 divider-lg-0"></div>
                <h5 className="special-heading bold mb-2 text-white">
                  <span>Numerology</span>
                </h5>
                <p>
                  Giữ gìn nhà cửa luôn ngăn nắp, gọn gàng là điều ai cũng muốn.
                  Tuy nhiên thực tế là nhà cửa sau vài ba hôm sẽ lại bừa bộn, lộn xộn như cũ.
                  Thay vì phải mất công dọn dẹp liên tục, vừa mệt mỏi vừa tốn thời gian,
                  bạn có thể sử dụng các món phụ kiện tiện lợi dưới đây để giải quyết triệt để vấn đề này.
                </p>
                <div className="divider-35 divider-xl-55"></div>
                <div className="line line-left"></div>
                <div className="divider-40 divider-xl-60"></div>
                <h3 className="special-heading fw-500 mb-2 color-main2 big-size">
                  <span>Ultimate Guide</span>
                </h3>
                <h3 className="special-heading fw-500 text-white fs-50">
                  <span>To Numerology</span>
                </h3>
                <div className="divider-35 divider-xl-65"></div>
                <Link to="/about" className="btn btn-maincolor">
                  Let’s Begin
                </Link>
              </div>
              <div className="col-lg-6 col-xl-7 order-lg-2 order-1 text-center text-lg-right">
                <img className="horoscope-image" src={horoscope} alt="img" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default HomeSection