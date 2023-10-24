import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  selectLoading,
  selectError,
  selectChangePasswordSuccess,
  changePasswordUser,
  setChangePasswordSuccess,
} from "~/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ChangePassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const success = useSelector(selectChangePasswordSuccess);
  const pending = useSelector(selectLoading);
  const error = useSelector(selectError);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object().shape({
      oldPassword: Yup.string().required("Old Password is required"),
      newPassword: Yup.string()
        .required("New Password is required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Password must contain at least 8 characters, at least one letter and one number"
        ),
      confirmNewPassword: Yup.string()
        .required("Confirm New Password is required")
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      dispatch(changePasswordUser(values));
    },
  });

  useEffect(() => {
    if (success) {
      formik.resetForm();
      toast.success("Change Password Success !", {
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.SUCCESS,
      });
      dispatch(setChangePasswordSuccess(false));
      navigate("/");
    } else if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.ERROR,
      });
    }
  }, [pending]);
  return (
    <section className="ds s-py-90 s-py-xl-150">
      <div className="container">
        <div className="row">
          <main className="col-lg-12">
            <form
              className="woocommerce-ResetPassword lost_reset_password"
              onSubmit={formik.handleSubmit}
            >
              <h3>Change Password</h3>

              <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                <input
                  className={`form-control ${
                    formik.errors.oldPassword && formik.touched.oldPassword
                      ? "is-invalid"
                      : ""
                  }`}
                  type="password"
                  name="oldPassword"
                  placeholder="Old Password"
                  value={formik.values.oldPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.oldPassword && (
                  <div className="invalid-feedback">
                    {formik.errors.oldPassword}
                  </div>
                )}
              </p>
              <p>
                <input
                  className={`form-control ${
                    formik.errors.newPassword && formik.touched.newPassword
                      ? "is-invalid"
                      : ""
                  }`}
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.newPassword && (
                  <div className="invalid-feedback">
                    {formik.errors.newPassword}
                  </div>
                )}
              </p>
              <p>
                <input
                  className={`form-control ${
                    formik.errors.confirmNewPassword &&
                    formik.touched.confirmNewPassword
                      ? "is-invalid"
                      : ""
                  }`}
                  type="password"
                  name="confirmNewPassword"
                  placeholder="Confirm New Password"
                  value={formik.values.confirmNewPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.confirmNewPassword && (
                  <div className="invalid-feedback">
                    {formik.errors.confirmNewPassword}
                  </div>
                )}
              </p>

              <p className="woocommerce-form-row form-row">
                <input
                  type="submit"
                  className="woocommerce-Button button"
                  value="Reset password"
                />
              </p>
            </form>
          </main>
        </div>
      </div>
    </section>
  );
}
