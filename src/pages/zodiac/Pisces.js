import React from "react";
import { Link } from "react-router-dom";

const Pisces = () => {
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
              <li className="current-menu-item">
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
                    <i className="color-darkgrey ico ico-icon_pisces" />
                  </div>
                  <div className="media-body">
                    <h6 className="mb-0 fs-40 color-main2">Pisces</h6>
                    <p className="fs-20">Feb 19 - Mar 20</p>
                  </div>
                </div>
                <div className="divider-30 divider-xl-50" />

                <h5>Đặc điểm chung của cung Song Ngư</h5>
                <p>
                  Song Ngư cũng là một trong các chòm sao Hoàng Đạo. Chòm sao
                  này còn tối hơn cả chòm sao Ma Kết, khi sáng nhất thì độ sáng
                  biểu kiến của nó cũng chỉ đạt 4m sao.
                </p>
                <p>
                  Vào thời Hy Lạp cổ đại, khi nhà thiên văn học Hipparchus phát
                  hiện ra điểm xuân phân thì nó còn đang nằm giữa chòm sao Song
                  Ngư và chòm sao Bạch Dương. Do vậy, Bạch Dương được chọn làm
                  cung mở đầu cho các cung hoàng đạo. Điểm xuân phân mỗi năm lại
                  di chuyển về phía trước một chút (hiện tượng tiến động). Đến
                  nay điểm xuân phân đã nằm trong chòm sao Song Ngư.
                </p>
                <p>
                  Nhìn trên bản đồ sao, tứ giác sao mùa thu nằm ở phía Nam chòm
                  Song Ngư tạo thành hình một chú cá, hình tứ giác được tạo bởi
                  những ngôi sao tối do sao chòm Phi Mã và sao α chòm Tiên Nữ
                  kéo dài về phía Đông rồi gặp nhau chính là chú cả còn lại (Bắc
                  Ngư). Nằm giữa đôi cá, mang hình chữ với đỉnh là sao α, chính
                  là sợi dây nối hai đuôi cá
                </p>

                <h5>Song Ngư và cuộc sống</h5>
                <p>
                  Biểu tượng của cung Song Ngư là đôi cá bình thản xuôi theo
                  dòng nước trong đại dương bao la, đại diện cho tình bạn sâu
                  sắc cùng năng lực thấu hiểu đời sống vạn vật. Cũng chính bởi
                  con cá có thể bơi lặn trong lòng biển sâu, nên ở nó có sắc
                  thái bí ẩn và huyền hoặc, do vây Song Ngư luôn có tâm niệm
                  rằng “không nên run sợ trước cái chết, bởi cái chết chỉ là sự
                  mở đầu cho một cuộc sống mới mà thôi.”
                </p>
                <p>
                  Các Song Ngư yêu một ai đó chỉ với một lý do, đó là khi người
                  đó bỏ đi đúng như dự đoán, thì họ có thể chìm đắm trong cảm
                  giác đau khổ và bi thương, để rồi lấy dáng vẻ tội nghiệp cùng
                  cực ấy làm cái cớ để tiếp tục cấu kéo một đối tượng khác,
                  người mà Song Ngư tin chắc sẽ lại bỏ rơi mình.
                </p>
                <p>
                  Người thuộc cung Song Ngư là những người hay chìm đắm trong
                  quá khứ, trong ký ức nhiều nhất. Người cung Song Ngư nhạy cảm,
                  nhân ái, hiền lành, rộng lượng, nhẹ nhàng, đa sầu đa cảm, và
                  cũng là những kẻ “đa tình” nhất trong các cung hoàng đạo. Dưới
                  sự bảo hộ của Sao Hải Vương, đời sống của các Cá ngập tràn
                  mộng tưởng, linh tinh, và tình cảm sâu đậm. Họ luôn chìm đắm
                  giữa tâm linh và khát vọng, thu mình trong thế giới mộng ảo
                  của riêng mình.
                </p>
                <p>
                  Có thể nói, Song Ngư là cung bí ẩn, đặc biệt tinh nhanh trong
                  khả năng quan sát, nhạy cảm, thiếu tự tin thiếu quyết đoán đặc
                  biệt là nữ Song Ngư, rất khó kiểm soát, dễ thay đổi. Nhưng
                  Song Ngư dễ cảm thông, biết chia sẻ, là những người bạn thân
                  thiết, tin cậy. Sự nhạy cảm thái quá khiến Song Ngư rất khó có
                  những mối quan hệ thoải mái. Bản tính đa sầu đa cảm, dễ chìm
                  đắm trong sầu muộn, nếu cộng thêm vào khuynh hướng thích lẩn
                  tránh rắc rối thì sẽ càng phức tạp hơn. Vì thiếu lý trí lại
                  thiếu quyết đoán, không biết cách từ chối người khác nên Song
                  Ngư dễ trở thành cái bóng của người khác. Nhưng xét theo một
                  góc độ khác, các Song Ngư dễ đồng cảm, có khả năng chữa lành
                  vết thương lòng cho bạn bè một cách tinh tế trong khi chính
                  bản thân họ thì lại không đủ dũng khí đối mặt với thực tại.
                </p>

                <h5>Quan điểm về tình yêu</h5>
                <p>
                  Trong tình yêu, những chú Cá lãng mạn không những dịu dàng,
                  gần gũi mà còn vô cùng bay bổng.
                </p>
                <p>
                  Họ giống như những nhân vật chính trong những tiểu thuyết tình
                  yêu, cả ngày chẳng cần phải làm gì, chỉ yêu là đủ. Cho nên họ
                  mong muốn nửa kia cũng tràn ngập tình yêu và lãng mạn, như thế
                  mới đủ sức khiến cho mong ước của họ được bộc lộ một cách đầy
                  đủ nhất. Những người khô khan chắc chắn sẽ trở thành kẻ dập
                  tắt ước mơ của Song Ngư, biến cuộc sống của họ trở lên u tối,
                  ảm đạm. Song Ngư theo đuổi tình yêu lãng mạn, nhưng cũng phải
                  nhắc nhở các Cá khi lựa chọn ái tình phải chuẩn bị cả nghị lực
                  để đối diện với hiện thực cuộc sống. Tình yêu nhiều kịch tính
                  luôn đi kèm với những áp lực nặng nề. Nếu tình yêu lãng mạn
                  vấp phải thực tế phũ phàng là mỗi bữa ăn chỉ có một quả trứng,
                  hay bị bố mẹ quản thúc, bị bắt ép đi du học để ngăn cản thì
                  liệu bạn có thể giống như nhân vật chính trong trong phim ảnh,
                  tiểu thuyết, không gục ngã trước khó khăn, kiên quyết bảo vệ
                  tình yêu đến cùng hay không
                </p>

                <h5>Sự nghiệp</h5>
                <p>
                  Người cung Song Ngư có tính cách phức tạp, trí tưởng tượng
                  phong phủ cùng khả năng quan sát vô cùng nhạy bén nhưng đồng
                  thời, họ cũng là những người yếu đuối, thiếu ý chí, hay nghi
                  ngờ, hay ưu tư đến mức dễ trở thành đa sầu đa cảm, tính khí
                  thất thường. Bị chi phối bởi những luồng suy nghĩ trái chiều,
                  có lúc thì đơn giản, có lúc lại rắc rối dễ khiến cho sự nghiệp
                  của họ gặp nhiều trắc trở. Chính sự dễ thích nghi, biết nhường
                  nhịn, tính cách ôn hòa, quan tâm tới người khác đã tạo thành
                  sức hút ở Song Ngư. Họ có đủ khả năng để hoàn thành tốt công
                  việc được giao nhưng dễ bị quay cuồng trong môi trường công
                  việc cạnh tranh khốc liệt. Do bản tính rất dễ tin người nên họ
                  cũng thường xuyên bị lợi dụng. Khi gặp khó khăn, điều mà một
                  Song Ngư nên làm là xem xét kỹ lưỡng mọi đường đi nước bước
                  chứ không phải là sa đà vào những vấn đề vụn vặt. Nếu lúc đó
                  mà bạn không vững vàng, bạn sẽ dễ mất tự tin. Song Ngư có tính
                  tình hòa nhã, nhân ái, nhẹ nhàng, thân thiện khiến cho những
                  người xung quanh họ cũng bị ảnh hưởng mà trở nên hài hòa hơn.
                  Nhưng trong công việc, Song Ngư là những người tích cực, cầu
                  tiến và ưa mạo hiểm. Bị ảnh hưởng bởi hai thái cực tâm lý đối
                  lập nên người cung Song Ngư có khả năng thích nghi cực cao.
                  Khi ở nhà, họ hoàn toàn là những con người của gia đình nhưng
                  khi làm việc, họ lại biến thành những kê đầy mưu mô và liều
                  lĩnh.
                </p>
                <p>
                  Khuyết điểm lớn nhất của người cung Song Ngư trong công việc
                  là cố chấp, không chịu tiếp thu ý kiến của người khác. Vậy
                  nên, cho dù họ có thái độ làm việc rất tốt nhưng sau cùng,
                  thường vì bất đồng ý kiến mà nảy sinh mâu thuẫn với người khác
                  khiến cho bản thân cũng bị ức chế.
                </p>
                <p>
                  Mơ mộng vốn là lẽ sống của Song Ngư nhưng bạn thử nghĩ xem,
                  chỉ dựa vào điều đó thì có sống nổi không? Khi người khác dẫm
                  đạp lên bạn để bước thì bạn cũng cần tỏ thái độ rõ ràng và sẵn
                  sàng đáp trả
                </p>

                <h5>Tài chính</h5>
                <p>
                  Song Ngư ít quan tâm đến tài chính tiền bạc, họ để tâm đến
                  tình cảm, người yêu và mộng tưởng nhiều hơn. Đừng nói chuyện
                  tiền nong với Song Ngư kẻo sẽ bị họ đánh giá là thực dụng. Rất
                  khó để bắt gặp một Song Ngư ra sức làm việc vì tiền. Trừ phi
                  mục đích kiếm tiền được nhìn nhận từ một góc độ khác, ví dụ
                  như kiếm tiền để khẳng định bản thân hay kiếm tiền để cải
                  thiện đời sống cho người thân, bằng không các Song Ngư không
                  bao giờ để tâm đến vấn đề tài chính, đó là triết lý sống của
                  họ. Cũng có cả những Song Ngư coi trọng vấn đề tiền bạc, họ
                  cho rằng có tiền là có thể có tất cả, danh vọng, địa vị… Thực
                  ra lối nghĩ ấy cũng không thực tế chút nào. Đối với các Cá,
                  các vấn đề liên quan đến tiền tài đều dai dẳng và khó giải
                  quyết. Một khi không có tiền cho dù họ cố gắng đến thế nào
                  cũng không có kết quả và chắc chắn sẽ lâm vào khó khăn thiếu
                  thốn. Bản thân buồn rầu khi thấy kẻ khác ăn mặc thời thượng.
                  Thêm vào đó, sự xung khắc giữa Sao Hải Vương và Sao Thổ khiến
                  người cung Song Ngư lúc nào cũng ảo tưởng rằng họ có thể mua
                  được nhà đẹp, xe hơi hay trúng số độc đắc… Họ tình nguyện chìm
                  đắm trong những giấc mơ hoang đường, không muốn đối mặt với
                  hiện thực nghiệt ngã. Nhưng ngay cả khi gặp may mắn kiếm được
                  một ít thì họ cũng nhanh chóng tiêu sạch. Cho nên, có thể làm
                  việc ổn định trong một tập thể hay một công ty lớn là điều rất
                  tốt cho việc tích lũy tài chính của Song Ngư.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pisces;
