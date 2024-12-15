import React from "react";
import { Container, Typography } from "@mui/material";

const AuthLayout = ({ children }) => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Authentication
      </Typography>
      {children}
    </Container>
  );
};

export default AuthLayout;
