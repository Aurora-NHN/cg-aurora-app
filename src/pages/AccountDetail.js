import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editInfo,
  getInfo,
  selectEditInfoSuccess,
  selectError,
  selectGetInfoSuccess,
  selectLoading,
  selectUserInfo,
  setEditInfoSuccess,
  setError,
  setLoading,
} from "~/features/userSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import NavigateForUser from "~/components/commons/NavigateForUser";

export default function AccountDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector(selectUserInfo);
  const getInfoSuccess = useSelector(selectGetInfoSuccess);
  const [userDetail, setUserDetail] = useState({});
  const success = useSelector(selectEditInfoSuccess);
  const pending = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!getInfoSuccess) {
      dispatch(getInfo());
    }
    if (userInfo) {
      setUserDetail(userInfo);
    }
  }, [userInfo]);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full Name is required")
      .matches(
        /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/,
        "Invalid full name"
      ),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^\d{10}$/, "Phone Number must be a 10-digit number"),
    gender: Yup.string()
      .required("Gender is required")
      .notOneOf(["Gender"], "Please select a gender"),
  });

  const formik = useFormik({
    initialValues: userDetail,
    validationSchema: validationSchema,
    onSubmit,
  });

  useEffect(() => {
    formik.setValues(userDetail);
  }, [userDetail]);

  function onSubmit(values) {
    dispatch(editInfo(values));
  }

  useEffect(() => {
    if (success) {
      toast.success("Edit Info Success !", {
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.SUCCESS,
      });
      dispatch(setEditInfoSuccess(false));
      dispatch(getInfo());
      navigate("/account-detail");
    } else if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.ERROR,
      });
      dispatch(setError(null));
      dispatch(setLoading(false));
    }
  }, [pending]);

  return (
    <section className="ds s-py-90 s-py-xl-100 c-gutter-60">
      <div className="container">
        <div className="row">
          <main className="col-lg-12">
            <article>
              {!userDetail.vip ? (
                <header className="entry-header">
                  <h1 className="entry-title">Account details</h1>
                </header>
              ) : (
                <header className="entry-header">
                  <h1 className="entry-title">Account VIP details</h1>
                </header>
              )}
              <div className="entry-content">
                <div className="woocommerce">
                  <NavigateForUser/>
                  <div className="woocommerce-MyAccount-content">
                    {userDetail ? (
                      <form
                        className="woocommerce-EditAccountForm edit-account"
                        onSubmit={formik.handleSubmit}
                      >
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label
                            htmlFor="fullName"
                            className="d-block ms-3 mb-1"
                          >
                            Full name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formik.errors.fullName && formik.touched.fullName
                                ? "is-invalid"
                                : ""
                            }`}
                            name="fullName"
                            id="fullName"
                            placeholder="Full name"
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
                        <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                          <label
                            htmlFor="phoneNumber"
                            className="d-block ms-3 mb-1"
                          >
                            Phone number <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formik.errors.phoneNumber &&
                              formik.touched.phoneNumber
                                ? "is-invalid"
                                : ""
                            }`}
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Phone number"
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
                        <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
                          <label htmlFor="gender" className="d-block ms-3 mb-1">
                            Gender <span className="required">*</span>
                          </label>

                          <div className="form-group">
                            <select
                              name="gender"
                              className={`form-control ${
                                formik.errors.gender && formik.touched.gender
                                  ? "is-invalid"
                                  : ""
                              }`}
                              required
                              aria-required="true"
                              value={formik.values.gender}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            >
                              <option value="Gender" disabled selected hidden>
                                Gender
                              </option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                            {formik.errors.gender && (
                              <div className="invalid-feedback">
                                {formik.errors.gender}
                              </div>
                            )}
                          </div>
                        </p>
                        <div className="clear"></div>

                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="email" className="d-block ms-3 mb-1">
                            Email <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            className={`form-control ${
                              formik.errors.email && formik.touched.email
                                ? "is-invalid"
                                : ""
                            }`}
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.email && (
                            <div className="invalid-feedback">
                              {formik.errors.email}
                            </div>
                          )}
                        </p>

                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"></p>

                        <div className="clear"></div>
                        <p>
                          <input
                            type="submit"
                            className="woocommerce-Button button"
                            name="save_account_details"
                            value="Save changes"
                          />
                        </p>
                      </form>
                    ) : (
                      <p>no data</p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </section>
  );
}
