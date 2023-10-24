import React from 'react';
import { Panel } from "primereact/panel";
import FormatParagraph from "~/components/main/numerolory/FormatParagraph";

function ReportPanel({ template, result = {}, data = null, lifePhaseResponseDTO }) {
    return (
        <>
            <Panel headerTemplate={template} toggleable>
                <p>
                    <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Ý nghĩa:</span>
                    {FormatParagraph(result.mean).map((paragraph, index) => (
                        <p key={index} style={{ fontStyle: "italic", fontSize: '14px', color: "blue" }}>
                            {paragraph}
                        </p>
                    ))}
                </p>
                <div className="m-0 text-red-100">
                    {lifePhaseResponseDTO ? (
                        <>
                            <div style={{ color: "red", fontWeight: "bold" }}>
                                {lifePhaseResponseDTO.youngStateNumberResponseDTO.name}: Số {lifePhaseResponseDTO.youngStateNumberResponseDTO.number}
                            </div>
                            <div className="text-blue-900">{lifePhaseResponseDTO.youngStateNumberResponseDTO.description}</div>
                            <div>
                                <div style={{ color: "red", fontWeight: "bold" }}>
                                    {lifePhaseResponseDTO.matureStateNumberResponseDTO.name}: Số {lifePhaseResponseDTO.matureStateNumberResponseDTO.number}
                                </div>
                                <div className="text-blue-900">{lifePhaseResponseDTO.matureStateNumberResponseDTO.description}</div>
                                <div>
                                    <div style={{ color: "red", fontWeight: "bold" }}>
                                        {lifePhaseResponseDTO.oldStateNumberResponseDTO.name}: Số {lifePhaseResponseDTO.oldStateNumberResponseDTO.number}
                                    </div>
                                    <div className="text-blue-900">{lifePhaseResponseDTO.oldStateNumberResponseDTO.description}</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        !data ? (
                            <p style={{ color: "red" }}>Bạn cần nâng cấp vip để xem thông tin này.</p>
                        ) : !Array.isArray(data) ? (
                            <div>
                                <p style={{ color: "red" }}>
                                    {data.name} của bạn là: {data.number}
                                </p>
                                {FormatParagraph(data.description).map((paragraph, index) => (
                                    <p key={index}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <div>
                                {data.map((item, index) => (
                                    <div key={index}>
                                        <div style={{ color: "red", fontWeight: "bold" }}>{`${item.name} thứ ${index + 1} là: số ${item.number}`}</div>
                                        <div className="text-blue-900">{item.description}</div>
                                        {FormatParagraph(item.description).map((paragraph, index) => (
                                            <p key={index}>
                                                {paragraph}
                                            </p>
                                        ))}
                                        {item.personalMonthResponseDTOList && (
                                            <div>
                                                {item.personalMonthResponseDTOList.map((monthItem, monthIndex) => (
                                                    <div key={monthIndex}>
                                                        <div style={{ color: "red", fontWeight: "bold" }}>{`${monthItem.name}: Tháng ${monthIndex + 1} của bạn là số ${monthItem.number}`}</div>
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
                        )
                    )}
                </div>
            </Panel>
        </>
    );
}

export default ReportPanel;
