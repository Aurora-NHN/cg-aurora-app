import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import HomeSection from "~/components/main/homepage/HomeSection";
import {selectToken} from "~/features/userSlice";

// import NumerologyAdding from "~/components/main/numerology/NumerologyAdding";
import Pricing from "~/pages/Pricing";
import About from "~/components/main/homepage/About";
import Tarot from "~/components/main/homepage/Tarot";
import Colleagues from "~/components/main/homepage/Colleagues";
import Swal from "sweetalert2";
import {selectBillStatus, selectOrderSuccess} from "~/features/paymentSlice";

function Home() {
    const paymentSuccess = useSelector(selectOrderSuccess)
    const userLogin = useSelector(selectToken);
    const status = useSelector(selectBillStatus);
    const dispatch = useDispatch();
    const [message, setMessage] = useState(null);
    const statusCookieValue = getCookie("paymentStatus");

    function getCookie(cookieName) {
        const name = cookieName + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        console.log(cookieArray)
        for(let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return null;
    }

    useEffect(() => {
        if(statusCookieValue !== null){
            if(statusCookieValue === 'true'){
                paymentSuccessAlert();
            } else {
                paymentFailAlert();
            }
        }
    }, []);

    const paymentSuccessAlert = () => {
        Swal.fire({
            title: 'Success!',
            text: `Thanh toán thành công! Hóa đơn đã được gửi đến Email`,
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }

    const paymentFailAlert = () => {
        Swal.fire({
            title: 'Error!',
            text: `Thanh toán thất bại!`,
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }

    return (
        <>
            <div style={{minHeight: "100vh"}}>
                <HomeSection/>
                <About/>
                <Colleagues/>
                <Tarot/>
                <Pricing/>
            </div>
        </>
    );
}

export default Home;
