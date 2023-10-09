import ShopHeader from "~/components/commons/ShopHeader";
import {useState} from "react";
import Footer from "~/components/commons/Footer";
import LoginModal from "~/components/commons/LoginModal";
import RegisterModal from "~/components/commons/RegisterModal";

const ShopLayout = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    

    return (
      <>
        <LoginModal />
        <RegisterModal />

        <div id="canvas">
          <div id="box_wrapper">
            <ShopHeader loggedIn={loggedIn} />
            {children}
            <Footer />
          </div>
        </div>
      </>
    );
};

export default ShopLayout;