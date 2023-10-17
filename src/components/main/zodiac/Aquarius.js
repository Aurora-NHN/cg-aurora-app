import React from "react";
import { Link } from "react-router-dom";

const Aquarius = () => {
  const toTop = () => {
    window.scrollTo({ behavior: "smooth", top: 200, left: 0 });
  };
  return (
    <section className="ds s-py-90 s-py-xl-90 c-gutter-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ul className="list-menu">
              <li>
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
              <li className="current-menu-item">
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
                    <i className="color-darkgrey ico ico-icon_aquarius" />
                  </div>
                  <div className="media-body">
                    <h6 className="mb-0 fs-40 color-main2">Aquarius</h6>
                    <p className="fs-20">Jan 20 - Feb 18</p>
                  </div>
                </div>
                <div className="divider-30 divider-xl-50" />

                <h5>Đặc điểm chung của cung Bảo Bình</h5>
                <p>
                  Bảo Bình là người độc đáo, có cá tính độc lập, thích sự tự do,
                  có khuynh hướng chủ nghĩa cá nhân. Lời nói và việc làm của bạn
                  không thể đoán trước, rất hiếu kỳ và có kiến thức phong phú.
                  Mục tiêu của bạn nằm ở việc thể hiện được những kiến thức có
                  ích
                </p>

                <h5>Bảo Bình và cuộc sống</h5>
                <p>
                  Bảo Bình là cung thứ 11 trong số các cung hoàng đạo, là cung
                  thứ ba thuộc nhóm yếu tố Khí (cũng là cung cuối cùng). Trừ Ma
                  Kết ra thì Bảo Bình là cung có vũ trụ quan (quan niệm về không
                  gian và thời gian) mạnh mẽ nhất. Ngoài ra, dưới sự quản chiếu
                  của Sao Thiên Vương, hành tinh luôn chuyển động lệch ra khỏi
                  quỹ đạo, một hành tinh được biết đến với tính bộc phát dữ dội,
                  hơn nữa lại chứa sức mạnh vô cùng to lớn, có thể vượt qua mọi
                  trở lực nên cung Bảo Bình luôn có tư tưởng tiên phong, có thể
                  : dẫn dắt người khác vượt qua mọi hình thái vật lý có sẵn, mở
                  ra những tầm nhìn mới rộng lớn vô hạn. Họ không chỉ có khả
                  năng dung nạp tất cả các quan điểm khác nhau mà trong tư tưởng
                  và hành động, thiên bẩm đã có một trí tuệ và sự tinh thông
                  rộng lớn tựa vũ trụ. Bên cạnh đó, những người thuộc cung này
                  không bao giờ vì những khó khăn và tác động trên đường đi mà
                  bỏ cuộc hoặc chuyển hướng, hơn thế, họ còn tận dụng những khó
                  khăn này để tiếp thêm động lực theo đuổi mục đích đến cùng.
                </p>
                <p>
                  Bảo Bình là người khởi xướng cho chủ nghĩa lý tưởng, vô cùng
                  xem trọng khoa học nhân tạo, lợi dụng luồng không khí tăng lên
                  để cất cánh, khiến người ta phút chốc được ‘ tận hưởng cảm
                  giác vô cùng sảng khoái và kỳ diệu như có một đôi cánh để tự
                  do bay đi khắp nơi vậy. Đồng thời, trò mạo hiểm này được điều
                  khiển hoàn toàn bằng những thao tác của con người, khiến nhiều
                  người chỉ biết nhìn vừa sợ hãi, vừa thèm thuồng mà thôi.
                </p>
                <p>
                  Là một trong những cung thuộc nhóm kiên định, Bảo Bình vừa lý
                  trí lại vừa mơ mộng, đặc biệt không thích ỷ lại vào người
                  khác. Bay lên bằng chính đôi cánh của mình, nỗ lực hết mình để
                  nhìn thấy cả thế giới đều trong tầm mắt, đối với Bảo Bình mà
                  nói, dường như không có niềm hạnh phúc nào có thể sánh với
                  điều này.
                </p>

                <h5>Quan điểm về tình yêu</h5>
                <p>
                  Nếu như có một Bảo Bình yêu bạn thì hãy yên tâm rằng, họ luôn
                  thành thật trong bất cứ khoảnh khắc nào ở bên bạn. Chẳng may
                  tình yêu vì một điều gì đó mà phải chấm dứt, họ vẫn sẽ vẫn ôm
                  mối tình cũ, cho dù không thể quay lại nữa thì tình cảm vẫn
                  sâu nặng như xưa.
                </p>
                <p>
                  Họ lấy điều này để bảo vệ cho quan, điểm tình cảm chân chính
                  là vĩnh hằng”. Hơn nữa, chủ nghĩa hoàn mỹ khiến cho khả năng
                  phát sinh tình cảm của họ thì cao nhưng cơ hội thành công lại
                  nhỏ. Tính thích chiếm hữu cũng là một trong những nhân tố tạo
                  nên cục diện đối đầu căng thẳng trong chuyện tình của họ. Khi
                  Bảo Bình cảm thấy được chấp nhận, được thấu hiểu, họ sẽ vô
                  cùng trân trọng tình cảm đó. Nhưng đồng thời họ cũng là người
                  lấy phấn đấu nỗ lực làm niềm vui, cần một người bạn đời có thể
                  cùng họ đi khám phá thế giới vô cùng vô tận và còn rất “nhiều
                  điều mới mẻ này, mề tâm hồn cùng họ tận hưởng sự tự do và
                  những nỗ lực không ngừng nghỉ. Gặp được người như thế, Bảo
                  Bình sẽ hết lòng hết dạ, tận x tâm tận lực chăm sóc cho họ.
                </p>

                <h5>Sự nghiệp</h5>
                <p>
                  Người thuộc cung Bảo Bình cần một công việc giàu tính sáng tạo
                  hoặc có thể giúp phát triển bản thân, họ sẽ mau chóng cảm thấy
                  chán nản mệt mỏi với những công việc đều đặn và ít biến đổi.
                </p>
                <p>
                  Chỉ cần có cơ hội, người thuộc cung Bảo Bình sẽ nghĩ ra rất
                  nhiều những ý tưởng mới lạ, đem đến cho công việc mà họ được
                  giao phó một diện mạo hoàn toàn mới và độc đáo. Tất nhiên, họ
                  cũng có đầy đủ năng lực để làm tốt các công việc khô khan cứng
                  nhắc nhưng điều này rõ ràng không xứng với tính sáng tạo thiên
                  bẩm của họ. Bảo Bình không thích hợp để làm việc độc lập, họ
                  sẽ vì thái độ nghiêm túc quá mức mà tự gây cho mình áp lực,
                  căng thẳng và trăn trở không yên. Họ thích hợp hơn nếu hợp tác
                  làm việc với người khác hoặc trở thành một bộ phận của đoàn
                  thể, trong môi trường không có áp lực, mới có thể hoàn toàn
                  phát huy được trí nhớ và khả năng sáng tạo tuyệt vời.
                </p>
                <p>
                  Người thuộc cung Bảo Bình thích dùng cách thức mà mình cho là
                  hiệu quả để làm việc, điều này khiến cho người khác nghĩ rằng
                  họ chỉ đang đầu cơ trục lợi. Cá tính độc đáo đi cùng với tư
                  thể luôn sẵn sàng bắt đầu những cải cách, sửa đổi thường khiến
                  họ vấp phải những tranh cãi, dễ trở thành “kẻ phản nghịch”
                  khiến sếp vô cùng đau đầu.
                </p>
                <p>
                  Bởi vì cách nghĩ của Bảo Bình là một quá trình nên thường bị
                  coi là khó hiểu nhưng thực ra họ thường tạo cho người ta cảm
                  giác dễ chịu nhất. Những người thuộc cung Bảo Bình sẽ không
                  muốn làm tổn hại đến người khác, nhưng điều đó không có nghĩa
                  là người khác sẽ không làm tổn hại đến họ. Họ luôn đem đến cho
                  người khác một hình tượng phóng khoáng, khoan dung, cho dù đã
                  từng cãi vã, thậm chí là người đã từng bán đứng họ, họ vẫn có
                  thể tha thứ, dung nạp. Đây có thể coi là đòn “phản kích” cao
                  tay hơn, là bản lĩnh biến thù thành bạn của Bảo Bình.
                </p>

                <h5>Tài chính</h5>
                <p>
                  Bảo Bình thường kiếm ra tiền dựa vào sự thông minh nhạy bén và
                  sáng tạo của mình.
                </p>
                <p>
                  Bảo Bình luôn có cái nhìn rất độc đáo, biến rác thành vàng là
                  sở trường đặc biệt của họ. Đầu óc linh hoạt, động não một chút
                  là đã đầy ắp ý tưởng, ý tưởng càng nhiều càng có khả năng kiếm
                  được nhiều tiền. Do vậy, một người đầy tài năng như họ có thể
                  ung dung ngồi đếm tiền mà sống qua ngày được rồi. Nhưng đôi
                  khi, ham muốn tiền bạc của họ lại không hề mãnh liệt như bạn
                  tưởng tượng, động lực thúc đẩy họ kiếm tiền chỉ là để khẳng
                  định bản thân, hoặc là cầm được tiền lập tức đi tiêu hết sạch.
                  Có vẻ như tiền với họ chỉ là một cái mác, và họ chẳng bao giờ
                  theo đuối cải cảm giảc sung sướng khi có nhiều tiền trong tay.
                  Họ tỏ r rất thất thường trong đầu tư và quản “ tài chính, được
                  mất đan xen. Họ cần phải nỗ lực hơn người khác rất nhiều trên
                  phương diện cầu tài. Những tháng đầu năm là thời kỳ tốt nhất
                  cho Bảo Bình để tiến hành đầu tư, chắc chắn sẽ sớm thu được
                  lợi.
                </p>
                <p>
                  Bảo Bình không những không nghĩ nhiều đến việc kiếm tiền mà
                  còn dùng tiền để làm những phát minh mà người khác cảm thấy vô
                  nghĩa hay quyên góp cho các tổ chức từ thiện. Những người
                  thuộc cung Bảo Bình rất thích hợp đảm nhiệm các công việc liên
                  quan đến quyên tiền, quyên góp. Họ không kỳ vọng bản thân phải
                  kiếm thật nhiều tiền nhưng luôn hy vọng có thể giúp đỡ những
                  người cần được giúp đỡ. Do đó, đối với việc kiếm tiền chi tiêu
                  cho bản thân, họ luôn dựa trên nguyên tắc “ăn no không chết
                  được”, nhưng đối với việc kiếm tiền công ích thì cho dù phải
                  nói đến rách cổ họng hay đi đến gãy cả chân họ cũng cam tâm
                  tình nguyện. Trong vài năm trở lại đây, Vận may tài chính của
                  Bảo Bình không mấy khởi sắc, không lên mà cũng không xuống
                  khao khát to lớn mà họ ấp ủ trong lòng cũng không có cách nào
                  thỏa mãn được, cần có sự tích lũy từng ngày. Thêm vào đó rất
                  nhiều các khoản tiêu vặt, đầu tư không ít cho ăn mặc trang
                  điểm, vậy nên Bảo Bình Ý không gặp phải rủi ro hay biến động
                  đã là một hạnh phúc, đừng tham vọng quá nhiều
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aquarius;
