import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyle from "./components/GlobalStyle";

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
