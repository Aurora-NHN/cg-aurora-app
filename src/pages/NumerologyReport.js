import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import NumerologyResult from "~/components/main/numerolory/NumerologyResult";
import NumerologyAdding from "~/components/main/numerolory/NumerologyAdding";

const NumerologyReport = () => {

    return (
        <>

            <div style={{ minHeight: "100vh" }}>
                <NumerologyResult/>
            </div>
        </>
    );

}
export default NumerologyReport;