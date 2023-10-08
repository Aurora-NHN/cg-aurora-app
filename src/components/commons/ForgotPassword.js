import React, { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  forgotPasswordUser,
  selectLoading,
  selectError,
  selectForgotPasswordSuccess,
} from "~/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const success = useSelector(selectForgotPasswordSuccess);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  function handleSuccess() {
    toast.success("Send Email Success !", {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.SUCCESS,
    });
  }

  const handleFail = () => {
    toast.error("Send Email Fail !", {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.ERROR,
    });
  };

  const loginLoading = () => {
    toast.error("Loading Notification !", {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.INFO,
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email is required"),
    }),
    onSubmit: (values) => {
      dispatch(forgotPasswordUser(values));
    //   navigate("/");
    },
  });

  useEffect(() => {
    if (!loading) {
      if (success) {
        formik.resetForm();
        handleSuccess();
        navigate("/");
      } else if (error) {
        handleFail();
      }
    }
  }, [loading]);

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <section class="ds s-py-90 s-py-xl-150">
      <div class="container">
        <div class="row">
          <main class="col-lg-12">
            <form
              class="woocommerce-ResetPassword lost_reset_password"
              onSubmit={formik.handleSubmit}
            >
              <p>
                Lost your password? Please enter your email address. You will
                receive a new password in email.
              </p>

              <p class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                <label for="user_login">Email</label>
                <input
                  class="woocommerce-Input woocommerce-Input--text input-text"
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

              <div class="clear"></div>

              <p class="woocommerce-form-row form-row">
                <input
                  type="submit"
                  class="woocommerce-Button button"
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
