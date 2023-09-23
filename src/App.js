import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyle from "./components/global_style/GlobalStyle";

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
