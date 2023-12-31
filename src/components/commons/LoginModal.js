import React, { useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  googleLogin,
  loginUser,
  selectAuthIsError,
  selectLoginSuccess,
  setLoginError,
  setLoginSuccess,
} from "~/features/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setLogoutSuccess, setToken } from "~/features/userSlice";
import {GoogleLogin} from "@react-oauth/google";

const LoginModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeModal = useRef();
  const successLogin = useSelector(selectLoginSuccess);
  const errorLogin = useSelector(selectAuthIsError);

  function loginSuccess() {
    dispatch(setLogoutSuccess(false));
    dispatch(setLoginSuccess(false));
    setTimeout(() => {
      const token = localStorage.getItem("token");
      dispatch(setToken(token));
      closeModal.current.click();
    }, 200);
  }

  const loginFail = () => {
    toast.error(errorLogin, {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.ERROR,
    });
    dispatch(setLoginError(null));
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
    if (successLogin) {
      toast.success("Login Success !", {
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.SUCCESS,
      });
      formik.resetForm();
      loginSuccess();
    } else if (errorLogin !== null) {
      loginFail();
    }
  }, [successLogin, errorLogin]);

  const handleReset = () => {
    formik.resetForm();
  };

  const handleGGSuccess = (response) => {
    dispatch(googleLogin(response.credential))
  }
  const handleGGError = () => {

  }

  return (
    <div
      className="modal fade popupLogin"
      id="popupLogin"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content ds bs box-shadow bordered overflow-visible s-overlay s-mobile-overlay">
          <button
            ref={closeModal}
            type="button"
            className="close btn btn-maincolor rounded-4"
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
                            placeholder="Username"
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
                            placeholder="Password"
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

                    <a href="/forgot-password" onClick={handleReset}>
                      Forgot Password?
                    </a>

                    <a
                      style={{ right: "45px", position: "absolute" }}
                      className="registerRedirect hover-pointer"
                      data-bs-dismiss="modal"
                      data-bs-target="#popupRegistr"
                      data-bs-toggle="modal"
                      onClick={handleReset}
                    >
                      Not a member? Register
                    </a>
                    <div className="d-flex flex-column align-items-center">
                      <div className="mt-4">
                        <button
                            type="submit"
                            className="btn btn-maincolor d-block"
                        >
                          Login
                        </button>
                      </div>
                      <div className="mt-2 google-login">
                        <GoogleLogin onSuccess={handleGGSuccess} shape={"circle"}
                                     onError={handleGGError} theme="filled_black"
                                     text={"continue_with"}
                                     size={"large"}/>
                      </div>
                    </div>
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
