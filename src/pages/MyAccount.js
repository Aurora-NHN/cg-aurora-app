import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getInfo, selectLoading, selectUserInfo,} from "~/features/userSlice";
import "react-toastify/dist/ReactToastify.css";

import {useNavigate} from "react-router-dom";
import NavigateForUser from "~/components/commons/NavigateForUser";

export default function MyAccount() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector(selectUserInfo);
    const loading = useSelector(selectLoading);
    const [onLoading, setOnLoading] = useState(true);

    useEffect(() => {
        dispatch(getInfo());
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setOnLoading(false);
        }, 700);
    }, [loading]);

    const handleEditInfo = () => {
        navigate("/account-detail");
    };

    return (
        <section className="ds s-py-90 s-py-xl-100 c-gutter-60">
            <div className="container">
                <div className="row">
                    <main className="col-lg-12">
                        <article>
                            {(userInfo.count === 0) ? (
                                <header className="entry-header">
                                    <h1 className="entry-title">Account details</h1>
                                </header>
                            ) : (
                                <header className="entry-header">
                                    <h1 className="entry-title">Account VIP details</h1>
                                </header>
                            )}
                            <div className="entry-content">
                                <div className="woocommerce">

                                    <NavigateForUser/>

                                    <div className="woocommerce-MyAccount-content">
                                        {onLoading
                                            ? (<h3>Loading...</h3>)
                                            : (
                                                <form className="woocommerce-EditAccountForm edit-account">
                                                    <div
                                                        className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                        <label
                                                            htmlFor="fullName"
                                                            className="d-block ms-3 mb-1"
                                                        >
                                                            Full name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="fullName"
                                                            id="fullName"
                                                            placeholder="Full name"
                                                            value={userInfo.fullName || ''}
                                                            readOnly={true}
                                                        />
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-between mt-4 border border-dark rounded-5 p-2">
                                                    <span
                                                        className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                                                    <label className="d-block ms-3 mb-1">
                                                        Vip Count :
                                                        <span id="count" style={{padding: "1rem"}}>
                                                        {userInfo.count}
                                                    </span>
                                                    </label>

                                                    </span>
                                                        <span
                                                            className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
                                                    <label className="d-block ms-3 mb-1">
                                                        Total Purchased:
                                                        <span style={{padding: "1rem"}}>
                                                            {userInfo.totalCount}
                                                        </span>
                                                    </label>

                                                    </span>
                                                    </div>
                                                    <div
                                                        className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first mt-2">
                                                        <label
                                                            htmlFor="phoneNumber"
                                                            className="d-block ms-3 mb-1"
                                                        >
                                                            Phone number
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="phoneNumber"
                                                            id="phoneNumber"
                                                            placeholder="Phone number"
                                                            value={userInfo.phoneNumber || ''}
                                                            readOnly={true}
                                                        />
                                                    </div>
                                                    <div
                                                        className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last mt-2">
                                                        <label htmlFor="gender" className="d-block ms-3 mb-1">
                                                            Gender
                                                        </label>

                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="gender"
                                                                id="gender"
                                                                placeholder="Gender"
                                                                value={userInfo.gender || ''}
                                                                readOnly={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="clear"></div>

                                                    <div
                                                        className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mt-2">
                                                        <label htmlFor="email" className="d-block ms-3 mb-1">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            name="email"
                                                            placeholder="Email"
                                                            value={userInfo.email || ''}
                                                            readOnly={true}
                                                        />
                                                    </div>
                                                    <div className="mt-2 d-flex justify-content-between">
                                                        <div></div>
                                                        <input
                                                            type="submit"
                                                            className="woocommerce-Button button"
                                                            name="edit_account_details"
                                                            value="Edit Account"
                                                            onClick={handleEditInfo}
                                                        />
                                                    </div>
                                                </form>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </section>
    );
}
