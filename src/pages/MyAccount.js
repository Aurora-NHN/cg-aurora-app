import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getInfo, selectUserInfo,} from "~/features/userSlice";
import "react-toastify/dist/ReactToastify.css";

import {useNavigate} from "react-router-dom";
import NavigateForUser from "~/components/commons/NavigateForUser";

export default function MyAccount() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector(selectUserInfo);

    useEffect(() => {
        dispatch(getInfo());
    }, []);

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
                                        {userInfo ? (
                                            <form
                                                className="woocommerce-EditAccountForm edit-account"
                                            >
                                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
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
                                                        value={userInfo.fullName}
                                                        readOnly={true}
                                                    />
                                                </p>
                                                <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                                                    <label
                                                        htmlFor="count"
                                                        className="d-block ms-3 mb-1"
                                                    >
                                                        Count :
                                                        <span id="count" style={{padding:"1rem"}}>
                                                        {userInfo.count}
                                                    </span>
                                                    </label>

                                                </p>
                                                <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
                                                    <label htmlFor="totalCount" className="d-block ms-3 mb-1">
                                                        Total Count:
                                                        <span style={{padding:"1rem"}}>
                                                            {userInfo.totalCount}
                                                        </span>
                                                    </label>

                                                </p>
                                                <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
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
                                                        value={userInfo.phoneNumber}
                                                        readOnly={true}
                                                    />
                                                </p>
                                                <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
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
                                                            value={userInfo.gender}
                                                            readOnly={true}
                                                        />
                                                    </div>
                                                </p>
                                                <div className="clear"></div>

                                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                    <label htmlFor="email" className="d-block ms-3 mb-1">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        value={userInfo.email}
                                                        readOnly={true}
                                                    />
                                                </p>

                                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"></p>

                                                <div className="clear"></div>
                                                <p>
                                                    <input
                                                        type="submit"
                                                        className="woocommerce-Button button"
                                                        name="edit_account_details"
                                                        value="Edit Account"
                                                        onClick={handleEditInfo}
                                                    />
                                                </p>
                                            </form>
                                        ) : (
                                            <p>no data</p>
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
