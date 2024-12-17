import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import colors from "../utils/colors";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: colors.primary.main, padding: "20px 0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              color="secondary.contrastText"
              gutterBottom
            >
              Pkfokam Alumni
            </Typography>
            <Typography variant="body2" color="secondary.contrastText">
              Connecting generations of excellence since [Year]
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Link href="#" color="secondary.contrastText" underline="none">
                  FAQ
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" color="secondary.contrastText" underline="none">
                  Membership
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" color="secondary.contrastText" underline="none">
                  Events
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" color="secondary.contrastText" underline="none">
                  Contact Us
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="secondary.contrastText"
          align="center"
          style={{ marginTop: "20px" }}
        >
          © 2024 Pkfokam Alumni. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
