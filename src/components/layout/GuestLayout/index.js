import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";

function GuestLayout({children}){

    return(
        <>
            {/*<div className="preloader">*/}
            {/*    <div className="preloader_image pulse"></div>*/}
            {/*</div>*/}

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