import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import NavigateForUser from "~/components/commons/NavigateForUser";
import AllNumerologyReport from "~/components/main/numerologyReportHistory/AllNumerologyReport";
import {useDispatch} from "react-redux";
import {findPageNumerologyReports} from "~/features/numerologySlice";

function  NumerologyReportHistory(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [pageNumber, setPageNumber] = useState(0);
    useEffect(()=>{
        dispatch(findPageNumerologyReports(pageNumber));
    },[])
return(
        <>
            <div>
                <section className="ds s-py-90 s-py-xl-150">
                    <div className="container">
                        <div className="row">
                            <main className="col-lg-12">
                                <article id="post-1708" className="post-1708 page type-page status-publish hentry">
                                    <header className="entry-header" >
                                        <h1 className="entry-title" style={{paddingTop:'10px'}}>Lịch sử xuất báo cáo Vip của bạn</h1>
                                    </header>
                                    <div className="entry-content">
                                        <div className="woocommerce">
                                           <NavigateForUser/>
                                            <div className="woocommerce-MyAccount-content">
                                                <div className="woocommerce-message woocommerce-message--info woocommerce-Message woocommerce-Message--info woocommerce-info"

                                                >
                                                    <Link to="/numerology" className="woocommerce-Button button"  style={{transform:'translateY(40px)'}}>
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