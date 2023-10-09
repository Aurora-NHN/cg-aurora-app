import { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeSection from "~/components/main/homepage/HomeSection";
import { selectUserLogin } from "~/features/loginSlice";
import React from "react";
import { selectToken } from "~/features/userSlice";

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
      </div>
    </>
  );
}
export default Home;
