import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectNumerologyReports, setNumerologyDetail} from "~/features/numerologySlice";
import {useNavigate} from "react-router-dom";
import {Button} from "primereact/button";
import { format, parseISO } from 'date-fns';

function AllNumerologyReport() {
    const reports = useSelector(selectNumerologyReports);
    const dispatch = useDispatch();
    const navgigate = useNavigate();


    const handleClickReportDetail = (report) => {
        dispatch(setNumerologyDetail(report));
        navgigate("/numerology-detail");
    }
    return (
        <table
            className="woocommerce-orders-table woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders account-orders-table">
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
                reports.map(report => (
                    <tr key={report.id} className="woocommerce-orders-table__row woocommerce-orders-table__row--status-processing order">
                        <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number"
                            data-title="Order">
                            {report.id}
                        </td>
                        <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date"
                            data-title="Date">
                            <time dateTime={report.createTime}>
                                {format(parseISO(report.createTime), "dd/MM/yyyy HH:mm:ss")}
                            </time>
                        </td>
                        <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status"
                            data-title="Status">
                            {`${report.fullName.toUpperCase()} - ${report.dayOfBirth}/${report.monthOfBirth}/${report.yearOfBirth}`}

                        </td>

                        <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions"
                            data-title="Actions">
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
    );
}

export default AllNumerologyReport;