import React from "react";
import { Container } from "@mui/material";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-container">{children}</div>
    </>
  );
};

export default Layout;
