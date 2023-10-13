import { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeSection from "~/components/main/homepage/HomeSection";
import { selectUserLogin } from "~/features/loginSlice";
import React from "react";
import { selectToken } from "~/features/userSlice";
import ZodiacSection from "~/components/main/homepage/ZodiacSection";
import Pricing from "~/components/main/homepage/Pricing";

function Home() {
  const userLogin = useSelector(selectToken);

  useEffect(() => {
    if (userLogin == null) {
    }
  }, [userLogin]);
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <HomeSection />
        <ZodiacSection />
        <Pricing />
      </div>
    </>
  );
}
export default Home;
