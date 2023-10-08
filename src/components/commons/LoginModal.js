import React, { useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  loginUser,
  selectAuthIsError,
  selectAuthIsLoading,
  selectLoginSuccess,
} from "~/features/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeModal = useRef();
  const successLogin = useSelector(selectLoginSuccess);
  const loadingLogin = useSelector(selectAuthIsLoading);
  const errorLogin = useSelector(selectAuthIsError);

  function loginSuccess() {    
    toast.success("Login Success !", {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.SUCCESS,
    });
    setTimeout(() => {
      closeModal.current.click();
    }, 200);
  }

  const loginFail = () => {
    toast.error("Login Fail !", {
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
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
      navigate("/");
    },
  });

  useEffect(() => {
    if (!loadingLogin) {
      if (successLogin) {
        formik.resetForm();
        loginSuccess();
      } else if (errorLogin) {
        console.log("fail here")
        console.log(errorLogin)
        loginFail();
      }
    }
  }, [loadingLogin]);

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <div
      class="modal fade popupLogin"
      id="popupLogin"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <ToastContainer closeButton={false} />
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content ds bs box-shadow bordered overflow-visible s-overlay s-mobile-overlay">
          <button
            ref={closeModal}
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={handleReset}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4 className="color-main2 mb-3">Log in</h4>
                  <form
                    className="form-registration c-mb-20 c-gutter-20"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="row mb-4">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            id="username"
                            name="username"
                            className={`form-control ${
                              formik.errors.username && formik.touched.username
                                ? "is-invalid"
                                : ""
                            }`}
                            required
                            placeholder="login"
                            aria-required="true"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.username &&
                            formik.touched.username && (
                              <div className="invalid-feedback">
                                {formik.errors.username}
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            className={`form-control ${
                              formik.errors.password && formik.touched.password
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="password"
                            aria-required="true"
                            required
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.password &&
                            formik.touched.password && (
                              <div className="invalid-feedback">
                                {formik.errors.password}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>

                    <a
                      // class="registerRedirect "
                      // data-bs-dismiss="modal"
                      // data-bs-target="#popupRegistr"
                      // data-bs-toggle="modal"
                      href="http://localhost:3000/forgot-password"
                      onClick={handleReset}
                    >
                      Forgot Password?
                    </a>

                    <button
                      type="submit"
                      className="btn btn-maincolor mt-30 d-block"
                      // onClick={handleReset}
                    >
                      Sign In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
