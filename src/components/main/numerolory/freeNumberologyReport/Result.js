import React from 'react';
import styles from "./result_number.module.scss"
import ReportPanel from "~/components/main/numerolory/freeNumberologyReport/ReportPanel";

function Result({result = {}, index, data}) {
    const template = (options) => {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} d-flex justify-content-between ${styles.panelHeader}`;
        const titleClassName = `${options.titleClassName} ml-2 text-main`;
        const style = {fontSize: '1.25rem'};

        return (
            <div className={className}>
                <div className={titleClassName} style={style}>
                 {
                     `${index + 1}.  ${result.nameOfNumber}`
                 }
                </div>
                <div className={options.togglerClassName} onClick={options.onTogglerClick}>
                    <span className={toggleIcon}></span>
                </div>
            </div>
        );
    };

    return (
        <>
            {
                <ReportPanel template={template} result={result} data={data}/>
            }
        </>
    )

}

export default Result;