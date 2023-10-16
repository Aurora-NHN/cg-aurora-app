import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import NumerologyResult from "~/components/main/numerolory/NumerologyResult";
import NumerologyAdding from "~/components/main/numerolory/NumerologyAdding";
import NumerologyInputForm from "~/components/main/numerolory/NumerologyInputForm";

const Numerology = () => {

    return (
        <>

            <div style={{ minHeight: "100vh" }}>
                {/*<NumerologyAdding/>*/}

                <NumerologyInputForm/>

            </div>
        </>
    );

}
export default Numerology;