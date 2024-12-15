// filepath: /home/yanndjoumessi/Desktop/BetterEngineers/CommunityWebsite/src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/alumni">
            Alumni
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "20px" }}>{children}</Container>
    </div>
  );
};

export default Layout;
