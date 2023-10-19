import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {selectFreeReportSuccess, selectFullReportSuccess} from "~/features/numerologySlice";
import CardResult from "~/components/main/numerolory/freeNumberologyReport/CardResult";
import {Ripple} from 'primereact/ripple';
import ResultNumber from "~/components/main/numerolory/freeNumberologyReport/ResultNumber";
import {Link} from "react-router-dom";


function NumerologyResult() {
    const resultFree = useSelector(selectFreeReportSuccess);
    const resultFull = useSelector(selectFullReportSuccess);
    const [currentResult, setCurrentResult] = useState({});
    const [lifePathNumber, setLifePathNumber] = useState({});
    const  [dayOfbirthNumber, setDayOfbirthNumber] = useState({});
    const  [missionNumber, setMissionNumber] = useState({});
    const  [numberArr, setNumberArr] = useState([]);

    useEffect(() => {

            let data = JSON.parse(localStorage.getItem('data'));

            if (data) {
                setCurrentResult(data);
                let dataArray = [];
                for (const key in data) {
                    dataArray.push(data[key]);
                }
                dataArray.splice(0, 5);
                setNumberArr(dataArray);
            }

        }, []);

    useEffect(() => {
        if (resultFree === true && resultFree.lifePathResponseDTO) {
            setLifePathNumber(resultFree.lifePathResponseDTO);
            setDayOfbirthNumber(resultFree.dayOfBirthNumberResponseDTO);
            setMissionNumber(resultFree.missionNumberResponseDtTO);
            setCurrentResult(resultFree)
        }
        if (resultFull === true && resultFull.lifePathResponseDTO) {
            setLifePathNumber(resultFull.lifePathResponseDTO);
            setDayOfbirthNumber(resultFull.dayOfBirthNumberResponseDTO);
            setMissionNumber(resultFull.missionNumberResponseDtTO);
            //Bo thêm các đối tượng còn laị
            //list th
            setCurrentResult(resultFull)
        }

    }, [resultFree, resultFull])

    const template = (options) => {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} ml-2 text-primary`;
        const style = { fontSize: '1.25rem' };

        return (
            <div className={className}>
                <span className={titleClassName} style={style}>Header</span>
                <span className={options.togglerClassName} onClick={options.onTogglerClick}>
                    <span className={toggleIcon}></span>
                    <Ripple />
                </span>
            </div>
        );
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
                                        <div className="p-4 rounded bg-transparent col-lg-11 col-12">
                                            <div>
                                                <h2 style={{textAlign: "center"}}>BÁO CÁO THẦN SỐ HỌC</h2>
                                            </div>
                                            <div className="mb-3">
                                                <p></p>
                                            </div>

                                            <div className="mb-3"></div>
                                            <div className="bg-transparent rounded-3 p-3"
                                                 style={{background: "#F9E1E0"}}>
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

                                            <div className="p-3">
                                                <CardResult result ={currentResult}/>
                                            </div>

                                            {

                                                numberArr.map((number, index) => (
                                                    <div key={index} className="mb-3">
                                                        <ResultNumber result={number} />
                                                    </div>
                                                ))
                                            }

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