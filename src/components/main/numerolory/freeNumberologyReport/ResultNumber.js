import React from 'react';
import {Panel} from 'primereact/panel';
import {Ripple} from 'primereact/ripple';
import FormatParagraph from "~/components/main/numerolory/FormatParagraph";
import styles from "./result_number.module.scss"

function ResultNumber({result={}}){
    const template = (options) => {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} justify-content-start ${styles.panelHeader}`;
        const titleClassName = `${options.titleClassName} ml-2 text-main`;
        const style = { fontSize: '1.25rem' };

        return (
            <div className={className}>
                <span className={titleClassName} style={style}>
                    {result.name}: {result.number}
                </span>
                <span className={options.togglerClassName} onClick={options.onTogglerClick}>
                    <span className={toggleIcon}></span>
                    <Ripple />
                </span>
            </div>
        );
    };
    if (result === null) {
        return <div>No result available</div>;
    }

    if (result.description === null) {
        return(
            <Panel headerTemplate={template} toggleable>
                    <p className="m-0" style={{color:"red"}}>
                        Bạn cần nâng cấp vip để xem thông tin này.
                    </p>
            </Panel>
        );
    }
    return(
        <Panel headerTemplate={template} toggleable>
                {FormatParagraph(result.description).map((paragraph, index) => (
                    <p key={index} className="m-0">
                        {paragraph}
                    </p>

                ))}
        </Panel>

    );
}
export default ResultNumber;