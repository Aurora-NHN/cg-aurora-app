import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import NumerologyResult from "~/components/main/numerolory/NumerologyResult";
import {useSelector} from "react-redux";

const NumerologyReport = () => {
    const apiData = useSelector()
    return (
        <>

            <div style={{ minHeight: "100vh" }}>
                <NumerologyResult/>
            </div>
        </>
    );

}
export default NumerologyReport;