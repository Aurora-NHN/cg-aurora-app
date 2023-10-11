import React from "react";
import { Link } from "react-router-dom";

const Capricorn = () => {
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
              <li className="current-menu-item">
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
                    <i className="color-darkgrey ico ico-icon_capricornius" />
                  </div>
                  <div className="media-body">
                    <h6 className="mb-0 fs-40 color-main2">Capricorn</h6>
                    <p className="fs-20">Dec 22 - Jan 19</p>
                  </div>
                </div>
                <div className="divider-30 divider-xl-50" />

                <h5>Đặc điểm chung của cung Ma Kết</h5>
                <p>
                  Ma Kết là một chòm sao tương đối âm thầm, hai ngôi sao sáng
                  nhất trong chòm Ma Kết cũng chỉ rộng 3m. Từ phía chòm sao Ngưu
                  Lang và Chức Nữ kéo dài hơn một bộ về phía Nam, sẽ có thể thấy
                  được Sao β sáng nhất trong chòm sao Ma Kết.
                </p>
                <p>
                  Những người thuộc chòm sao số 10 thường thiên về hướng lãnh
                  đạo. Trong quan hệ với xã hội, họ thường là những người nắm
                  quyền lực. Đối với nhân tình thế thái trên đời, Ma Kết đều
                  dửng dưng. Nhưng tất nhiên, tiền bạc và quyền lực nằm ngoài số
                  đó.
                </p>

                <h5>Ma Kết và cuộc sống</h5>
                <p>
                  Người thuộc cung Bảo Bình thường có nhân sinh quan khoáng đạt,
                  vui vẻ, còn người thuộc cung Ma Kết lại khó tiếp nhận mọi thứ
                  xung quanh. Nếu có một việc xảy ra quá dễ dàng, thuận lợi, Ma
                  Kết sẽ lập tức nghi ngờ.
                </p>
                <p>
                  Vì chịu ảnh hưởng của Sao Thổ, họ rất có tinh thần trách nhiệm
                  và xu hướng tính cách hướng tới sự rõ ràng minh bạch. Điều này
                  trái ngược với tính cách thích phá vỡ mọi giới hạn do chịu ảnh
                  hưởng của Sao Mộc của cung Nhân Mã, vì vậy người thuộc cung Ma
                  Kết thường bị gán cho tội danh bảo thú. Họ sẽ nhìn nhận cuộc
                  sống dưới góc nhìn của riêng họ, vì vậy đôi khi thiếu đi động
                  lực sửa đổi. Tuy nhiên, tính cách kiên nhẫn sẽ giúp họ bù lấp
                  tất cả mọi nhược điểm, và dường như không gì thể cản trở họ
                  vươn lên đỉnh cao nhất. Ma Kết không bao giờ suy nghĩ đến việc
                  phải mất bao lâu mới có thể thành công, họ tin tưởng vào sự
                  nhẫn nại, tin rằng nếu ta chăm chỉ cần cù, tỉ mỉ, nỗ lực trong
                  công việc, nhất định sẽ đem lại thành quả tốt đẹp.
                </p>
                <p>
                  Chiêm tinh học cho thấy, cung Ma Kết là cung hoàng đạo khó
                  phân loại tính cách nhất, vì kỳ thực màu sắc tính cách của họ
                  quá đa dạng.
                </p>
                <p>
                  Cung Ma Kết thường dùng trí lực của mình để chi phối hành động
                  của người khác. Đối với họ, công việc luôn thắng tình cảm. Họ
                  hi vọng cuộc sống của mình có sự đảm bảo về vật chất, chỉ có
                  như vậy họ mới có thể yên tâm. Họ luôn lo sợ được mất, tâm
                  niệm này ám ảnh họ kể cả trong điều kiện vật chất sung túc
                  nhất. Khi ảnh hưởng của Sao Thổ trên bản đồ hoàng đạo lớn
                  mạnh, hoặc vị trí của Sao Thổ có sự tương thích với Sao Kim
                  hoặc Mặt Trăng, Ma Kết cũng sẽ chịu ảnh hưởng, tuyệt đối không
                  thể tránh được. Họ thường giải quyết mọi việc bằng trí lực và
                  dũng khí to lớn của mình, luôn sẵn sàng chịu trách nhiệm. Họ
                  cũng rất hiểu bản thân mình, nhưng không thể thoát ra khỏi
                  vòng tròn cá nhân. Họ đủ ở người khác sự tin tưởng và thông
                  cảm.
                </p>

                <h5>Quan điểm về tình yêu</h5>
                <p>
                  Điều Ma Kết cần trong tình yêu chính là sự nhẫn nại và cống
                  hiến. Khi mối quan hệ mới bắt đầu, họ hay xấu hổ, vì thế có
                  chút vụng về. Khi tình cảm sâu đậm hơn, biểu hiện của họ cũng
                  sẽ tốt hơn. Nhìn chung, sau khi thiết lập mối quan hệ, trong
                  suy nghĩ của Ma Kết sẽ hình thành trách nhiệm đối với người
                  yêu, vì vậy chia tay với họ là điều rất khó. Một khi đã chia
                  tay, Ma Kết sẽ mang đầy oán trách trong lòng. Điều này trái
                  ngược với Bọ Cạp. Bọ Cạp khi bị đối phương nói lời chia tay,
                  họ sẽ coi như đó là một sự đả kích đối với tự tôn cá nhân.
                </p>
                <p>
                  Còn Ma Kết vốn không xem nỗi đau đó là nỗi đau cả nhân, họ sẽ
                  có cảm nhận giống như cả thế giới đã bị lỗi nhịp, vì sự chia
                  ly ý này không hề nằm trong kế hoạch hoàn hảo của họ. Vì vậy
                  họ dễ dàng trở nên cố chấp, không chấp nhận sự thật. Đây cũng
                  là điều mà các Ma Kết nên lưu ý
                </p>

                <h5>Sự nghiệp</h5>
                <p>
                  Dưới sức ảnh hưởng của Sao Thổ, những người thuộc cung Ma Kết
                  có tính Cách ổn định, chắc chắn trong công việc, được người
                  khác tin cậy, suy nghĩ mọi việc thấu đáo, và vô cùng kiên
                  nhẫn.
                </p>
                <p>
                  Họ dốc toàn lực trong mọi việc, không phải để thể hiện mình
                  hay tỏ ra mình là người dẫn đầu. Ưu điểm của họ là cẩn thận và
                  coi trọng kỷ luật. Họ biết động viên bản thân mình, không ngại
                  khó khăn, luôn hướng tới lý tưởng, bề ngoài của họ lại khá
                  lạnh lùng, không hay gây rối loạn, thế nên họ dễ dàng chiếm ưu
                  thế trong khi những người khác gặp khó khăn. Phía sau bề ngoài
                  thờ ơ lạnh nhạt đó, Ma Kết là những người có tinh thần nhiệt
                  huyết, có khát vọng mãnh liệt, đôi khi sẵn sàng vì theo đuổi
                  quyền lực mà hy sinh tình cảm. Nhưng cũng vì không có đủ tự
                  tin, họ thường tự đặt áp lực lên bản thân và làm ảnh hưởng đến
                  cái nhìn của mọi người về họ.
                </p>
                <p>
                  Ma Kết nghiêm khắc và yêu cầu cao ’ bản thân, thế nhưng họ lại
                  thiếu đi sự mạnh dạn, khả năng ứng biến, cũng không chú trọng
                  ngoại giao. Họ có nội tâm khép kín, cả về tư tưởng và hành
                  động đều khó có thể được giải phóng.
                </p>
                <p>
                  Ma Kết có tinh thần trách nhiệm cao, ham học hỏi, rất có duyên
                  với nghệ thuật. Thế nhưng họ lại khá bảo thủ, thường không
                  tiếp nhận ý kiến của người khác. Cộng thêm với vẻ ngoài thờ ơ,
                  không ưa nói cười, sau một thời gian có thể sẽ ảnh hướng đến
                  mối quan hệ.
                </p>
                <p>
                  Ma Kết phù hợp nhất với các ngành nghệ thuật hoặc các công
                  việc hoạt động độc lập nhất. Với công việc có thể giảm thiểu
                  tiếp xúc với người khác, Ma Kết có thể tạo cho mình sự tự tin.
                </p>

                <h5>Tài chính</h5>
                <p>
                  Nếu như bạn thấy một Ma Kết hát vang rằng: “Tôi chỉ cần có
                  bạn!”, thì chắc chắn, “bạn” ở đây chính là tiền. Họ tán đồng
                  với câu nói: “Tiền không mua được tất cả, nhưng không có tiền
                  thì không mua được gì”. Họ say mê kiếm tiền. Trong từ điển của
                  Ma Kết, có tiền đồng nghĩa với thành công.
                </p>
                <p>
                  Tình yêu đối với tiền tài của họ xuất phát từ chính những lúc
                  không có tiền. Họ hiểu được vị trí của đồng tiền trong xã hội.
                  Thực tế, trong số 12 cung hoàng đạo, Ma Kết không phải là cung
                  có đường tài vận đẹp nhất. Những đồng tiền họ kiếm ra đều là
                  do họ tự để công sức vào, tuyệt đối không có, Ma Kết nào sống
                  ung dung hoàn toàn dựa trên đồng tiền của người khác. Tiền tài
                  của họ có được từ sự nỗ lực. Mặc dù người khác thường thấy vận
                  khí của họ tốt đẹp, nhưng đó đều là kết quả của nhiều ngày
                  tháng cố gắng. Chúng ta nên có cái nhìn chân thực về tài vận
                  của Ma Kết.
                </p>
                <p>
                  Ấn tượng của mọi người về những Ma Kết khi còn trẻ đa số là
                  cần cù, vất vả cố gắng. Tài vận tốt cũng có thể là do làm
                  nhiều được nhiều, hoặc là do họ chăm chỉ gấp nhiều lần người
                  khác. Cũng có một số Ma Kết thực sự cần cảm giác an toàn về
                  vật chất, nên đã chịu khó đầu tư công sức, cộng với trí thông
                  minh và nghị lực sẵn có để kiếm tiền. Ngoài ra cũng có một số
                  Ma Kết thiếu đi cái duyên với tiền bạc, không sẵn sàng đầu tư,
                  bởi vậy đã hạn chế đi rất nhiều đường tài lộc của hộ. Ma Kết
                  thường đặt ra những yêu cầu cao, sẵn sàng bỏ chỗ làm hiện thời
                  để đến với những vạch mức mới, mà đôi khi không cân nhắc xem
                  mình thực sự có phù hợp hay không. Họ luôn giữ vững quan điểm.
                  Điều này cản trở khá nhiều đến việc làm của họ.
                </p>
                <p>
                  Sự thờ ơ của Ma Kết đối với các thú vui trên đời còn hơn cả
                  Kim Ngưu. Họ hoàn toàn có thể không cần tình yêu. Sự lý trí
                  của họ có thể đạt đến mức ”chuẩn mực tinh thần” của cung Xử
                  Nữ, và điều khó hiểu hơn cả là, rất khó để họ say mê bất kì
                  điều gì. Ma Kết là những người lạnh lùng, những người bên cạnh
                  họ, kể cả người thân, đều không muốn soi mói tâm tư của họ\
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capricorn;
