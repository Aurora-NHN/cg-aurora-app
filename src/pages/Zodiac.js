import React from "react";
import ZodiacSideBar from "./zodiac/ZodiacSidebar";

const Zodiac = ({ children }) => {
  return (
    <section className="ds s-py-90 s-py-xl-80 c-gutter-60">
      <div className="container">
        <div className="row"></div>
        <ZodiacSideBar>{children}</ZodiacSideBar>
      </div>
    </section>
  );
};

export default Zodiac;
