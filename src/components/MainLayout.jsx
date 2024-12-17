// filepath: /home/yanndjoumessi/Desktop/BetterEngineers/CommunityWebsite/src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import colors from "../utils/colors";
import { Container, Typography } from "@mui/material";
import Banner from "./Banner";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Banner />
      <Container style={{ marginTop: "20px" }}>{children}</Container>
    </div>
  );
};

export default Layout;
