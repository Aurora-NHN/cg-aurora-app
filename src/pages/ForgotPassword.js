import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  forgotPasswordUser,
  selectLoading,
  selectError,
  selectForgotPasswordSuccess,
  setForgotPasswordSuccess,
} from "~/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const success = useSelector(selectForgotPasswordSuccess);
  const pending = useSelector(selectLoading);
  const error = useSelector(selectError);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email is required"),
    }),
    onSubmit: (values) => {
       dispatch(forgotPasswordUser(values));
      toast.success("Sending Email... !", {
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.DEFAULT,
      });
    },
  });

  useEffect(() => {
    if (success) {
      formik.resetForm();
      toast.success("Send Email Success !", {
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.SUCCESS,
      });
      dispatch(setForgotPasswordSuccess(false));
      navigate("/");
    } else if (error) {
      toast.error("Send Email Fail !", {
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
              <p>
                Lost your password? Please enter your email address. You will
                receive a new password in email.
              </p>

              <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                <label htmlFor="user_login">Email</label>
                <input
                  className={`form-control ${
                    formik.errors.email && formik.touched.email
                      ? "is-invalid"
                      : ""
                  }`}
                  type="email"
                  name="email"
                  id="user_login"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                )}
              </p>

              <div className="clear"></div>

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
};

export default ForgotPassword;
