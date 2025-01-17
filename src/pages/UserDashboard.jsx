import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Divider,
  InputBase,
  Button,
  InputAdornment,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  Drawer,
  Grid2,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import {
  Dashboard,
  People,
  Event,
  Message,
  Settings,
  Search,
  Logout,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import alumniFakeData from "../utils/alumnidata";
import AlumniCard from "../components/AlumniCard";

const drawerWidth = 240;

const alumniData = new Array(10).fill(alumniFakeData);

const menuItems = [
  { text: "Dashboard", icon: <Dashboard /> },
  { text: "Alumni Directory", icon: <People /> },
  { text: "Events", icon: <Event /> },
  { text: "Messages", icon: <Message /> },
  { text: "Settings", icon: <Settings /> },
];

const SearchBar = ({ onSearch }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      bgcolor: "grey.100",
      borderRadius: 2,
      p: 1,
      width: 300,
    }}
  >
    <InputBase
      placeholder="Search alumni..."
      sx={{ ml: 1, flex: 1 }}
      onChange={(e) => onSearch(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <Search color="primary" />
        </InputAdornment>
      }
    />
  </Box>
);

export default function AlumniDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);
  const [openDrawer, setOpenDrawer] = useState(false);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = alumniData.filter((alumni) => {
      const searchStr = `${alumni.name} ${alumni.role}`.toLowerCase();
      return searchStr.includes(query.toLowerCase());
    });
    setFilteredAlumni(filtered);
  };

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
          "radial-gradient( circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(165,255,205,1) 100.2% );",
        zIndex: 1000,
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        color="radial-gradient( circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(165,255,205,1) 100.2% );"
      >
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar onSearch={handleSearch} />
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
                sx={{
                  py: 1.5,
                  px: 2,
                  "&:hover": {
                    bgcolor: "primary.light",
                    "& .MuiListItemIcon-root": {
                      color: "primary.main",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: "grey.600" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ variant: "body2" }}
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

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid2 container spacing={3}>
            {filteredAlumni.map((alumni, index) => (
              <Grid2 item key={index} xs={12} sm={6} md={4}>
                <AlumniCard alumni={alumni} />
              </Grid2>
            ))}
            {filteredAlumni.length === 0 && (
              <Box sx={{ width: "100%", textAlign: "center", mt: 4 }}>
                <Typography variant="h6" color="text.secondary">
                  No alumni found matching your search.
                </Typography>
              </Box>
            )}
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
}
