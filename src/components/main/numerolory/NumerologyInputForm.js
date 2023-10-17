import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addFreeNumerologyReport, setCustomerInputFormSuccess} from "~/features/numerologySlice";

function NumerologyInputForm() {

        const dispatch = useDispatch();
        const navigate = useNavigate();
        const [availableMonths, setAvailableMonths] = useState([]);
        const [availableDays, setAvailableDays] = useState([]);
        const success = useSelector(setCustomerInputFormSuccess);
        const monthOfBirthList = [
            "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9",
            "Tháng 10", "Tháng 11", "Tháng 12",
        ];

        const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

        const initialValues = {
            fullName: "",
            nickName: "",
            yearOfBirth: "",
            monthOfBirth: "",
            dayOfBirth: "",
        };

        const VIETNAMESE_REGEX = /^[a-zA-ZÀ-ỹ\s]*$/;

        const REGEX_FOR_NAME = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/;
        const validationSchema = Yup.object().shape({
            fullName: Yup.string()
                .matches(VIETNAMESE_REGEX, "Họ tên không được chứa số và ký tự đặc biệt")
                .required("Họ tên không được để trống"),
            nickName: Yup.string()
                .matches(VIETNAMESE_REGEX, "Nickname không được chứa số và ký tự đặc biệt"),
            yearOfBirth: Yup.number()
                .typeError("Năm sinh phải là số")
                .min(1, "Năm sinh không hợp lệ")
                .max(new Date().getFullYear(), "Năm sinh không hợp lệ")
                .required("Năm sinh không được để trống"),
            monthOfBirth: Yup.string().required("Tháng sinh không được để trống")
                .notOneOf(["Chọn tháng sinh"], "Hãy chọn tháng sinh"),
            dayOfBirth: Yup.string()
                .required("Ngày sinh không được để trống")
                .notOneOf(["Chọn ngày sinh"], "Hãy chọn ngày sinh")
                .test("is-valid-date", "Ngày không hợp lệ", function (value) {
                const month = this.parent.monthOfBirth;
                const year = this.parent.yearOfBirth;

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
            }),
        });

        const updateAvailableMonthsAndDays = (selectedYear, selectedMonth) => {
            const isLeap = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
            const months = [
                "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4",
                "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8",
                "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12",
            ];

            const maxDays = [31, isLeap(selectedYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            setAvailableMonths(months);

            if (selectedMonth) {
                const selectedMonthIndex = months.indexOf(selectedMonth);
                setAvailableDays([...Array(maxDays[selectedMonthIndex]).keys()].map(day =>  (day + 1)));
            }
        };


        const onSubmit = (values) => {
            let month = formik.values.monthOfBirth;
            let str = month.split(" ");
            let newMonth = str[1];
            values.monthOfBirth = newMonth;
            dispatch(addFreeNumerologyReport(values));

            dispatch(setCustomerInputFormSuccess(false));
            if (success){
                navigate("/numerology-result");
            }
        };

        const formik = useFormik({
            initialValues,
            validationSchema,
            onSubmit,
        });
        const toTop = () => {
            window.scrollTo({ behavior: "smooth", top: 200, left: 0 });
        };
        return (
            <section className="ds s-py-90 s-py-xl-150 main-background-image">
                <div className="container">
                    <div className="row">
                        <main className="col-lg-12">
                            <article>
                                <div className="entry-content">
                                    <div className="woocommerce">
                                        <div className="woocommerce-MyAccount-content d-flex justify-content-center w-100 ">
                                            <div className="p-4 rounded bg-transparent border border-secondary col-lg-8 col-12">
                                                <div>
                                                    <h2 style={{ textAlign: "center" }}>TRA CỨU THẦN SỐ HỌC</h2>
                                                </div>
                                                <div className="mb-3">
                                                    <p> </p>
                                                </div>
                                                <form onSubmit={formik.handleSubmit}>
                                                    <div className="mb-3">
                                                        <label htmlFor="fullname" className="form-label">Nhập vào họ tên đầy đủ (trong giấy khai sinh):</label>
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
                                                        <label htmlFor="nickName" className="form-label">Nhập vào tên thường gọi/ biệt danh nếu có (VD: Mèo, Chuột, ...):</label>
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
                                                        <div className="col-md-4 mb-3">
                                                            <label htmlFor="yearOfBirth" className="form-label">Nhập năm sinh (VD: 1996):</label>
                                                            <input type="number"
                                                                   className={`form-control form-text bg-light-subtle text-black ${
                                                                       formik.errors.yearOfBirth && formik.touched.yearOfBirth
                                                                           ? "is-invalid"
                                                                           : ""
                                                                   }`}
                                                                   id="yearOfBirth"
                                                                   placeholder="1996"
                                                                   value={formik.values.yearOfBirth}
                                                                   onChange={(e) => {
                                                                       formik.handleChange(e);
                                                                       updateAvailableMonthsAndDays(e.target.value, formik.values.monthOfBirth);
                                                                   }}
                                                                   onBlur={formik.handleBlur}
                                                            />
                                                            {formik.errors.yearOfBirth && (
                                                                <div className="invalid-feedback">
                                                                    {formik.errors.yearOfBirth}
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="col-md-4 mb-1 ">
                                                            <label htmlFor="monthOfBirth" className="form-label">Tháng sinh:</label>
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
                                                                onChange={(e) => {
                                                                    formik.handleChange(e);
                                                                    const selectedMonth = e.target.value;
                                                                    updateAvailableMonthsAndDays(formik.values.yearOfBirth, selectedMonth); // Update available months and days
                                                                }}
                                                                onBlur={formik.handleBlur}

                                                            >
                                                                <option value="" disabled selected>Chọn tháng sinh</option>
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
                                                            <div className="form-group">
                                                            <label htmlFor="dayOfBirth" className="form-label">Ngày sinh:</label>
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
                                                                onChange={(e) => {
                                                                    formik.handleChange(e);
                                                                    updateAvailableMonthsAndDays(formik.values.yearOfBirth, formik.values.monthOfBirth);
                                                                }}
                                                                onBlur={formik.handleBlur}
                                                            >
                                                                <option value="" disabled selected>Chọn ngày sinh</option>
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

                                        </div>
                                        <div style={{ textAlign: "center" }}>
                                            <button type="submit" className="btn bg-main" onClick={toTop}>Tra cứu ngay</button>
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
