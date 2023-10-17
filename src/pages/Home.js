import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import HomeSection from "~/components/main/homepage/HomeSection";
import {selectToken} from "~/features/userSlice";
import ZodiacSection from "~/components/main/homepage/ZodiacSection";

// import NumerologyAdding from "~/components/main/numerology/NumerologyAdding";

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
      </div>
    </>
  );
}
export default Home;
