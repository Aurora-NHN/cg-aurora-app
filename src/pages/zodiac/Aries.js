import React from "react";
import { Link } from "react-router-dom";

const Aries = () => {
  const toTop = () => {
    window.scrollTo({ behavior: "smooth", top: 200, left: 0 });
  };
  return (
    <section className="ds s-py-90 s-py-xl-90 c-gutter-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ul className="list-menu">
              <li className="current-menu-item">
                <Link to="/zodiac-aries" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_aries" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Aries</h6>
                      <p>Mar 21 - Apr 19</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zodiac-taurus" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_taurus" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Taurus</h6>
                      <p>Apr 20 - May 20</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zodiac-gemini" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_gemini" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Gemini</h6>
                      <p>May 21 - Jun 20</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zodiac-cancer" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_cancer" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Cancer</h6>
                      <p>Jun 21 - Jul 22</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zodiac-leo" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_leo" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Leo</h6>
                      <p>Jul 23 - Aug 22</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zodiac-virgo" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_virgo" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Virgo</h6>
                      <p>Aug 23 - Sep 22</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zodiac-libra" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_libra" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Libra</h6>
                      <p>Sep 23 - Oct 22</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zodiac-scorpio" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_scorpio" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Scorpio</h6>
                      <p>Oct 23 - Nov 21</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zodiac-sagittarius" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_sagittarius" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Sagittarius</h6>
                      <p>Nov 22 - Dec 21</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zodiac-capricorn" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_capricornius" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Capricornius</h6>
                      <p>Dec 22 - Jan 19</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zodiac-aquarius" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_aquarius" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Aquarius</h6>
                      <p>Jan 20 - Feb 18</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zodiac-pisces" onClick={toTop}>
                  <div className="media vertical_box">
                    <div className="icon-styled color-darkgrey fs-40">
                      <i className="color-darkgrey ico ico-icon_pisces" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 fs-20 color-main2">Pisces</h6>
                      <p>Feb 19 - Mar 20</p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-8 ">
            <div className="divider-60 divider-lg-0" />
            <div className="vertical-item content-padding padding-big corner-box text-md-left text-center">
              <div className="item-content">
                <div className="media vertical_box big-media">
                  <div className="icon-styled color-darkgrey fs-200">
                    <i className="color-darkgrey ico ico-icon_aries" />
                  </div>
                  <div className="media-body">
                    <h6 className="mb-0 fs-40 color-main2">Aries</h6>
                    <p className="fs-20">Mar 21 - Apr 19</p>
                  </div>
                </div>
                <div className="divider-30 divider-xl-50" />

                <h5>Đặc điểm chung của cung Bạch Dương</h5>
                <p>
                  Cung Bạch Dương là cung đầu tiên trong 12 cung hoàng đạo. Bạn
                  là người dũng cảm, thẳng thắn, nhanh nhẹn, đầy dã tâm, tràn
                  trề sinh lực và lòng nhiệt tình. Có tham vọng thống trị, nhà
                  lãnh đạo hoặc là người không bao giờ phục tùng kẻ khác.
                </p>

                <h5>Quan điểm về tình yêu</h5>
                <p>
                  Quan niệm về tình yêu của cung Bạch Dương rất đơn giản và
                  thẳng thắn, họ không muốn mập mờ trong chuyện tình cảm. “Có
                  yêu thì bảo là yêu, không yêu thì nói một điều cho xong”. Họ
                  ghét dây dưa lằng nhằng, lèm nhèm không rõ ràng.
                </p>
                <p>
                  Vì vậy, khi ở bên Bạch Dương, bạn có thể dễ dàng nắm bắt được
                  cảm xúc và thái độ của họ. Trong tình yêu, họ thích chủ động
                  theo đuổi đối phương, nhưng lại không có hứng thú với những
                  đối tượng theo đuổi mình. Nếu họ đã quyết tâm sánh bước cùng
                  bạn, thì cho dù cách bộc lộ tình yêu của bạn có thái quá thế
                  nào, họ cũng không cảm thấy thái quá. Thông thường, sau khi
                  kết hôn, những người thuộc cung Bạch Dương khá chung thủy. Họ
                  không có ham muốn ngoại tình và cũng không tò mò muốn trải
                  nghiệm cảm giác này. Sở dĩ như vậy là vì ngoài chuyên tâm kiếm
                  tiền, Bạch Dương chỉ một lòng một dạ nghĩ đến chuyện xây dựng
                  một gia đình hạnh phúc và sung túc.
                </p>

                <h5>Sự nghiệp</h5>
                <p>
                  Những người thuộc cung Bạch Dương rất thông minh, nhạy bén, có
                  khả năng tổ chức và thực hiện cao, đại diện cho trường phải
                  hành động. Họ không phải là những kẻ chỉ biết hứa suông, nhưng
                  khi bắt tay vào làm thì lại khó theo đến cùng. Tuy nhiên, Bạch
                  Dương vẫn luôn là những tài năng hiếm có trong công việc.
                </p>
                <p>
                  Sao Thổ nắm giữ cung sự nghiệp của Bạch Dương. Bạch Dương là
                  những người làm việc rất nghiêm túc. Bất luận đảm đương một
                  hay nhiều trọng trách, họ đều làm hết sức mình Rất nhiều người
                  thuộc cung Bạch Dương nếu không làm ông chủ của một công ty
                  riêng thì cũng là trợ thủ đắc lực cho người khác. Khả năng làm
                  việc cùng những ý tưởng sáng tạo tuyệt vời giúp họ được các
                  nhà lãnh đạo đánh giá cao. Họ thông minh và là những sinh vật
                  tiềm tàng nhiều ý tưởng mới mẻ. Với đặc tính vận động mạnh mẽ
                  của sao bảo hộ Sao Hỏa đã xóa sạch nhược điểm chỉ biết nói,
                  không biết làm trong tính cách của Bạch Dương. Khi bắt gặp
                  những vấn đề lớn, họ không bao giờ vẫy mông đi qua. Nhờ bản
                  tính không sợ hiểm nguy ảnh hưởng từ Sao Hỏa, nên Bạch Dương
                  không quả bảo thú, luôn dũng cảm gánh vác và đối mặt với mọi
                  thử thách. Họ không thích làm những việc nhỏ, mà lúc nào cũng
                  khát khao lập nghiệp lớn.
                </p>

                <h5>Tài chính</h5>
                <p>
                  Không còn nghi ngờ gì nữa, Bạch Dương là những kẻ rất yêu
                  tiền, thậm chí tình yêu tiền bạc của họ chẳng hề thua kém Ma
                  Kết vốn nổi tiếng tham tiền.
                </p>
                <p>
                  Mối bận tâm chính trong cuộc sống của đại đa số Bạch Dương là
                  tiền. Ngoài tiền, không có thứ gì có thể khiến họ phải lao tâm
                  khổ tứ, bôn ba gian khổ đến vậy. Mặc dù vậy, Bạch Dương ít khi
                  là những kẻ chỉ biết bo bo giữ tiền, “vắt cổ chày ra nước”. Vì
                  chịu ảnh hưởng của Sao Hỏa, nên những người thuộc cung này rất
                  năng động hoạt bát. Họ xông pha khắp chốn, bất cứ lúc nào cũng
                  có thể tìm ra cơ hội kiếm tiền. Bất kể chơi cổ phiếu, đầu tư
                  bất động sản hay kinh doanh, tính cách mạo hiểm luôn giúp họ
                  mưu trí hơn người. Bạch Dương tuyệt đối không ngồi co rúm một
                  chỗ để nghĩ này nghĩ nọ. Tiền của trong tay họ luôn vận động
                  không ngừng. Giống như quá trình quang hợp không ngừng sản
                  sinh và đào thải khi O2 và CO2, họ tiêu tiền rồi lại kiếm
                  tiền, kiếm tiền rồi lại tiêu tiền. Bạch Dương biết làm thế nào
                  để “lấy tiền sinh tiền”. Ví dụ, nếu có tiền họ sẽ mua một căn
                  hộ rồi cho thuê. Vậy là, chỉ vài năm sau họ đã có thể thu hồi
                  vốn và để ra được một ít tiền, mười mấy năm sau lại mua thêm
                  được một căn hộ khác.
                </p>
                <p>
                  Cung Bạch Dương không có nhiều tài khoản tiết kiệm trong ngân
                  hàng, thậm chí có thể chưa thanh toán thẻ tín dụng. nhưng họ
                  vẫn rất hào phóng trong việc chi tiêu. Đúng như người ta vẫn
                  thường nói “người biết tiêu tiền khắc biết kiếm tiền”. Vấn đề
                  chính ở đây là số tiền họ kiếm được là ít hay nhiều, hay chỉ
                  đủ để sống qua ngày. Sao Thiên Vương nắm giữ cung tiền tài của
                  Bạch Dương. Vì vậy tài vận của Bạch Dương rất thất thường. Có
                  thể hôm nay họ đang “lên voi”, nhưng ngày mai đã lại “xuống
                  chó”. Với Bạch Dương, tiền như mọc chân chạy lung tung khắp
                  nơi. Cơ hội kiếm tiền của họ cũng không ổn định. Để tránh rơi
                  vào tình trạng không có lấy một xu trong túi, Bạch Dương tốt
                  nhất nên tích lũy một khoản tiền nhất định trước khi muốn làm
                  một việc gì đó.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aries;
