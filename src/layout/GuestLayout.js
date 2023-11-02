import Header from "~/components/commons/Header";
import Footer from "~/components/commons/Footer";
import LoginModal from "~/components/commons/LoginModal";
import RegisterModal from "~/components/commons/RegisterModal";

function GuestLayout({ children }) {
  return (
    <>
      <LoginModal />
      <RegisterModal />

      <div id="canvas">
        <div id="box_wrapper header_absolute">
          <Header />
            <div className="m-0 p-0 main-wrapper">
                {children}
            </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default GuestLayout;
