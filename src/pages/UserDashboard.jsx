import React, { useState } from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Divider,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  Drawer,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import {
  People,
  Event,
  Message,
  Settings,
  Logout,
  Menu as MenuIcon,
  Home,
  Source,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import HomePage from "./HomePage";

const drawerWidth = 240;

const menuItems = [
  { text: "Home", icon: <Home />, path: "/dashboard" },
  {
    text: "Alumni Directory",
    icon: <People />,
    path: "/dashboard/alumni-directory",
  },
  { text: "Events", icon: <Event />, path: "/dashboard/events" },
  {
    text: "Announcements",
    icon: <Message />,
    path: "/dashboard/announcements",
  },
  {
    text: "Resources",
    icon: <Source />,
    path: "/dashboard/resources",
  },
  { text: "Settings", icon: <Settings />, path: "/dashboard/settings" },
];

export default function AlumniDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [openDrawer, setOpenDrawer] = useState(false);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("650"));

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background:
          "radial-gradient( circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(255,188,224,1)  100.2% );",
        zIndex: 1000,
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "transparent",
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={openDrawer}
        onClose={toggleDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid",
            borderColor: "grey.200",
          },
        }}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ p: 2, borderBottom: 1, borderColor: "grey.200" }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              PKF-Alumni
            </Typography>
          </Box>

          <Box sx={{ flex: 1, mt: 2 }}>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  py: 1.5,
                  px: 2,
                  bgcolor:
                    location.pathname === item.path
                      ? "primary.light"
                      : "transparent",
                  "&:hover": {
                    bgcolor: "primary.light",
                    "& .MuiListItemIcon-root": {
                      color: "primary.main",
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                    color:
                      location.pathname === item.path
                        ? "primary.main"
                        : "grey.600",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    variant: "body2",
                    color:
                      location.pathname === item.path
                        ? "primary.main"
                        : "inherit",
                  }}
                />
              </ListItem>
            ))}
          </Box>

          <Divider />
          <Box sx={{ p: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<Logout />}
              onClick={handleLogout}
              sx={{
                justifyContent: "flex-start",
                px: 2,
                py: 1,
                "&:hover": {
                  backgroundColor: "primary.light",
                  boxShadow: "none",
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          maxWidth: "100%",
          overflow: "auto",
        }}
      >
        <Toolbar /> {/* This is to offset the fixed AppBar */}
        {location.pathname === "/dashboard" ? <HomePage /> : <Outlet />}
      </Box>
    </Box>
  );
}
