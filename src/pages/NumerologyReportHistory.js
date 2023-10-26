import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import NavigateForUser from "~/components/commons/NavigateForUser";
import AllNumerologyReport from "~/components/main/numerologyReportHistory/AllNumerologyReport";
import {useDispatch, useSelector} from "react-redux";
import {findAllNumerologyReportForUser} from "~/features/numerologySlice";

function  NumerologyReportHistory(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(findAllNumerologyReportForUser());
    },[])

    return(
        <>
            <div>
                <section className="ds s-py-90 s-py-xl-150">
                    <div className="container">
                        <div className="row">
                            <main className="col-lg-12">
                                <article id="post-1708" className="post-1708 page type-page status-publish hentry">
                                    <header className="entry-header">
                                        <h1 className="entry-title">Lịch sử xuất báo cáo Vip của bạn</h1>
                                    </header>
                                    <div className="entry-content">
                                        <div className="woocommerce">
                                           <NavigateForUser/>
                                            <div className="woocommerce-MyAccount-content">
                                                <div className="woocommerce-message woocommerce-message--info woocommerce-Message woocommerce-Message--info woocommerce-info">
                                                    <Link to="/numerology" className="woocommerce-Button button">
                                                        Di chuyển đến trang tra cứu
                                                    </Link>
                                                    Bạn có muốn thêm mới báo cáo thần số học?
                                                </div>
                                                <AllNumerologyReport/>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </main>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
export default NumerologyReportHistory;