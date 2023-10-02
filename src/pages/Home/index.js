import { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeSection from "src/components/HomeSection";
import { selectUserLogin } from "~/features/user/userSlice";

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
