import React, {useRef, useEffect} from "react";
import {
    googleLogin,
    registerUser,
    selectRegisterError,
    selectRegisterSuccess, setRegisterError,
    setRegisterSuccess,
} from "~/features/loginSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {GoogleLogin} from "@react-oauth/google";

const RegisterModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const successRegister = useSelector(selectRegisterSuccess);
    const errorRegister = useSelector(selectRegisterError);
    const closeModal = useRef();

    const handleRegisterSuccess = () => {
        dispatch(setRegisterSuccess(false));
        toast.success("Register Success !", {
            position: toast.POSITION.TOP_RIGHT,
            type: toast.TYPE.SUCCESS,
        });
        setTimeout(() => {
            closeModal.current.click();
        }, 200);
    };

    const handleRegisterFail = () => {
        toast.error(errorRegister, {
            position: toast.POSITION.TOP_RIGHT,
            type: toast.TYPE.ERROR,
        });
        dispatch(setRegisterError(null));
    };

    const initialValues = {
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phoneNumber: "",
        gender: "Gender",
    };

    const VIETNAMESE_REGEX = /^[a-zA-ZÀ-ỹ\s]*$/;
    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .matches(
                VIETNAMESE_REGEX,
                "Full name doesn't contain numbers or special characters"
            )
            .required("Full name is required"),
        username: Yup.string()
            .required("Username is required")
            .matches(
                /^[a-z0-9_-]{8,20}$/,
                "Username can only use letters,numbers, minimum length is 8 characters"
            ),
        password: Yup.string()
            .required("Password is required")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                "Password must contain at least 8 characters, at least one letter and one number"
            ),
        confirmPassword: Yup.string()
            .required("Confirm New Password is required")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
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

    const onSubmit = (values) => {
        dispatch(registerUser(values));
    };

    useEffect(() => {
        if (successRegister) {
            formik.resetForm();
            handleRegisterSuccess();
        } else if (errorRegister) {
            handleRegisterFail();
        }
    }, [successRegister, errorRegister]);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const handleReset = () => {
        formik.resetForm();
    };

    const handleGGSuccess = (response) => {
        dispatch(googleLogin(response.credential))
    }
    const handleGGError = () => {

    }

    return (
        <div className="modal fade popupRegistr scroll-bar" id="popupRegistr" tabIndex="-1" role="dialog" aria-hidden="true">
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
                                    <h4 className="color-main2 mb-4">Registration</h4>
                                    <form
                                        className="form-registration c-mb-20 c-gutter-20"
                                        onSubmit={formik.handleSubmit}
                                    >
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        className={`form-control ${
                                                            formik.errors.fullName && formik.touched.fullName
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        required
                                                        placeholder="Full Name"
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
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        className={`form-control ${
                                                            formik.errors.username && formik.touched.username
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        placeholder="Username"
                                                        aria-required="true"
                                                        required
                                                        value={formik.values.username}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.username && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.username}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12">
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
                                                    {formik.errors.password && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.password}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        name="confirmPassword"
                                                        className={`form-control ${
                                                            formik.errors.confirmPassword &&
                                                            formik.touched.confirmPassword
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        placeholder="Confirm Password"
                                                        aria-required="true"
                                                        required
                                                        value={formik.values.confirmPassword}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.confirmPassword && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.confirmPassword}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className={`form-control ${
                                                            formik.errors.email && formik.touched.email
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        placeholder="Email"
                                                        required
                                                        aria-required="true"
                                                        value={formik.values.email}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.email && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.email}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        className={`form-control ${
                                                            formik.errors.phoneNumber &&
                                                            formik.touched.phoneNumber
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        placeholder="Phone Number"
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
                                                </div>
                                            </div>
                                            <div className="col-12">
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
                                                        <option value="Gender" disabled hidden>
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
                                            </div>
                                            <div className="col-12 text-center">
                                                <a
                                                    className="registerRedirect "
                                                    data-bs-dismiss="modal"
                                                    data-bs-target="#popupLogin"
                                                    data-bs-toggle="modal"
                                                    type="reset"
                                                    onClick={handleReset}
                                                >
                                                    Already have an account? Login
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="mt-4">
                                                <button
                                                    type="submit"
                                                    className="btn btn-maincolor d-block"
                                                >
                                                    Registration
                                                </button>
                                            </div>
                                            <div className="google-login mt-2">
                                                <GoogleLogin onSuccess={handleGGSuccess}
                                                             onError={handleGGError} theme="filled_black"
                                                             text={"continue_with"} shape={"circle"}
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

export default RegisterModal;
