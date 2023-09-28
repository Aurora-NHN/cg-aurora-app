import Header from "~/components/Header";
import Footer from "~/components/Footer";
import LoginModal from "~/components/LoginModal";
import RegisterModal from "~/components/RegisterModal";

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