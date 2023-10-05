import ShopHeader from "~/components/commons/header/ShopHeader";
import {useState} from "react";
import Footer from "~/components/commons/Footer";

const ShopLayout = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    

    return (
        <>

            <div id="canvas">
                <div id="box_wrapper">
                    <ShopHeader loggedIn={loggedIn}/>
                    {children}
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default ShopLayout;