import React from "react";
import { Container, Grid, Typography, Link, Divider } from "@mui/material";
import colors from "../utils/colors";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: colors.secondary.dark, padding: "2rem 0" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              color="secondary.contrastText"
              fontWeight={700}
              gutterBottom
            >
              Pkfokam Alumni
            </Typography>
            <Typography variant="body2" color="secondary.contrastText">
              Connecting generations of excellence since 2007.
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
        <Divider
          variant="fullWidth"
          sx={{
            margin: "20px 0",
            backgroundColor: colors.secondary.contrastText,
          }}
        />
        <Typography
          variant="body2"
          color="secondary.contrastText"
          align="center"
          style={{
            marginTop: "20px",
            fontWeight: 700,
          }}
        >
          © 2024 Pkfokam Alumni. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
