import {Route, Routes} from "react-router-dom";
import {ROUT_DATA} from "./routeData";
import Home from "~/pages/home/Home";

function AppRoutes(){

    return(
        <Routes>
            {
                ROUT_DATA.map((route, index) => {
                    const Layout = route.layout
                    return <Route key={index} path={"/"} element={<Layout><Home/></Layout>}/>
                })
            }

        </Routes>
    )
}
export default AppRoutes