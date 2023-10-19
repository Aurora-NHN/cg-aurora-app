import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {selectNumerologyReportAdded} from "~/features/numerologySlice";
import CardResult from "~/components/main/numerolory/freeNumberologyReport/CardResult";
import ResultNumber from "~/components/main/numerolory/freeNumberologyReport/ResultNumber";

function NumerologyFullResult() {

    const result = useSelector(selectNumerologyReportAdded);

    const [currentResult, setCurrentResult] = useState({});
    const [lifePathNumber, setLifePathNumber] = useState({});
    const  [dayOfbirthNumber, setDayOfbirthNumber] = useState({});
    const  [missionNumber, setMissionNumber] = useState({});

    const  [numberArr, setNumberArr] = useState([]);

    useEffect(() => {
        if (result && result.lifePathResponseDTO) {
            setLifePathNumber(result.lifePathResponseDTO);
            setDayOfbirthNumber(result.dayOfBirthNumberResponseDTO);
            setMissionNumber(result.missionNumberResponseDtTO);
            setCurrentResult(result)
        }

    }, [result])


    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('data'))
        if (data){
            setCurrentResult(data.data)
            const dataArray = [];
            for (const key in data.data) {
                dataArray.push(data.data[key]);
            }
            dataArray.splice(0,5)
            setNumberArr(dataArray);
        }
    },[])


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

export default NumerologyFullResult;