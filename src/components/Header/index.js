import DynamicHeader from "~/components/commons/DynamicHeader";
import TopLineHeader from "~/components/commons/TopLineHeader";
import TopLogoHeader from "~/components/commons/TopLogoHeader";

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