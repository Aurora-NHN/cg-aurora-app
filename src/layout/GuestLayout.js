import Header from "~/components/commons/Header";
import Footer from "~/components/commons/Footer";
import LoginModal from "~/components/commons/LoginModal";
import RegisterModal from "~/components/commons/RegisterModal";
import ForgotPassword from "~/components/commons/ForgotPassword";

function GuestLayout({ children }) {
  return (
    <>
      <LoginModal />
      <RegisterModal />

      <div id="canvas">
        <div id="box_wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
export default GuestLayout;
