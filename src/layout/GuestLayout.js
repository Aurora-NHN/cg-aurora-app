import Header from "~/components/commons/Header";
import Footer from "~/components/commons/Footer";
import LoginModal from "~/components/commons/LoginModal";
import RegisterModal from "~/components/commons/RegisterModal";

function GuestLayout({children}){

    return(
        <>
            {/*<div className="preloader">*/}
            {/*    <div className="preloader_image pulse"></div>*/}
            {/*</div>*/}
            <LoginModal/>
            <RegisterModal/>

            <div id="canvas">
                <div id="box_wrapper">
                    <Header/>
                    {children}
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default GuestLayout