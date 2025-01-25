import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem,
  Box,
  IconButton,
  Drawer,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import { NorthEast, Menu } from "@mui/icons-material";
import logo from "../assets/logo-bg.png";

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionListItem = motion(ListItem);

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menu = ["Membership", "About Us", "Onboarding"];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="primary"
        sx={{
          backgroundColor: "rgba(74, 144, 226, 0.7)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <MotionTypography
              variant="h6"
              variants={logoVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              sx={{
                fontWeight: 700,
                mr: 4,
                color: "primary.contrastText",
                cursor: "pointer",
              }}
            >
              <img
                src={logo}
                alt="PKFOKAM ALUMNI"
                style={{
                  width: "auto",
                  height: "40px",
                  scale: 10,
                  paddingLeft: 21,
                  paddingTop: 2.75,
                }}
                sx={{
                  "@media (max-width: 600px)": {
                    height: "30px",
                    scale: 5,
                    paddingLeft: 10,
                    paddingTop: 1.75,
                  },
                }}
              />
            </MotionTypography>
          </Link>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            <List sx={{ display: "flex", marginLeft: "auto" }}>
              {menu.map((item, index) => (
                <MotionListItem
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  sx={{ width: "auto" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "primary.contrastText",
                      cursor: "pointer",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0%",
                        height: "2px",
                        bottom: -2,
                        left: 0,
                        backgroundColor: "primary.contrastText",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item.toLowerCase() === "onboarding" ? (
                      <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                    ) : (
                      item
                    )}
                  </Typography>
                  <NorthEast
                    sx={{ color: "primary.contrastText", fontSize: 20 }}
                  />
                </MotionListItem>
              ))}
            </List>

            <MotionButton
              component={Link}
              to="/login"
              variant="outlined"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              sx={{
                color: "primary.contrastText",
                borderColor: "primary.contrastText",
                marginLeft: 5,
                "&:hover": {
                  borderColor: "primary.contrastText",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Login
            </MotionButton>
          </Box>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
          onKeyDown={() => setDrawerOpen(false)}
        >
          <List>
            {menu.map((item, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={`/${item.toLowerCase()}`}
                sx={{
                  "&:hover": { backgroundColor: "#7EB2FF", color: "#FFFFF0" },
                  "&:active": { backgroundColor: "#7EB2FF", color: "#FFFFF0" },
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
            <ListItem
              button
              component={Link}
              to="/login"
              sx={{
                "&:hover": { backgroundColor: "#7EB2FF", color: "#FFFFF0" },
                "&:active": { backgroundColor: "#7EB2FF", color: "#FFFFF0" },
              }}
            >
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
