import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {selectNumerologyReportAdded} from "~/features/numerologySlice";
import CardResult from "~/components/main/numerolory/CardResult";
import CardResult2 from "~/components/main/numerolory/CardResult2";
import CardResult3 from "~/components/main/numerolory/CardResult3";

function NumerologyResult() {
    const result = useSelector(selectNumerologyReportAdded);
    const [lifePathNumber, setLifePathNumber] = useState({});
    const  [dayOfbirthNumber, setDayOfbirthNumber] = useState({});


    useEffect(() => {
        if (result && result.lifePathResponseDTO) {
            setLifePathNumber(result.lifePathResponseDTO);
            setDayOfbirthNumber(result.dayOfBirthNumberResponseDTO);
        }
    }, [result])

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

                                            <div className="mb-3">
                                                <p></p>
                                            </div>
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
                                                    <button type="submit" className="btn bg-main">Di chuyển đến trang
                                                        nạp vip
                                                    </button>
                                                </div>
                                            </div>

                                            <div>
                                                {/*<CardResult />*/}
                                                <CardResult3/>
                                            </div>
                                            <div className="mb-3">
                                                <p></p>
                                            </div>
                                            <div className=" rounded-3 p-3 text-black" style={{background: "#E8F1FD"}}>
                                                <h5 style={{color: "black"}}>{lifePathNumber.number}</h5>
                                                <p className="bg-light rounded-3 p-3 text-black">
                                                    {lifePathNumber.description}
                                                </p>
                                            </div>

                                            <br></br>
                                            <div className=" rounded-3 p-3 text-black" style={{background: "#E8F1FD"}}>
                                                <h5 style={{color: "black"}}>{dayOfbirthNumber.number}</h5>
                                                <p className="bg-light rounded-3 p-3 text-black">
                                                    {dayOfbirthNumber.description}
                                                </p>
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