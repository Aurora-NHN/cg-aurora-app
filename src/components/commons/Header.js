import DynamicHeader from "~/components/commons/header/DynamicHeader";
import TopLineHeader from "~/components/commons/header/TopLineHeader";
import TopLogoHeader from "~/components/commons/header/TopLogoHeader";

function Header() {
    return (
        <>
            <TopLineHeader/>
            <TopLogoHeader/>
            <DynamicHeader/>
        </>
    )
}

export default Header