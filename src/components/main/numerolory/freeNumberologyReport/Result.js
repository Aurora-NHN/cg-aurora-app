import React, {useEffect, useState} from 'react';
import {Ripple} from 'primereact/ripple';
import styles from "./result_number.module.scss"
import ReportPanel from "~/components/main/numerolory/freeNumberologyReport/ReportPanel";

function Result({
                    result = {},
                    index,
                    data,
                    // lifePhase
                }) {

    const template = (options) => {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} justify-content-start ${styles.panelHeader}`;
        const titleClassName = `${options.titleClassName} ml-2 text-main`;
        const style = {fontSize: '1.25rem'};

        return (
            <div className={className}>
                <span className={titleClassName} style={style}>
                 {
                     `${index + 1}.  ${result.nameOfNumber}`
                 }
                </span>
                <span className={options.togglerClassName} onClick={options.onTogglerClick}>
                    <span className={toggleIcon}></span>
                    <Ripple/>
                </span>
            </div>
        );
    };

    const [arr, setArr] = useState([]);

    useEffect(() => {
    }, [])


    return (
        <>
            {
              <ReportPanel template={template} result={result} data={data}/>
            }
        </>
    )

}

export default Result;