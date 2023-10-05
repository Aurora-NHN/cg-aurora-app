import { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeSection from "~/components/main/homepage/HomeSection";
import { selectUserLogin } from "~/features/userSlice";

function Home() {
  const userLogin = useSelector(selectUserLogin);

  useEffect(() => {
    console.log("user");
    console.log(userLogin);
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
