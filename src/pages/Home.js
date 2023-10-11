import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeSection from "~/components/main/homepage/HomeSection";
import { selectUserLogin } from "~/features/loginSlice";
import React from "react";
import { selectToken } from "~/features/userSlice";
import ZodiacSection from "~/components/main/homepage/ZodiacSection";
import { selectUserLogin } from "~/features/userSlice";
import NumeroloryFormInput from "~/components/main/numerolory/NumeroloryFormInput";
import NumerologyAdding from "~/components/main/numerolory/NumerologyAdding";

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
        <NumerologyAdding/>
      </div>
    </>
  );
}
export default Home;
