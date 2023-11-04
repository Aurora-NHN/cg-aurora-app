import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectNumerologyReports,
    setNumerologyDetail,
    findPageNumerologyReports,
    selectNumerologyReportTotalPages, selectPageNumerologyReports
} from "~/features/numerologySlice";
import {useNavigate} from "react-router-dom";
import {Button} from "primereact/button";
import {format, parseISO} from 'date-fns';
import "react-toastify/dist/ReactToastify.css";
import Pagination from "~/components/main/products/Pagination";

function AllNumerologyReport() {
    const reports = useSelector(selectPageNumerologyReports);
    const dispatch = useDispatch();
    const navgigate = useNavigate();
    const [content, setContent] = useState([]);


    useEffect(()=>{

    }, [])

    const handleClickReportDetail = (report) => {
        dispatch(setNumerologyDetail(report));
        navgigate("/numerology-detail");
    }
    useEffect(()=>{
        if (reports){
            setContent(reports.content);
        }
    },[reports])

    const handleBackPage = () => {
        if (!reports.first){
            dispatch(findPageNumerologyReports(reports.number - 1))
        }
    }
    const handleNextPage = () => {
        if (!reports.last){
            dispatch(findPageNumerologyReports(reports.number + 1))
        }
    }

    const handleSubmitPage = (pageNumber) => {
        dispatch(findPageNumerologyReports(pageNumber))
    }

    return (
        <>
            <table
                className="bg-darkblue box-shadow shop_table shop_table_responsive my_account_orders account-orders-table">
                <thead>
                <tr>
                    <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-number">
                        <span className="nobr">Stt</span>
                    </th>
                    <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-date">
                        <span className="nobr">Thời gian tạo báo cáo</span>
                    </th>
                    <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-status">
                        <span className="nobr">Nội dung</span>
                    </th>
                    <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-actions">
                        <span className="nobr">Hành động</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    content?.map((report, index) => (
                        <tr key={report.id} className="hover-opacity">
                            <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number"
                                data-title="Order">
                                {index + 1}
                            </td>
                            <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date"
                                data-title="Date">
                                <time dateTime={report.createTime}>
                                    {format(parseISO(report.createTime), "dd/MM/yyyy HH:mm:ss")}
                                </time>
                            </td>
                            <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status"
                                data-title="Status"
                            >
                                {`${report.fullName.toUpperCase()} - ${report.dayOfBirth}/${report.monthOfBirth}/${report.yearOfBirth}`}

                            </td>

                            <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions"
                                data-title="Actions"
                                style={{transform:'translateY(40px)'}}
                            >
                                <Button
                                    rounded
                                      onClick={() =>handleClickReportDetail(report)}
                                      className="woocommerce-button button view">
                                    Xem chi tiết
                                </Button>
                            </td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Pagination
                totalPage={reports.totalPages}
                pageNumber={reports.number + 1}
                onNextPage={handleNextPage}
                onPrevPage={handleBackPage}
                onPageClick={handleSubmitPage}
            />
        </>
    );
}

export default AllNumerologyReport;