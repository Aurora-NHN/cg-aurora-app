import React, {useEffect, useLayoutEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addNumerologyReport, selectReportSuccess, setCustomerInputFormSuccess} from "~/features/numerologySlice";
import {
    selectToken,
    selectCountOfUser,
    getCountForUser,
    selectGetCountSuccess,
    setGetCountSuccess
} from "~/features/userSlice";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {confirmDialog} from "primereact/confirmdialog";

function NumerologyInputForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [availableDays, setAvailableDays] = useState([]);
    const success = useSelector(selectReportSuccess);
    const token = useSelector(selectToken);
    const [loggedIn, setLoggedIn] = useState(false);
    const count = useSelector(selectCountOfUser);
    const getCountSuccess = useSelector(selectGetCountSuccess);
    const monthOfBirthList = [
        "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9",
        "Tháng 10", "Tháng 11", "Tháng 12",
    ];
    const initialValues = {
        fullName: '',
        nickName: '',
        yearOfBirth: 1996,
        monthOfBirth: '',
        dayOfBirth: '',
        vip: false
    };
    const VIETNAMESE_REGEX = /^[a-zA-ZÀ-ỹ\s]+$/;
    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .matches(VIETNAMESE_REGEX, "Họ tên không được có dấu, chứa số hoặc ký tự đặc biệt")
            .required("Họ tên không được để trống"),
        nickName: Yup.string()
            .matches(VIETNAMESE_REGEX, "Nickname không được có dấu, chứa số hoặc ký tự đặc biệt"),
        yearOfBirth: Yup.number()
            .typeError("Năm sinh phải là số")
            .min(1, "Năm sinh không hợp lệ")
            .integer("Vui lòng nhập vào số nguyên.")
            .required("Năm sinh không được để trống"),
        monthOfBirth: Yup.string().required("Tháng sinh không được để trống")
            .notOneOf(["Chọn tháng sinh"], "Hãy chọn tháng sinh"),
        dayOfBirth: Yup.string()
            .required("Ngày sinh không được để trống")
            .notOneOf(["Chọn ngày sinh"], "Hãy chọn ngày sinh")
            .test("is-valid-date", "Ngày không hợp lệ", function (value) {
                const month = this.parent.monthOfBirth;
                const year = this.parent.yearOfBirth;

                if (formik.touched.monthOfBirth && formik.touched.yearOfBirth) {
                    if (month && year) {
                        const daysInMonth = {
                            "Tháng 1": 31,
                            "Tháng 2": isLeapYear(year) ? 29 : 28,
                            "Tháng 3": 31,
                            "Tháng 4": 30,
                            "Tháng 5": 31,
                            "Tháng 6": 30,
                            "Tháng 7": 31,
                            "Tháng 8": 31,
                            "Tháng 9": 30,
                            "Tháng 10": 31,
                            "Tháng 11": 30,
                            "Tháng 12": 31,
                        };

                        if (daysInMonth[month] && parseInt(value) >= 1 && parseInt(value) <= daysInMonth[month]) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
                return true;
            }),
    });
    const getDefaultDays = () => {
        const defaultDays = [];
        for (let i = 1; i <= 31; i++) {
            defaultDays.push(i);
        }
        return defaultDays;
    };
    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const onSubmit = (values) => {
        let month = formik.values.monthOfBirth;
        let str = month.split(" ");
        let newMonth = str[1];

        dispatch(addNumerologyReport({
            ...values,
            monthOfBirth: newMonth
        }));

        dispatch(setCustomerInputFormSuccess(false));
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    const updateAvailableMonthsAndDays = () => {

    };
    const handleNormalSubmit = () => {
        formik.submitForm()
    }
    const confirm = () => {
        dispatch(getCountForUser());
    };
    const acceptFunction = () => {
        localStorage.removeItem("data");
        formik.setFieldValue('vip', true);
        formik.submitForm();
    }
    const acceptBuyVipFunction = () => {
        navigate("/pricing");
    }

    useEffect(() => {
        const selectedMonth = formik.values.monthOfBirth;
        const selectedYear = formik.values.yearOfBirth;
        const months = [
            "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4",
            "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8",
            "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12",
        ];
        const maxDays = [31, isLeapYear(selectedYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (selectedMonth) {
            const selectedMonthIndex = months.indexOf(selectedMonth);
            setAvailableDays([...Array(maxDays[selectedMonthIndex]).keys()].map(day => (day + 1)));
        }
    }, [formik.values.monthOfBirth, formik.values.yearOfBirth]);
    useEffect(() => {
        if (token) {
            setLoggedIn(true);

        } else {
            setLoggedIn(false);
        }
    }, [token]);
    useEffect(() => {
        setAvailableDays(getDefaultDays)
    }, []);
    useEffect(() => {
        if (success) {
            navigate("/numerology-result");
        }
    }, [success])
    useEffect(() => {
        if (getCountSuccess) {
            if (loggedIn) {
                if (count !== undefined && count !== 0) {
                    confirmDialog({
                        message: 'Bạn đang có ' + count + ' lượt VIP. Bạn có muốn làm báo cáo VIP?',
                        header: 'Xác nhận',
                        icon: 'pi pi-exclamation-triangle',
                        accept: () => acceptFunction()

                    });
                } else {
                    confirmDialog({
                        message: 'Bạn đang có 0 lượt VIP.\n Vui lòng nạp VIP để xem báo cáo đầy đủ các chỉ số.\n Di chuyển đến trang nạp VIP?',
                        header: 'Xác nhận',
                        icon: 'pi pi-exclamation-triangle',
                        accept: () => acceptBuyVipFunction()

                    });
                }

            } else if (!loggedIn) {
                toast.error("Vui lòng đăng nhập để xem báo cáo VIP!", {
                    position: toast.POSITION.TOP_RIGHT,
                    type: toast.TYPE.ERROR,
                });
            }
        }
        dispatch(setGetCountSuccess(false));

    }, [getCountSuccess])
    useEffect(() => {
        const currentMonth = formik.values.monthOfBirth;
        const currentDay = formik.values.dayOfBirth;
        if (currentMonth && (availableDays.indexOf(Number(currentDay)) === -1)) {
                formik.setFieldValue("dayOfBirth", 1)
        }
    }, [formik.values.monthOfBirth]);

    return (
        <section className="ds s-py-90 s-py-xl-150 main-background-image pt-5">
            <div className="container">
                <div className="row">
                    <main className="col-lg-12">
                        <article>
                            <div className="entry-content">
                                <div className="woocommerce">
                                    <div className="woocommerce-MyAccount-content d-flex justify-content-center w-100 ">
                                        <div
                                            className="p-4 rounded bg-transparent border border-secondary col-lg-8 col-12">
                                            <div>
                                                <h2 style={{textAlign: "center"}}>TRA CỨU THẦN SỐ HỌC</h2>
                                            </div>
                                            <div className="mb-3">
                                                <p></p>
                                            </div>
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="fullname" className="form-label">Nhập vào họ tên đầy
                                                        đủ (trong giấy khai sinh):</label>
                                                    <input type="text"
                                                           className={`form-control bg-light-subtle text-black ${
                                                               formik.errors.fullName && formik.touched.fullName
                                                                   ? "is-invalid"
                                                                   : ""
                                                           }`}
                                                           id="fullname"
                                                           name="fullName"
                                                           required
                                                           aria-required="true"
                                                           placeholder="Nhập vào họ tên"
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
                                                <div className="mb-3">
                                                    <label htmlFor="nickName" className="form-label">Nhập vào tên thường
                                                        gọi/ biệt danh nếu có (VD: Mèo, Chuột, ...):</label>
                                                    <input type="text"
                                                           className={`form-control form-text bg-light-subtle text-black ${
                                                               formik.errors.nickName && formik.touched.nickName
                                                                   ? "is-invalid"
                                                                   : ""
                                                           }`}
                                                           id="nickName"
                                                           name="nickName"
                                                           aria-required="true"
                                                           placeholder="Nhập vào biệt danh"
                                                           value={formik.values.nickName}
                                                           onChange={formik.handleChange}
                                                           onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.nickName && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.nickName}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="row">

                                                    <div className="col-md-4 mb-1">
                                                        <div className="form-group">
                                                            <label htmlFor="dayOfBirth" className="form-label">Ngày
                                                                sinh:</label>
                                                            <select
                                                                className={`form-control form-select form-select-lg mb-3 bg-light-subtle text-black ${
                                                                    formik.errors.dayOfBirth && formik.touched.dayOfBirth
                                                                        ? "is-invalid"
                                                                        : ""
                                                                }`}
                                                                id="dayOfBirth"
                                                                name="dayOfBirth"
                                                                required
                                                                aria-required="true"
                                                                value={formik.values.dayOfBirth}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            >
                                                                <option value="" disabled>Chọn ngày sinh</option>
                                                                {availableDays.map((day, index) => (
                                                                    <option key={index} value={day}>
                                                                        Ngày {day}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            {formik.errors.dayOfBirth && (
                                                                <div className="invalid-feedback">
                                                                    {formik.errors.dayOfBirth}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-1 ">
                                                        <label htmlFor="monthOfBirth" className="form-label">Tháng
                                                            sinh:</label>
                                                        <select
                                                            className={`form-control form-select form-select-lg mb-3 bg-light-subtle text-black ${
                                                                formik.errors.monthOfBirth && formik.touched.monthOfBirth
                                                                    ? "is-invalid"
                                                                    : ""
                                                            }`}
                                                            id="monthOfBirth"
                                                            name="monthOfBirth"
                                                            required
                                                            aria-required="true"
                                                            value={formik.values.monthOfBirth}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                        >
                                                            <option value="" disabled>Chọn tháng sinh</option>
                                                            {monthOfBirthList.map((month) => (
                                                                <option key={month} value={month}>{month}</option>
                                                            ))}
                                                        </select>
                                                        {formik.errors.monthOfBirth && (
                                                            <div className="invalid-feedback">
                                                                {formik.errors.monthOfBirth}
                                                            </div>
                                                        )}

                                                    </div>
                                                    <div className="col-md-4 mb-1">
                                                        <label htmlFor="yearOfBirth" className="form-label">Nhập năm
                                                            sinh:</label>
                                                        <input type="number"
                                                               className={`form-control form-text bg-light-subtle text-black ${
                                                                   formik.errors.yearOfBirth && formik.touched.yearOfBirth
                                                                       ? "is-invalid"
                                                                       : ""
                                                               }`}
                                                               id="yearOfBirth"
                                                               placeholder="1996"
                                                               value={formik.values.yearOfBirth}
                                                               onChange={formik.handleChange}
                                                               onBlur={formik.handleBlur}
                                                        />
                                                        {formik.errors.yearOfBirth && (
                                                            <div className="invalid-feedback">
                                                                {formik.errors.yearOfBirth}
                                                            </div>
                                                        )}
                                                    </div>


                                                </div>
                                                <div className="row justify-content-center justify-content-md-around">
                                                    <div className="col-md-4 my-2 d-flex justify-content-around">
                                                        <button type="button" className="btn bg-main"
                                                                onClick={handleNormalSubmit}>
                                                            Tra cứu ngay
                                                        </button>
                                                    </div>
                                                    <div className="col-md-4 my-2 d-flex justify-content-around">
                                                        <button type="button" className="btn bg-main" onClick={confirm}>
                                                            Tra cứu vip
                                                        </button>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
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

export default NumerologyInputForm;
