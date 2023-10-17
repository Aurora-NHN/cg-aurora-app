import TopLineHeader from "~/components/commons/header/TopLineHeader";
import TopLogoShopHeader from "~/components/commons/header/TopLogoShopHeader";
import { selectToken, setToken } from "~/features/userSlice";
import TopLogoHeader from "./header/TopLogoHeader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DynamicHeader from "./header/DynamicHeader";

function ShopHeader() {
  const token = useSelector(selectToken);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [token]);

  return (
    <>
      <TopLineHeader />
      {loggedIn ? <TopLogoShopHeader /> : <TopLogoHeader />}
      {/* <DynamicHeader /> */}
    </>
  );
}

export default ShopHeader;
