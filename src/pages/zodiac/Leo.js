import React from "react";
import { Link } from "react-router-dom";

const Leo = () => {
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
              <li className="current-menu-item">
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
                    <i className="color-darkgrey ico ico-icon_leo" />
                  </div>
                  <div className="media-body">
                    <h6 className="mb-0 fs-40 color-main2">Leo</h6>
                    <p className="fs-20">Jul 23 - Aug 22</p>
                  </div>
                </div>
                <div className="divider-30 divider-xl-50" />

                <h5>Đặc điểm chung của cung Sư Tử</h5>
                <p>
                  Cung Sư Tử thể hiện về con cái, tình yêu, sự lãng mạn, nghỉ
                  ngơi, du lịch, ham mê, nghề tay trái. Chòm sao này đại diện
                  cho tính sự nghiệp, vận động, tính độc đáo và sáng tạo, cũng
                  đại diện cho sự dẫn đầu, chính trị, nghệ thuật đơn thuần, xã
                  giao, giáo dục về sinh sản và con cái. Chòm sao Sư Tử thật ra
                  là chòm sao có tâm hồn phát triển sớm nhất nhưng cũng là chòm
                  sao trưởng thành muộn nhất.
                </p>

                <h5>Sư Tử và cuộc sống</h5>
                <p>
                  Những người thuộc cung Sư Tử có phẩm chất quý tộc, bậc đế
                  vương. Đây là cung có quyền uy và năng lực chi phối điều khiển
                  nhất trong 12 cung hoàng đạo.
                </p>
                <p>
                  Bản chất của họ là gia trưởng, độc tài chuyên chế, họ thừa
                  hưởng sức sống của Mặt Trời. Họ sinh ra đã ấp ủ những lý tưởng
                  cao cả, đối với những kẻ yếu họ luôn có lòng từ bi và sự đồng
                  cảm, khi làm việc luôn gắng hết sức, phát huy được sức sống
                  dồi dào vì những người xung quanh, chiến đấu vì kẻ yếu hoặc
                  chính nghĩa. Họ làm việc một cách độc lập, tự tin về bản thân,
                  có sở trường tổ chức công việc, làm việc cẩn thận tỉ mỉ, cũng
                  là người biết cách làm thế nào để vận dụng năng lực và các
                  mánh khóe để đạt được mục đích, có thể phát huy tính sáng tạo
                  đạt được thành quả mang tính xây dựng, tính độc đáo. Tóm lại,
                  họ là người thuộc phái hành động. Những người thuộc cung Sư Tử
                  cũng là người rất biết cách quan tâm đến tâm trạng cảm xúc của
                  mọi người. Thông thường thì những người thuộc cung này có
                  đường tình duyên khá tốt.
                </p>
                <p>
                  Trong từ điển của người thuộc cung Sư Tử không có từ “xuất
                  sắc”, trừ phi để chỉ bản thân họ. Tuyệt đối không nên phê
                  bình, chỉ trích hành vi của họ, vì như thế có thể bị những Sư
                  Tử này cho ăn mắng. Họ làm sao mà sai được? Những khuyết điểm
                  mà bạn nói ra lại chính là những điếm họ cảm thấy tự hào.
                </p>
                <p>
                  Tóm lại, tính cách đặc trưng của những người cung Sư Tử vừ
                  liếc qua đã thấy ngay, họ không có một chút phức tạp và bí
                  mật. Họ là bậc đế vương, là bề trên, trong tập thể thì họ là
                  người lãnh đạo, đồng thời họ cũng biết rõ năng lực điều khiển
                  và lãnh đạo người khác của mình. Họ không chỉ có sở trường
                  lãnh đạo, mà bản thân họ cũng biết tự noi gương, nỗ lực tiến
                  bộ. Khi Mặt Trời đi qua vị trí của Sư Tử, thì những điều này
                  càng rõ rệt. Nhưng cung Sư Tử cũng rất ngạo mạn, tự đánh giá
                  mình quá cao, nịnh hót và ham quyền lực, cậy quyền cậy thế,
                  thích lo chuyện người khác, vì thế lúc nào cũng cần ràng buộc
                  bản thân, nhắc nhở chính mình.
                </p>

                <h5>Quan điểm về tình yêu</h5>
                <p>
                  Một tình yêu sôi nổi mạnh mẽ là tình yêu mà cung Sư Tử tha
                  thiết ước mơ, vì thế nếu như thất tình họ sẽ cảm thấy đau khổ
                  tột độ. Nhưng chẳng bao lâu sau họ sẽ lại bắt đầu tìm kiếm đối
                  tượng mới.
                </p>
                <p>
                  Những người cung Sư Tử đối xử với những người họ thích và
                  không thích hoàn toàn khác nhau. Đối vói những người bạn khác
                  giới bình thường thì họ có thể ăn nói đĩnh đạc và thao thao
                  bất tuyệt cả ngày, nhưng khi đứng trước người mình thích thì
                  miệng lưỡi như líu lại, không thể nói được gì. Một khi đã nhen
                  lên ngọn lửa tình yêu, thì họ sẽ nói thẳng không vòng vo, hơn
                  nữa họ sẽ theo đuổi đối phương một cách rõ ràng. Những công
                  viên ngập hoa hoặc những bãi biên đẹp mê hồn đều là nơi mà họ
                  lựa chọn để hẹn hò. Những người cung Sư Tử tuy có nhiều kinh
                  nghiệm hẹn hò, nhưng họ sẽ không bao giờ cùng lúc gặp gỡ với
                  nhiều người. Tuy rằng chú trọng dáng vẻ điệu bộ, nhưng họ luôn
                  yêu với thái độ chân thành. Họ là những con người thiên về
                  giao tiếp, vẫn hy vọng sẽ dùng con người thật tiếp xúc với đối
                  phương. Tuy nhiên cũng cần đặc biệt chú ý, không nên vì vẻ bên
                  ngoài hấp dẫn của đối phương mà đánh mất đi nhận thức với tình
                  yêu thật sự. Cho dù là với mình hay với đối phương cũng nên
                  giữ cái đầu lạnh.
                </p>

                <h5>Sự nghiệp</h5>
                <p>
                  Những người thuộc cung Sư Tử thông minh ham học, thích dùng
                  kiến thức có được để ứng dụng vào thực tế, là cung học nhanh
                  tiếp thu nhanh, hơn nữa lại vô cùng ham học hỏi. Điểm thông
                  minh nhất của họ chính là việc phát hiện ra ưu điểm nổi trội
                  của bản thân, và có khả năng tập trung sinh lực để khắc phục
                  khó khăn. Chính vì vậy, họ nổi tiếng là chuyên gia, trong mọi
                  lĩnh vực đều có thể dành được những thành công nhất định, nhất
                  định sẽ trở thành con chim đầu đàn. Họ có ý chí quyết tâm
                  chiến thắng mạnh mẽ, sau khi ổn định công việc còn bộc lộ ra
                  tố chất của một lãnh đạo, nhận được sự kính phục từ đồng
                  nghiệp xung quanh. Mỗi năm sau khi vào hạ, vận may của Sư Tử
                  thường giảm đi một chút. Trong công việc thì vấp phải không ít
                  khó khăn, đầy khó khăn ưu phiền, buồn bực, nhưng càng cố vùng
                  vẫy thoát ra thì lại càng bị quấn chặt lại. Đối với những Sư
                  Tử mang trọng trách trên mình, thì khoảng thời gian mùa hạ nên
                  là lúc họ thể hiện mình. Lúc này, họ đặc biệt có ý chí chiến
                  đấu, công việc dù có khó khăn, áp lực và nguy hiểm lớn nhưng
                  chỉ cần vượt qua được, họ sẽ có cơ hội thăng tiến và khen
                  thưởng.
                </p>
                <p>
                  Những người thuộc cung Sư Tử trong sự nghiệp thường bị yêu cầu
                  làm những công việc khó khăn, trở ngại và mang tính đột phá.
                </p>
                <p>
                  Đối mặt với những vấn đề khó khăn trong công việc, nên chọn
                  công việc mới mẻ hay chạy theo đám đông, hay những công việc
                  cũ lỗi thời? Đây là vấn đề mà những người cung Sư Tử luôn gặp
                  phải. Trong cuộc đời của những Sư Tử, họ luôn cần phải đưa ra
                  những quyết định sách lược to lớn. Được coi trọng đương nhiên
                  là chuyện tốt, nhưng sợ rằng điều đó cũng khiến cho họ rơi vào
                  hoàn cảnh khó khăn khác. Tuy nhiên so với việc lựa chọn không
                  thích đáng thì họ càng sợ làm lỡ tiến trình công việc hcm. Lúc
                  này, nếu như sử dụng được khả năng điều khiển và uy phong của
                  bậc đế vương thì họ sẽ có được bước tiến dài, đồng thời nên
                  cẩn thận nếu sử dụng không thích đáng có thể sẽ bị chỉ trích.
                  Những người thuộc cung Sư Tử hay được người khác chú ý, rất dễ
                  kết thân được với những người có khả năng giúp họ. Đường làm
                  quan vì thế cũng ngày rộng mở, nhận được sự tín nhiệm của lãnh
                  đạo và được sắp xếp vào những vị trí quan trọng. Những người
                  bạn xấu sẽ tự khắc bỏ đi, không còn mặt mũi nào để gặp lại họ.
                </p>

                <h5>Tài chính</h5>
                <p>
                  Những người thuộc cung Sư Tử nhận được sự bảo hộ của Mặt Trời,
                  có được sức nóng và sức sống vô hạn, quen tự cho mình là bậc
                  đế vương, thích cả thế giới quay xung mình. Trong thâm tâm họ
                  luôn luôn theo đuổi vinh quang và vẻ vang, luôn luôn tìm kiếm
                  sân khấu của chính mình, cũng không ngừng nghĩ cách lôi kéo sự
                  thu hút quần chúng. 
                </p>
                <p>
                  Những Sư Tử tự tin, tự phụ, nhiệt tình, rộng rãi, có khí thế
                  và dũng cảm hơn người, xứng đáng được tôn là cung thủ lĩnh
                  thông ngự và ham muốn chinh phục nhất trong các cung hoàng
                  đạo.
                </p>
                <p>
                  Những người thuộc cung Sư Tử ghét sự rườm rà, dài dòng, sợ
                  nhất phiền phức, vì thế thay đổi nhanh chóng, tính tức thì
                  mạnh, công cụ đầu tư giàu tính giải trí và tính kịch mới phù
                  hợp với tính cách khí phách hào hùng của họ.
                </p>
                <p>
                  Tự tin và dũng cảm là điểm mạnh lớn nhất của cung Sư Tử trong
                  quản lý đầu tư tài chính, nhưng lại có điểm yếu chí mạng là
                  thích đao to búa lớn và trọng hình thức, không quan trọng nội
                  dung. Làm thế nào để bao đồng mọi mặt, vừa không làm mất thể
                  diện vừa giữ được bên trong là vấn đề mà những Sư Tử cần phải
                  đốt mặt.
                </p>
                <p>
                  Những người thuộc cung Sư Tử thích phô trương, yêu thể diện,
                  coi trọng hưởng thụ cuộc sống là những khách hàng cực kỳ không
                  có lý trí. Lúc tiêu tiền họ chỉ quan tâm xem có phù hợp với
                  địa vị thân phận mình hay không, chứ không hề tính toán giá cả
                  có hợp lý hay không hoặc có đáng hay không. Để thỏa mãn cảm
                  giác và nhu cầu “tôn quý”, những Sư Tử này luôn vung tay quá
                  trán, tiêu tiền như nước, chi cần thỏa mãn được hư vinh chốc
                  lát, cho dù là bỏ ra nghìn vàng cũng không tiếc, vì thế hay để
                  lại ấn tượng tiêu tiền như nước, xa xỉ phung phí.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leo;
