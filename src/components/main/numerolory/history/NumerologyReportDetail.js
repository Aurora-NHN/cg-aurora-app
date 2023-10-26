import CardResult from "~/components/main/numerolory/freeNumberologyReport/CardResult";
import Result from "~/components/main/numerolory/freeNumberologyReport/Result";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectNumerologyDetail, setReportDetailSuccess} from "~/features/numerologySlice";

function NumerologyReportDetail() {
    const dispatch = useDispatch();
    const data = useSelector(selectNumerologyDetail);
    const [meanOfAllNumberList, setMeanOfAllNumberList] = useState([]);
    const [numberArr, setNumberArr] = useState([]);
    const [monthOfBirth, setMonthOfBirth] = useState('');
    const [dayOfBirth, setDayOfBirth] = useState('');
    const [yearOfBirth, setYearOfBirth] = useState('');
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        const meanOfNumberList = data?.meanOfNumberResponseDTOList;

        const dayOfBirth = data?.dayOfBirth;
        setDayOfBirth(dayOfBirth);
        const monthOfBirth = data?.monthOfBirth;
        setMonthOfBirth(monthOfBirth);
        const yearOfBirth = data?.yearOfBirth;
        setYearOfBirth(yearOfBirth);
        const fullName = data?.fullName;
        setFullName(fullName);

        if (meanOfNumberList) {
            setMeanOfAllNumberList(meanOfNumberList);
        }

        let dataArray = [];
        for (const key in data) {
            dataArray.push(data[key]);
        }
        const lifePhase = dataArray[15];
        dataArray.splice(0, 9);
        setNumberArr(dataArray);

    }, [data]);

    useEffect(() => {
        dispatch(setReportDetailSuccess(false));
    }, [])

    return (
        <section className="ds s-py-90 s-py-xl-150 main-background-image">
            <div className="container">
                <div className="row">
                    <main className="col-lg-12">
                        <article>
                            <div className="entry-content">
                                <div className="woocommerce">
                                    <div className="woocommerce-MyAccount-content d-flex justify-content-center w-100 ">
                                        <div className="p-4 rounded bg-transparent col-lg-11 col-12">
                                            <div>
                                                <h2 style={{textAlign: "center"}}>BÁO CÁO THẦN SỐ HỌC</h2>
                                            </div>
                                            <div className="mb-3 text-center mt-4 font-weight-bold text-warning"
                                                 style={{fontSize: '25px'}}>
                                                <span className="">
                                                    {fullName.toUpperCase()}
                                                </span>
                                                <br/>
                                                <span>{`${dayOfBirth}/${monthOfBirth}/${yearOfBirth}`}</span>
                                            </div>

                                            <div className="p-3">
                                                <CardResult result={data}/>

                                                <div>

                                                </div>
                                                {
                                                    meanOfAllNumberList.map((number, index) => (
                                                        <div key={index} className="mb-3">
                                                            <Result
                                                                result={number}
                                                                index={index}
                                                                data={numberArr[index]}
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

export default NumerologyReportDetail;