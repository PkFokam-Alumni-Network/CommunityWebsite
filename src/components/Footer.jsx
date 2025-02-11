import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Box,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import colors from "../constants/colors";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: colors.secondary.dark, padding: "2rem 0" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
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
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              color="secondary.contrastText"
              fontWeight={700}
              gutterBottom
            >
              Quick Links
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Link
                  href="#faq-home-main"
                  color="secondary.contrastText"
                  underline="none"
                >
                  FAQ
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  href="#contact-us-home-main"
                  color="secondary.contrastText"
                  underline="none"
                >
                  Contact Us
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              color="secondary.contrastText"
              fontWeight={700}
              gutterBottom
            >
              Follow Us
            </Typography>
            <Box>
              <IconButton
                href="#"
                sx={{ color: "secondary.contrastText" }}
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="#"
                sx={{ color: "secondary.contrastText" }}
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="#"
                sx={{ color: "secondary.contrastText" }}
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="#"
                sx={{ color: "secondary.contrastText" }}
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              color="secondary.contrastText"
              fontWeight={700}
              gutterBottom
            >
              Contact
            </Typography>
            <Typography variant="body2" color="secondary.contrastText">
              123 Alumni St.
              <br />
              City, State, ZIP
              <br />
              Email: info@pkfokamalumni.org
              <br />
              Phone: (123) 456-7890
            </Typography>
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
          sx={{
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
