import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyle from "./components/commons/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer } from "react-toastify";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {CLIENT_ID} from "~/app/constants";
import {ConfirmDialog} from "primereact/confirmdialog";

function App() {
  return (
    <GlobalStyle>
      <Provider store={store}>
        <BrowserRouter>
            <GoogleOAuthProvider clientId={CLIENT_ID}>
                <AppRoutes/>
                <ToastContainer/>
                <ConfirmDialog />
            </GoogleOAuthProvider>
        </BrowserRouter>
      </Provider>
    </GlobalStyle>
  );
}

export default App;
