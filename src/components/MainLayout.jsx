// filepath: /home/yanndjoumessi/Desktop/BetterEngineers/CommunityWebsite/src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Menu,
  List,
  ListItem,
} from "@mui/material";
import colors from "../utils/colors";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container style={{ marginTop: "20px" }}>{children}</Container>
    </div>
  );
};

export default Layout;
