import React from 'react';
import {Link} from "react-router-dom";

function NavigateForUser(){
    return(
        <nav className="woocommerce-MyAccount-navigation">
            <ul>
                <li className="is-active">
                    <Link to="/account-detail">My Account</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/change-password">Change Password</Link>
                </li>
                <li>
                    <Link to="/numerology-report-history">Your vip numerology report</Link>
                </li>
            </ul>
        </nav>


    );

}
export default NavigateForUser;