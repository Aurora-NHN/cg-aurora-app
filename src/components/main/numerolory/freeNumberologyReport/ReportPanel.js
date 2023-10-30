import React, {memo} from 'react';
import {Panel} from "primereact/panel";
import FormatParagraph from "~/components/main/numerolory/FormatParagraph";

function ReportPanel({template, result = {}, data}) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <>
            <Panel headerTemplate={template} toggleable>
                <p>
                    <span style={{fontWeight: "bold", textDecoration: "underline"}}>Ý nghĩa:</span>
                    {FormatParagraph(result.mean).map((paragraph, index) => (
                        <p key={index} style={{fontStyle: "italic", fontSize: '14px', color: "blue"}}>
                            {paragraph}
                        </p>
                    ))}
                </p>
                <div className="m-0 text-red-100">
                    {
                        !data ? (
                            <p style={{color: "red"}}>Bạn cần nâng cấp vip để xem thông tin này.</p>
                        ) : !Array.isArray(data) ? (
                            data.youngStateNumberResponseDTO ? (
                                    <div>
                                        <div style={{
                                            color: "red",
                                            fontWeight: "bold"
                                        }}>{data.youngStateNumberResponseDTO?.name}:
                                            Số {data.youngStateNumberResponseDTO?.number}</div>
                                        <div className="text-blue-900">{data.youngStateNumberResponseDTO?.description}</div>

                                        <div style={{
                                            color: "red",
                                            fontWeight: "bold"
                                        }}>{data.matureStateNumberResponseDTO?.name}:
                                            Số {data.matureStateNumberResponseDTO?.number}</div>
                                        <div
                                            className="text-blue-900">{data.matureStateNumberResponseDTO?.description}</div>

                                        <div style={{
                                            color: "red",
                                            fontWeight: "bold"
                                        }}>{data.oldStateNumberResponseDTO?.name}:
                                            Số {data.oldStateNumberResponseDTO?.number}</div>
                                        <div className="text-blue-900">{data.oldStateNumberResponseDTO?.description}</div>
                                    </div>
                                )
                                : (<div>
                                    <p style={{color: "red"}}>
                                        {data.name} của bạn là: {data.number}
                                    </p>
                                    {FormatParagraph(data.description).map((paragraph, index) => (
                                        <p key={index}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>)


                        ) : (
                            <div>

                                {data.map((item, index) => (

                                    <div key={index}>

                                        {item.personalMonthResponseDTOList ? (
                                            <p style={{color: "blue", fontWeight: "bold"}}>
                                                {`${item.name} của năm ${currentYear + index} là: số ${item.number}`}
                                            </p>
                                        ) : (
                                            item.age ? (
                                                <p style={{color: "blue", fontWeight: "bold"}}>
                                                    {`${item.name} thứ ${index + 1} năm bạn ${item.age} tuổi tương đương với năng lượng của số ${item.number}`}
                                                </p>
                                            ) : (
                                                <p style={{color: "blue", fontWeight: "bold"}}>
                                                    {`${item.name} thứ ${index + 1}: số ${item.number}`}
                                                </p>
                                            )
                                        )}

                                        <div className="text-blue-900">{item.description}</div>
                                        {FormatParagraph(item.description).map((paragraph, index) => (
                                            <p key={index}>
                                                {paragraph}
                                            </p>
                                        ))}
                                        <div>
                                            {item.personalMonthResponseDTOList ? (
                                                <p style={{color: "blue", fontWeight: "bold"}}>
                                                    {`Các tháng cá nhân cho năm cá năm ${currentYear + index}: `}
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                        </div>

                                        {item.personalMonthResponseDTOList && (
                                            <div>

                                                {item.personalMonthResponseDTOList.map((monthItem, monthIndex) => (
                                                    <div key={monthIndex}>
                                                        <div style={{
                                                            color: "red",
                                                            fontWeight: "bold"
                                                        }}>{`${monthItem.name}: Tháng ${monthIndex + 1} của bạn là số ${monthItem.number}`}</div>
                                                        {FormatParagraph(monthItem.description).map((paragraph, index) => (
                                                            <p key={index}>
                                                                {paragraph}
                                                            </p>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                    </div>
                                ))}
                            </div>

                        )}
                </div>
            </Panel>
        </>
    );
}

export default memo(ReportPanel);
