import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setOrderAddress, setAddressSuccess } from "~/features/OrderSlice";
import { createOrderDetail } from "~/features/OrderSlice";

export default function OrderCustomerDetail() {
  const dispatch = useDispatch();
  const VIETNAMESE_REGEX = /^[a-zA-ZÀ-ỹ\s]*$/;
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      city: "Chọn tỉnh thành…",
      expectedDelivery: "",
      order_comments: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .matches(
          VIETNAMESE_REGEX,
          "Tên người nhận không được chứa số và kí tự đặc biệt."
        )
        .required("Tên người nhận không được để trống"),
      phoneNumber: Yup.string()
        .required("Số điện thoại không được để trống")
        .matches(/^\d{10}$/, "Số điện thoại phải chứa 10 kí tự số."),
      city: Yup.string()
        .required("Thành phố không được để trống.")
        .notOneOf(["Chọn tỉnh thành…"], "Hãy chọn tỉnh thành"),
      expectedDelivery: Yup.string().required("Địa chỉ không được để trống"),
      order_comments: Yup.string(),
    }),
    onSubmit: (address) => {
      let token = localStorage.getItem("token");
      let requestData = { address, token };
      dispatch(createOrderDetail(requestData));
      dispatch(setOrderAddress(address));
      dispatch(setAddressSuccess(true));
    },
  });

  const onClickSetSuccess = () => {
    dispatch(setAddressSuccess(false));
  };

  return (
    <div
      className="col2-set checkout woocommerce-checkout"
      id="customer_details"
    >
      <form
        className="checkout woocommerce-checkout"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-10">
          <div className="woocommerce-billing-fields">
            <h3>Địa chỉ giao hàng</h3>

            <div className="woocommerce-billing-fields__field-wrapper">
              <p
                className="form-row form-row-wide"
                id="billing_company_field"
                data-priority="30"
              >
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Tên người nhận"
                  className={`input-text ${
                    formik.errors.fullName && formik.touched.fullName
                      ? "is-invalid"
                      : ""
                  }`}
                  required
                  aria-required="true"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.fullName && (
                  <div className="invalid-feedback">
                    {formik.errors.fullName}
                  </div>
                )}
              </p>
              <p
                className="form-row form-row-wide"
                id="billing_company_field"
                data-priority="30"
              >
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Số điện thoại"
                  className={`input-text ${
                    formik.errors.phoneNumber && formik.touched.phoneNumber
                      ? "is-invalid"
                      : ""
                  }`}
                  required
                  aria-required="true"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phoneNumber && (
                  <div className="invalid-feedback">
                    {formik.errors.phoneNumber}
                  </div>
                )}
              </p>
              <p
                className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                id="billing_country_field"
                data-priority="40"
              >
                <select
                  name="city"
                  id="city"
                  className={`country_to_state country_select select2-hidden-accessible ${
                    formik.errors.city && formik.touched.city
                      ? "is-invalid"
                      : ""
                  }`}
                  required
                  aria-required="true"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onClick={onClickSetSuccess}
                >
                  <option value="Chọn tỉnh thành…">Chọn tỉnh thành…</option>
                  <option value="An Giang">An Giang</option>
                  <option value="Bắc Giang">Bắc Giang</option>
                  <option value="Bắc Kạn">Bắc Kạn</option>
                  <option value="Bạc Liêu">Bạc Liêu</option>
                  <option value="Bắc Ninh">Bắc Ninh</option>
                  <option value="Bến Tre">Bến Tre</option>
                  <option value="Bình Định">Bình Định</option>
                  <option value="Bình Dương">Bình Dương</option>
                  <option value="Bình Phước">Bình Phước</option>
                  <option value="Bình Thuận">Bình Thuận</option>
                  <option value="Cà Mau">Cà Mau</option>
                  <option value="Cao Bằng">Cao Bằng</option>
                  <option value="Đắk Lắk">Đắk Lắk</option>
                  <option value="Đắk Nông">Đắk Nông</option>
                  <option value="Điện Biên">Điện Biên</option>
                  <option value="Đồng Nai">Đồng Nai</option>
                  <option value="Đồng Tháp">Đồng Tháp</option>
                  <option value="Gia Lai">Gia Lai</option>
                  <option value="Hà Giang">Hà Giang</option>
                  <option value="Hà Nam">Hà Nam</option>
                  <option value="Hà Tĩnh">Hà Tĩnh</option>
                  <option value="Hải Dương">Hải Dương</option>
                  <option value="Hậu Giang">Hậu Giang</option>
                  <option value="Hòa Bình">Hòa Bình</option>
                  <option value="Hưng Yên">Hưng Yên</option>
                  <option value="Khánh Hòa">Khánh Hòa</option>
                  <option value="Kiên Giang">Kiên Giang</option>
                  <option value="Kon Tum">Kon Tum</option>
                  <option value="Lai Châu">Lai Châu</option>
                  <option value="Lâm Đồng">Lâm Đồng</option>
                  <option value="Lạng Sơn">Lạng Sơn</option>
                  <option value="Lào Cai">Lào Cai</option>
                  <option value="Long An">Long An</option>
                  <option value="Nam Định">Nam Định</option>
                  <option value="Nghệ An">Nghệ An</option>
                  <option value="Ninh Bình">Ninh Bình</option>
                  <option value="Ninh Thuận">Ninh Thuận</option>
                  <option value="Phú Thọ">Phú Thọ</option>
                  <option value="Quảng Bình">Quảng Bình</option>
                  <option value="Quảng Nam">Quảng Nam</option>
                  <option value="Quảng Ngãi">Quảng Ngãi</option>
                  <option value="Quảng Ninh">Quảng Ninh</option>
                  <option value="Quảng Trị">Quảng Trị</option>
                  <option value="Sóc Trăng">Sóc Trăng</option>
                  <option value="Sơn La">Sơn La</option>
                  <option value="Tây Ninh">Tây Ninh</option>
                  <option value="Thái Bình">Thái Bình</option>
                  <option value="Thái Nguyên">Thái Nguyên</option>
                  <option value="Thanh Hóa">Thanh Hóa</option>
                  <option value="Thừa Thiên-Huế">Thừa Thiên-Huế</option>
                  <option value="Tiền Giang">Tiền Giang</option>
                  <option value="Trà Vinh">Trà Vinh</option>
                  <option value="Tuyên Quang">Tuyên Quang</option>
                  <option value="Vĩnh Long">Vĩnh Long</option>
                  <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                  <option value="Yên Bái">Yên Bái</option>
                  <option value="Phú Yên">Phú Yên</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Hải Phòng">Hải Phòng</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                </select>
                {formik.errors.city && (
                  <div className="invalid-feedback">{formik.errors.city}</div>
                )}
              </p>
              <p
                className="form-row form-row-wide"
                id="billing_company_field"
                data-priority="30"
              >
                <input
                  type="text"
                  name="expectedDelivery"
                  id="expectedDelivery"
                  placeholder="Địa chỉ nhận hàng"
                  className={`input-text ${
                    formik.errors.expectedDelivery &&
                    formik.touched.expectedDelivery
                      ? "is-invalid"
                      : ""
                  }`}
                  required
                  aria-required="true"
                  value={formik.values.expectedDelivery}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.expectedDelivery && (
                  <div className="invalid-feedback">
                    {formik.errors.expectedDelivery}
                  </div>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="col-8">
          <div className="woocommerce-shipping-fields"></div>
          <div
            className="woocommerce-additional-fields"
            style={{ padding: "30px", marginLeft: "-30px" }}
          >
            <h3
              style={{
                paddingRight: "30px",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              Ghi chú
            </h3>
            <div className="woocommerce-additional-fields__field-wrapper">
              <p
                className="form-row notes"
                id="order_comments_field"
                data-priority=""
              >
                <label htmlFor="order_comments">Order notes</label>
                <textarea
                  name="order_comments"
                  className="input-text"
                  id="order_comments"
                  placeholder="Ghi chú về đơn đặt hàng của bạn."
                  rows="2"
                  cols="5"
                ></textarea>
                {formik.errors.order_comments && (
                  <div className="invalid-feedback">
                    {formik.errors.order_comments}
                  </div>
                )}
              </p>
            </div>
            <input
              type="submit"
              className="button alt mt-3"
              name="woocommerce_checkout_place_order"
              id="place_order"
              value="Xác nhận địa chỉ giao"
              data-value="Place order"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
