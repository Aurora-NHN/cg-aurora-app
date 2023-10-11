import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    selectNumerologyReportAdded,
    addFreeNumerologyReport
} from "~/features/numerologySlice"
export default function NumerologyAdding(){
    const [customerInputData, setCustomerInputData] = useState("");
    const {numerologyReportId} = useParams();
    const isCreate = !numerologyReportId;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const numerologyReportAdded = useSelector(selectNumerologyReportAdded);

    const monthOfBirthList = [
        "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9",
        "Tháng 10", "Tháng 11", "Tháng 12",
    ];

    const dayOfBirthListDefault = Array.from({ length: 31 }, (_, i) => `Ngày ${i + 1}`);
    const dayOfBirthList30Days = Array.from({ length: 30 }, (_, i) => `Ngày ${i + 1}`);
    const dayOfBirthList29Days = Array.from({ length: 29 }, (_, i) => `Ngày ${i + 1}`);
    const dayOfBirthList28Days = Array.from({ length: 28 }, (_, i) => `Ngày ${i + 1}`);

    // Sử dụng state để lưu trữ giá trị các trường và thông báo lỗi
    const [fullName, setFullName] = useState('');
    const [fullNameError, setFullNameError] = useState('');

    const [nickName, setNickName] = useState('');
    const [nickNameError, setNickNameError] = useState('');

    const [monthOfBirth, setMonthOfBirth] = useState('');
    const [monthOfBirthError, setMonthOfBirthError] = useState('');

    const [yearOfBirth, setYearOfBirth] = useState('');
    const [yearOfBirthError, setYearOfBirthError] = useState('');

    const [dayOfBirth, setDayOfBirth] = useState('');
    const [dayOfBirthError, setDayOfBirthError] = useState('');

    const [dayOfBirthList, setDayOfBirthList] = useState(dayOfBirthListDefault);

    // Hàm xử lý khi người dùng thay đổi giá trị họ tên đầy đủ
    const handleFullNameChange = (event) => {
        const inputValue = event.target.value;

        if (inputValue.trim() === '') {
            setFullNameError('Họ tên không được để trống');
        } else {
            setFullNameError('');
        }

        setFullName(inputValue);
    };

    // Hàm xử lý khi người dùng thay đổi giá trị tên thường gọi/ biệt danh
    const handleNickNameChange = (event) => {
        const inputValue = event.target.value;

        // Thêm logic kiểm tra nếu cần

        setNickName(inputValue);
    };

    // Hàm xử lý khi người dùng thay đổi giá trị năm sinh
    const handleYearOfBirthChange = (event) => {
        const inputValue = event.target.value;

        if (/^\d{4}$/.test(inputValue) && parseInt(inputValue) > 0) {
            setYearOfBirthError('');

            // Check if it's a leap year
            const isLeap = isLeapYear(parseInt(inputValue));

            // Update the dayOfBirthList based on leap year
            updateDayOfBirthList(monthOfBirth, isLeap);
        } else {
            setYearOfBirthError('Năm sinh không hợp lệ');
            setDayOfBirthList(dayOfBirthListDefault);
        }

        setYearOfBirth(inputValue);
        setMonthOfBirth('');
        setDayOfBirth('');
    };

    // Hàm xử lý khi người dùng thay đổi giá trị tháng sinh
    const handleMonthOfBirthChange = (event) => {
        const inputValue = event.target.value;

        setMonthOfBirth(inputValue);

        // Reset day of birth when month changes
        setDayOfBirth('');
        setDayOfBirthError('');

        // Check if it's a leap year
        const isLeap = isLeapYear(parseInt(yearOfBirth));

        // Update the dayOfBirthList based on leap year
        updateDayOfBirthList(inputValue, isLeap);
    };

    // Hàm xử lý khi người dùng thay đổi giá trị ngày sinh
    const handleDayOfBirthChange = (event) => {
        const inputValue = event.target.value;

        setDayOfBirth(inputValue);
    };

    // Function to check if a year is a leap year
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Function to update the dayOfBirthList based on month and leap year
    function updateDayOfBirthList(selectedMonth, selectedYear) {
        let updatedDayOfBirthList = dayOfBirthListDefault;

        switch (selectedMonth) {
            case "Tháng 2":
                updatedDayOfBirthList = isLeapYear(selectedYear)
                    ? dayOfBirthList29Days
                    : dayOfBirthList28Days;
                break;
            case "Tháng 4":
            case "Tháng 6":
            case "Tháng 9":
            case "Tháng 11":
                updatedDayOfBirthList = dayOfBirthList30Days;
                break;
            default:
                updatedDayOfBirthList = dayOfBirthListDefault;
                break;
        }

        setDayOfBirthList(updatedDayOfBirthList);
    }

    // Hàm xử lý khi người dùng gửi form
    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset thông báo lỗi (nếu cần)
        setFullNameError('');
        setNickNameError('');
        setYearOfBirthError('');
        setMonthOfBirthError('');
        setDayOfBirthError('');

        // Reset giá trị các trường sau khi gửi form (nếu cần)
        setFullName('');
        setNickName('');
        setYearOfBirth('');
        setMonthOfBirth('');
        setDayOfBirth('');
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
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="fullname" className="form-label">Nhập vào họ tên đầy đủ (trong giấy khai sinh):</label>
                                                    <input type="text"
                                                           className="form-control bg-light-subtle text-black"
                                                           id="fullname"
                                                           placeholder="Nhập vào họ tên"
                                                           value={fullName}
                                                           onChange={handleFullNameChange} />
                                                    {fullNameError && <div className="text-danger">{fullNameError}</div>}
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="nickName" className="form-label">Nhập vào tên thường gọi/ biệt danh nếu có (VD: Mèo, Chuột, ...):</label>
                                                    <input type="text"
                                                           className="form-control form-text bg-light-subtle text-black"
                                                           id="nickName"
                                                           placeholder="Nhập vào biệt danh"
                                                           value={nickName}
                                                           onChange={handleNickNameChange} />
                                                    {nickNameError && <div className="text-danger">{nickNameError}</div>}
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="yearOfBirth" className="form-label">Nhập năm sinh (VD: 1996):</label>
                                                        <input type="number"
                                                               className="form-control form-text bg-light-subtle text-black"
                                                               id="yearOfBirth"
                                                               placeholder="1996"
                                                               value={yearOfBirth}
                                                               onChange={handleYearOfBirthChange} />
                                                        {yearOfBirthError && <div className="text-danger">{yearOfBirthError}</div>}
                                                    </div>

                                                    <div className="col-md-4 mb-1 ">
                                                        <label htmlFor="monthOfBirth" className="form-label">Tháng sinh:</label>
                                                        <select
                                                            className="form-control form-select form-select-lg mb-3 bg-light-subtle text-black"
                                                            id="monthOfBirth"
                                                            aria-label="Large select example"
                                                            value={monthOfBirth}
                                                            onChange={handleMonthOfBirthChange}
                                                        >
                                                            <option value="" selected disabled>Chọn tháng sinh</option>
                                                            {monthOfBirthList.map((monthOfBirth) => (
                                                                <option value={monthOfBirth} key={monthOfBirth}>
                                                                    {monthOfBirth}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {monthOfBirthError && <div className="text-danger">{monthOfBirthError}</div>}
                                                    </div>
                                                    <div className="col-md-4 mb-1">
                                                        <label htmlFor="dayOfBirth" className="form-label">Ngày sinh:</label>
                                                        <select
                                                            className="form-control form-select form-select-lg mb-3 bg-light-subtle text-black overflow-hidden"
                                                            id="dayOfBirth"
                                                            aria-label="Large select example"
                                                            value={dayOfBirth}
                                                            onChange={handleDayOfBirthChange}
                                                        >
                                                            <option value="" selected disabled>Chọn ngày sinh</option>
                                                            {dayOfBirthList.map((dayOfBirth, index) => (
                                                                <option
                                                                    value={dayOfBirth}
                                                                    key={dayOfBirth}
                                                                >
                                                                    {dayOfBirth}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {dayOfBirthError && <div className="text-danger">{dayOfBirthError}</div>}
                                                    </div>

                                                </div>
                                                <div style={{ textAlign: "center" }}>
                                                    <button type="submit" className="btn bg-main" onSubmit={handleSubmit}>Tra cứu ngay</button>
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

