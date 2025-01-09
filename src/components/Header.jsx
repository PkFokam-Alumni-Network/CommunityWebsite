import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionListItem = motion(ListItem);

const Header = () => {
  const menu = ["Membership", "Graduation", "Events"];

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
    <AppBar position="fixed" elevation={0} color="primary">
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
        <Box className="flex items-center">
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
            PKFOKAM ALUMNI
          </MotionTypography>

          <List sx={{ display: "flex" }}>
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
                  {item}
                </Typography>
              </MotionListItem>
            ))}
          </List>
        </Box>

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
            "&:hover": {
              borderColor: "primary.contrastText",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          Login
        </MotionButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
