import React from "react";
import { Link } from "react-router-dom";

const Libra = () => {
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
              <li className="current-menu-item" onClick={toTop}>
                <Link to="/zodiac-libra">
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
                    <i className="color-darkgrey ico ico-icon_libra" />
                  </div>
                  <div className="media-body">
                    <h6 className="mb-0 fs-40 color-main2">Libra</h6>
                    <p className="fs-20">Sep 23 - Oct 22</p>
                  </div>
                </div>
                <div className="divider-30 divider-xl-50" />

                <h5>Đặc điểm chung của cung Thiên Bình</h5>
                <p>
                  Cung Thiên Bình thể hiện mối quan hệ qua lại giữa kinh tế,
                  tình yêu, hôn nhân, ly hôn, hợp đồng, pháp luật tố tụng, hiệp
                  nghị… Nó đại diện cho kẻ thù công khai của bạn, thể hiện mối
                  quan hệ hợp tác hoặc đối địch giữa bạn và họ. Chòm sao Thiên
                  Bình nằm ở phía Đông Nam của chòm sao Xử Nữ, cũng là một chòm
                  sao trong hoàng đạo, nhưng nó là một chòm sao khá mờ. Chòm sao
                  có hình cái cân, nhưng cũng không nổi bật, không thu hút được
                  sự chú ý của mọi người
                </p>

                <h5>Thiên Bình và cuộc sống</h5>
                <p>
                  Người thuộc cung Thiên Bình rết dịu dàng, nho nhã, thích cuộc
                  sống vui vẻ, mong muốn có một tình bạn chân thành, một tình
                  yêu trong sáng. Hòa thuận là đặc điểm chính trong tính cách
                  của họ.
                </p>
                <p>
                  Những người thuộc cung Thiên Bình thích đi mua sắm để giết
                  thời gian, coi đó là thú vui. Họ thích ngắm nhìn những quà
                  tặng nhỏ, và mua tặng chúng cho những người bạn tri kỷ của
                  mình. Họ muốn có cơ hội thể hiện phong độ sự phóng khoáng, nho
                  nhã của bản thân, có được sự tán dương của mọi người. Họ khao
                  khát được sống ở một nơi đẹp đẽ, tràn đầy mộng tưởng, nên khi
                  quay lại, đối diện với cuộc sống thực tế đầy mâu thuẫn, khó
                  khăn, họ thấy vô cùng hoảng sợ. Trải qua sự cường bạo sẽ khiến
                  tâm hồn họ bị tổn thương. Chỉ có những người thuộc cung Thiên
                  Bình khi sinh ra đã chịu ảnh hưởng lớn của Sao Hỏa và Sao
                  Thiên Vương mới có thể làm cho khuynh hướng này thay đổi. Cung
                  Thiên Bình luôn luôn tìm kiếm sự ổn định và cân bằng trong nội
                  tâm. Nếu không có sự cân bằng đó, họ sẽ không thể sống một
                  cách thoải mái được.
                </p>

                <h5>Quan điểm về tình yêu</h5>
                <p>
                  Trong từ điển của Thiên Bình không có từ “sai lầm”. Một con sư
                  tử kiêu ngạo còn có thể nhận sai lầm, nhưng người thuộc cung
                  Thiên Bình thì kiên quyết không nhận sai. Cứ coi như bạn tận
                  mắt nhìn thấy và ngay lập tức chỉ ra sai lầm đó, họ vẫn có thể
                  nói với bạn, người sai là bạn, tuyệt đối không phải là anh ấy.
                </p>
                <p>
                  Tính lãng mạn, dịu dàng và vô kỷ luật đều là những thứ mà
                  người thuộc cung Thiên Bình yêu thích.
                </p>
                <p>
                  Đối với những người thuộc cung Thiên Bình mà nói, tình yêu là
                  một cảnh lý tưởng hóa. Nó bao gồm cách bày trí, màu sắc của
                  hoàn cảnh và không khí môi trường xung quanh. Họ không có cách
                  nào bày tỏ hay nói ra điều mình thích hoặc không thích, vì vậy
                  kiên nhẫn để khiến cho họ nói ra những điều suy nghĩ trong
                  lòng là một điều rất quan trọng. Trong cả quá trình, những
                  hành động thô lỗ không được phép xuất hiện, càng lãng mạn càng
                  tốt. Trong một bối cảnh hài hòa, họ sẽ cảm thấy phù hợp và an
                  toàn, còn trong một môi trường hỗn loạn và mất trật tự sẽ
                  khiến cho họ cảm thấy bất an. Họ sẽ lọc bỏ một số hành động
                  thô lỗ, để tránh mọi hành động có thể làm hỗn loạn đến trạng
                  thái ổn định của họ. Đương nhiên, thi thoảng cũng xảy ra việc
                  ngoài ý muốn. Khi phát hiện ra chiếc cân của mình không cân
                  bằng, cơn tức giận của họ sẽ đột nhiên bùng phát.
                </p>

                <h5>Sự nghiệp</h5>
                <p>
                  Những người cung Thiên Bình có thể làm bất cứ công việc nào
                  trừ những công việc có môi trường bẩn thỉu, không khí làm việc
                  không tốt.
                </p>
                <p>
                  Họ là những con người có tố chất nghệ thuật và sức sáng tạo
                  thiên bẩm, đặc biệt là về âm nhạc. Nếu như có thể kiểm soát
                  những thú vui vô tận đó, chắc chắn họ sẽ đạt được thành công
                  trong lĩnh vực này. Trong lĩnh vực y tế và làm từ thiện, họ
                  cũng có tài năng xuất sắc. Những người thuộc cung Thiên Bình
                  có tài năng xuất chúng và kỹ năng giao tiếp giỏi. Chính vì
                  vậy, họ dễ dàng trở thành những người nổi tiếng, nhận được sự
                  yêu mến của đám đông. Cung Thiên Bình không hợp với noi cô
                  độc, lẻ loi.
                </p>
                <p>
                  Những người thuộc cung Thiên Bình là những người sống mãi
                  trong tuổi thơ ấu, bất luận là tuổi cao đến mấy, họ vẫn giữ
                  nét trẻ thơ như thế. Bên cạnh người thuộc cung Thiên Bình lúc
                  nào cũng có những mẩu giấy cắt dán búp bê, xé giấy làm những
                  bông hoa nhỏ, những đồ chơi xinh xắn. Nhưng không phải vì thế
                  mà họ không có cách nào sống trong thế giới của những con
                  người trưởng thành.
                </p>

                <h5>Tài chính</h5>
                <p>
                  Về quản lý tài chính, họ cũng hợp với việc hợp tác với người
                  khác hơn là làm việc một mình. Nếu muốn kinh doanh, phần lớn
                  họ sẽ chọn hợp tác hơn là tự mình gánh vác về tài chính. Mặc
                  dù, về phương diện công việc, họ sẽ dốc hết sức, có tinh thần
                  ẬẬ trách nhiệm cao, những người hợp tác vẫn phải lưu ý đến
                  thói quen lãng phí tiền bạc của họ. Khi mua những đồ đạc có
                  giá trị, những người cung Thiên Bình cần phải đề phòng kẻo bị
                  lừa. Nếu quá quan tâm đến lợi ích của người khác, họ có thể sẽ
                  làm tổn hại đến lợi ích của mình. Nên tránh những việc mạo
                  hiểm không cần thiết trong kinh doanh và những việc riêng
                  khác. Đề phòng do bị đố kỵ mà gặp phải tổn thất lớn. Khi ký
                  kết những văn kiện quan trọng, phải đặc biệt chú ý, nếu không
                  sẽ ảnh hưởng đến tài chính của bản thân mình
                </p>
                <p>
                  Những người thuộc cung Thiên Bình thường xuyên tiêu tốn rất
                  nhiều tiền vào những đồ có mẫu mã đẹp, người ta thường gọi
                  Thiên Bình là nhóm “chết vì cái đẹp”. Các bạn Thiên Bình nên
                  hạn chế chi tiêu, đừng quá phấn khích với những thứ đẹp mà
                  không cần thiết lắm nhé. Nếu không cuối tháng bạn sẽ lâm vào
                  tình trạng “viêm màng túi” đây.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Libra;
