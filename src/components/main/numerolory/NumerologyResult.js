import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectNumerologyReportAdded, setReportSuccess} from "~/features/numerologySlice";
import CardResult from "~/components/main/numerolory/freeNumberologyReport/CardResult";
import {Link} from "react-router-dom";
import Result from "~/components/main/numerolory/freeNumberologyReport/Result";


function NumerologyResult() {
    const dispatch = useDispatch();
    const apiData = useSelector(selectNumerologyReportAdded);
    const [currentResult, setCurrentResult] = useState({});
    const [meanOfAllNumberList, setMeanOfAllNumberList] = useState([]);
    const [numberArr, setNumberArr] = useState([]);
    const [lifePhase, setLifePhase] = useState({});
    const [count, setCount] = useState(0);
    const [monthOfBirth, setMonthOfBirth] = useState('');
    const [dayOfBirth, setDayOfBirth] = useState('');
    const [yearOfBirth, setYearOfBirth] = useState('');
    const [fullName, setFullName] = useState('');
    useEffect(() => {
        let data = {};

        if (apiData) {
            data = apiData;
            console.log('apiData');
            console.log(apiData);

        } else {
            let storedData = JSON.parse(localStorage.getItem('data'));
            if (storedData) data = storedData;
        }

        setCurrentResult(data);
        const meanOfNumberList = data.meanOfNumberResponseDTOList;

        const count = data.userResponseDtoForNumerologyReport?.count;
        if (count){
            setCount(count);
        }


        const dayOfBirth = data.dayOfBirth;
        setDayOfBirth(dayOfBirth);
        const monthOfBirth = data.monthOfBirth;
        setMonthOfBirth(monthOfBirth);
        const yearOfBirth = data.yearOfBirth;
        setYearOfBirth(yearOfBirth);
        const fullName = data.fullName;
        setFullName(fullName);

        if (meanOfNumberList) {
            setMeanOfAllNumberList(meanOfNumberList);
        }

        let dataArray = [];
        for (const key in data) {
            dataArray.push(data[key]);

        }
        const lifePhase = dataArray[15];
        dataArray.splice(0, 8);
        setNumberArr(dataArray);


    }, [apiData]);

    useEffect(() => {
        dispatch(setReportSuccess(false));
    }, [])

    return (
        <section className="ds s-py-90 s-py-xl-150 main-background-image">
            <div className="container">
                <div className="row">
                    <main className="col-lg-12 pt-5">
                        <article>
                            <div className="entry-content">
                                <div className="woocommerce">
                                    <div className="woocommerce-MyAccount-content d-flex justify-content-center w-100 ">
                                        <div className="p-4 rounded bg-transparent col-lg-11 col-12">
                                            <div>
                                                <h2 style={{textAlign: "center"}}>BÁO CÁO THẦN SỐ HỌC</h2>
                                            </div>
                                            <div className="mb-3 text-center mt-4 font-weight-bold text-warning" style={{fontSize: '25px'}}>
                                                <span className="">
                                                    {fullName.toUpperCase()}
                                                </span>
                                                <br/>
                                                <span>{`${dayOfBirth}/${monthOfBirth}/${yearOfBirth}`}</span>
                                            </div>

                                            <div className="mb-3"></div>
                                            {
                                                count <= 0 && count != undefined &&(
                                                    <div className="bg-transparent rounded-3 p-3" style={{background: "#F9E1E0"}}>

                                                        <p style={{color: "red", textAlign: "center"}}>
                                                            Bạn đang sử dụng lượt tra miễn phí chỉ xem được giới hạn các luận
                                                            giải.
                                                            Để xem những luận giải và giải pháp mà các chuyên gia đã nghiên cứu
                                                            cho toàn bộ các chỉ số của bạn,
                                                            vui lòng nâng cấp thành tài khoản VIP!

                                                        </p>
                                                        <div style={{textAlign: "center"}}>
                                                            <Link to="/pricing" className="btn bg-main">
                                                                Di chuyển đến trang nạp vip
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                            <div className="p-3">
                                                <CardResult result={currentResult}/>

                                                <div>

                                                </div>
                                                {
                                                    meanOfAllNumberList.map((number, index) => (
                                                        <div key={index} className="mb-3">
                                                            <Result
                                                                result={number}
                                                                index={index}
                                                                data={numberArr[index]}
                                                                // lifePhase={lifePhase}
                                                            />
                                                        </div>
                                                    ))
                                                }
                                            </div>

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

export default NumerologyResult;