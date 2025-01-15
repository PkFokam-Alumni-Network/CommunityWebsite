import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-container bg-[#F3EFF5]">{children}</div>
    </>
  );
};

export default Layout;
