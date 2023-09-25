import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyle from "./components/common/GlobalStyle";

function App() {
  return (
    <GlobalStyle>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </GlobalStyle>
  );
}

export default App;
