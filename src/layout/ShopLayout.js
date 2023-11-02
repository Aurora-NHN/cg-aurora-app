import ShopHeader from "~/components/commons/ShopHeader";
import Footer from "~/components/commons/Footer";
import LoginModal from "~/components/commons/LoginModal";
import RegisterModal from "~/components/commons/RegisterModal";

const ShopLayout = ({children}) => {

    return (
        <>
            <LoginModal/>
            <RegisterModal/>
            <div id="canvas">
                <div id="box_wrapper">
                    <ShopHeader/>
                    <div className="m-0 p-0 main-wrapper">
                        {children}
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default ShopLayout;