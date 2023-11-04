import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrderDetail,
  setAddressSuccess,
  setOrderAddress,
} from "~/features/orderSlice";
import {
  selectProvince,
  selectDistrist,
  selectWard,
  getDistrict,
  getWard,
} from "~/features/provinceSlice";

export default function OrderCustomerDetail({ provinces }) {
  const VIETNAMESE_REGEX = /^[a-zA-ZÀ-ỹ\s]*$/;
  const dispatch = useDispatch();
  const [currentProvinces, setCurrentProvince] = useState(provinces);
  const districts = useSelector(selectDistrist);
  const [currentDistrict, setCurrentDistricts] = useState([]);
  const wards = useSelector(selectWard);
  const [currentWard, setCurrentWard] = useState([]);
  const [provinceId, setProvinceId] = useState(null);
  const [districtId, setDistrictsId] = useState(null);
  const [check, setCheck] = useState(false);
  const [checkDistrict, setCheckDistrict] = useState(false);

  useEffect(() => {
    setCurrentProvince(provinces);
  }, [provinces]);

  useEffect(() => {
    setCurrentDistricts(districts);
  }, [districts]);

  useEffect(() => {
    setCurrentWard(wards);
  }, [wards]);

  useEffect(() => {
    if (check) {
      dispatch(getDistrict(provinceId));
      setCheck(false);
    }
  }, [provinceId, check]);

  useEffect(() => {
    if (checkDistrict) {
      dispatch(getWard(districtId));
      setCheckDistrict(false);
    }
  }, [districtId, checkDistrict]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      city: "Chọn tỉnh thành…",
      deliveryAddress: "",
      additionalInformation: "",
      district: "Chọn Quận/Huyện",
      ward: "Chọn Xã/Thị Trấn",
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
      district: Yup.string()
        .required("Quận/Huyện không được để trống.")
        .notOneOf(["Chọn Quận/Huyện…"], "Hãy chọn Quận/Huyện"),
      ward: Yup.string()
        .required("Xã/Thị Trấn không được để trống.")
        .notOneOf(["Chọn Xã/Thị Trấn…"], "Hãy chọn Xã/Thị Trấn"),
      deliveryAddress: Yup.string().required("Địa chỉ không được để trống"),
      additionalInformation: Yup.string(),
    }),
    onSubmit: (address) => {
      let token = localStorage.getItem("token");
      let requestData = { address, token };
      dispatch(createOrderDetail(requestData));
      dispatch(setOrderAddress(address));
      dispatch(setAddressSuccess(true));
    },
  });

  const onClickSetSuccess = (e) => {
    dispatch(setAddressSuccess(false));
  };

  function changeProvince(e) {
    // formik.setFieldValue
    let result = null;
    provinces.map((province) => {
      if (province.province_name === e.target.value) {
        result = province.province_id;
      }
    });
    setProvinceId(result);
    setCurrentWard([]);
    setCheck(true);
  }

  function changeDistrict(e) {
    let result = null;
    districts.map((district) => {
      if (district.district_name === e.target.value) {
        result = district.district_id;
      }
    });
    setDistrictsId(result);
    setCheckDistrict(true);
  }

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
                  onChange={(e) => {
                    formik.handleChange(e);
                    changeProvince(e);
                  }}
                  onBlur={formik.handleBlur}
                  onClick={onClickSetSuccess}
                >
                  {currentProvinces === undefined ||
                  currentProvinces.length < 0 ? (
                    <option value="Chọn tỉnh thành…">Chọn tỉnh thành…</option>
                  ) : (
                    <>
                      <option value="Chọn tỉnh thành…">Chọn tỉnh thành…</option>
                      {currentProvinces.map((province) => (
                        <option
                          key={province.province_id}
                          value={province.province_name}
                        >
                          {province.province_name}
                        </option>
                      ))}
                    </>
                  )}
                </select>
                {formik.errors.city && (
                  <div className="invalid-feedback">{formik.errors.city}</div>
                )}
              </p>
              <p
                className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                id="billing_country_field"
                data-priority="40"
              >
                <select
                  name="district"
                  id="district"
                  className={`country_to_state country_select select2-hidden-accessible ${
                    formik.errors.district && formik.touched.district
                      ? "is-invalid"
                      : ""
                  }`}
                  required
                  aria-required="true"
                  value={formik.values.district}
                  onChange={(e) => {
                    formik.handleChange(e);
                    changeDistrict(e);
                  }}
                  onBlur={formik.handleBlur}
                >
                  {currentDistrict.length > 0 ? (
                    <>
                      <option value="Chọn Quận/Huyện…">Chọn Quận/Huyện…</option>
                      {currentDistrict.map((district) => (
                        <option
                          key={district.district_id}
                          value={district.district_name}
                        >
                          {district.district_name}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option value="Chọn Quận/Huyện…">Chọn Quận/Huyện…</option>
                  )}
                </select>
                {formik.errors.district && (
                  <div className="invalid-feedback">
                    {formik.errors.district}
                  </div>
                )}
              </p>
              <p
                className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                id="billing_country_field"
                data-priority="40"
              >
                <select
                  name="ward"
                  id="ward"
                  className={`country_to_state country_select select2-hidden-accessible ${
                    formik.errors.ward && formik.touched.ward
                      ? "is-invalid"
                      : ""
                  }`}
                  required
                  aria-required="true"
                  value={formik.values.ward}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {currentProvinces.length > 0 &&
                  currentDistrict.length > 0 &&
                  currentWard.length > 0 ? (
                    <>
                      <option value="Chọn Xã/Thị Trấn…">
                        Chọn Xã/Thị Trấn…
                      </option>
                      {currentWard.map((ward) => (
                        <option key={ward.ward_id} value={ward.ward_name}>
                          {ward.ward_name}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option value="Chọn Xã/Thị Trấn…">Chọn Xã/Thị Trấn…</option>
                  )}
                </select>
                {formik.errors.ward && (
                  <div className="invalid-feedback">{formik.errors.ward}</div>
                )}
              </p>
              <p
                className="form-row form-row-wide"
                id="billing_company_field"
                data-priority="30"
              >
                <input
                  type="text"
                  name="deliveryAddress"
                  id="deliveryAddress"
                  placeholder="Địa chỉ nhận hàng"
                  className={`input-text ${
                    formik.errors.deliveryAddress &&
                    formik.touched.deliveryAddress
                      ? "is-invalid"
                      : ""
                  }`}
                  required
                  aria-required="true"
                  value={formik.values.deliveryAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.deliveryAddress && (
                  <div className="invalid-feedback">
                    {formik.errors.deliveryAddress}
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
                <label htmlFor="additionalInformation">Order notes</label>
                <textarea
                  type="text"
                  name="additionalInformation"
                  id="additionalInformation"
                  placeholder="Ghi chú về đơn đặt hàng của bạn."
                  rows="2"
                  cols="5"
                  className="input-text"
                  aria-required="true"
                  value={formik.values.additionalInformation}
                  onChange={formik.handleChange}
                ></textarea>
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
