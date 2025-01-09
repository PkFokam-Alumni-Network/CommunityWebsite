import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Typography,
  Toolbar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Box,
  Avatar,
  IconButton,
  Divider,
  InputBase,
  InputAdornment,
  Button,
} from "@mui/material";

import {
  Dashboard,
  People,
  Event,
  Message,
  Settings,
  Phone,
  Email,
  LocationOn,
  Work,
  Search,
  Logout,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <Dashboard /> },
  { text: "Alumni Directory", icon: <People /> },
  { text: "Events", icon: <Event /> },
  { text: "Messages", icon: <Message /> },
  { text: "Settings", icon: <Settings /> },
];

const alumniData = [
  {
    name: "John Smith",
    image: "/api/placeholder/150/150",
    role: "Software Engineer",
    email: "john.smith@email.com",
    phone: "+1 234 567 8900",
    location: "New York, USA",
    graduation: "2020",
  },
  {
    name: "Sarah Johnson",
    image: "/api/placeholder/150/150",
    role: "Marketing Manager",
    email: "sarah.j@email.com",
    phone: "+1 234 567 8901",
    location: "Los Angeles, USA",
    graduation: "2019",
  },
  {
    name: "Michael Brown",
    image: "/api/placeholder/150/150",
    role: "Data Scientist",
    email: "michael.b@email.com",
    phone: "+1 234 567 8902",
    location: "Chicago, USA",
    graduation: "2021",
  },
  {
    name: "Emily Davis",
    image: "/api/placeholder/150/150",
    role: "Product Manager",
    email: "emily.d@email.com",
    phone: "+1 234 567 8903",
    location: "San Francisco, USA",
    graduation: "2018",
  },
  {
    name: "Emily Davis",
    image: "/api/placeholder/150/150",
    role: "Product Manager",
    email: "emily.d@email.com",
    phone: "+1 234 567 8903",
    location: "San Francisco, USA",
    graduation: "2018",
  },
  {
    name: "Emily Davis",
    image: "/api/placeholder/150/150",
    role: "Product Manager",
    email: "emily.d@email.com",
    phone: "+1 234 567 8903",
    location: "San Francisco, USA",
    graduation: "2018",
  },
  {
    name: "Emily Davis",
    image: "/api/placeholder/150/150",
    role: "Product Manager",
    email: "emily.d@email.com",
    phone: "+1 234 567 8903",
    location: "San Francisco, USA",
    graduation: "2018",
  },
  {
    name: "Emily Davis",
    image: "/api/placeholder/150/150",
    role: "Product Manager",
    email: "emily.d@email.com",
    phone: "+1 234 567 8903",
    location: "San Francisco, USA",
    graduation: "2018",
  },
  {
    name: "Emily Davis",
    image: "/api/placeholder/150/150",
    role: "Product Manager",
    email: "emily.d@email.com",
    phone: "+1 234 567 8903",
    location: "San Francisco, USA",
    graduation: "2018",
  },
  {
    name: "Emily Davis",
    image: "/api/placeholder/150/150",
    role: "Product Manager",
    email: "emily.d@email.com",
    phone: "+1 234 567 8903",
    location: "San Francisco, USA",
    graduation: "2018",
  },
];

const AlumniCard = ({ alumni }) => (
  <Card
    elevation={0}
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      bgcolor: "#fff",
      transition: "all 0.2s",
      "&:hover": {
        bgcolor: "grey.50",
        transform: "translateY(-2px)",
      },
    }}
  >
    <CardContent sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Avatar
          src={alumni.image}
          sx={{
            width: 56,
            height: 56,
            mr: 2,
            border: "2px solid",
            borderColor: "primary.main",
          }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            {alumni.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {alumni.role}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <List dense disablePadding>
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Email fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={alumni.email}
            primaryTypographyProps={{ variant: "body2" }}
          />
        </ListItem>

        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Phone fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={alumni.phone}
            primaryTypographyProps={{ variant: "body2" }}
          />
        </ListItem>

        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <LocationOn fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={alumni.location}
            primaryTypographyProps={{ variant: "body2" }}
          />
        </ListItem>

        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Work fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={`Class of ${alumni.graduation}`}
            primaryTypographyProps={{ variant: "body2" }}
          />
        </ListItem>
      </List>
    </CardContent>
  </Card>
);

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

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = alumniData.filter((alumni) => {
      const searchStr =
        `${alumni.name} ${alumni.role} ${alumni.location} ${alumni.email}`.toLowerCase();
      return searchStr.includes(query.toLowerCase());
    });
    setFilteredAlumni(filtered);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "grey.50",
        minHeight: "100vh",
        zIndex: 1000,
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" elevation={0} color="inherit">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar onSearch={handleSearch} />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
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
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ p: 2, borderBottom: 1, borderColor: "grey.200" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "primary.main",
                textAlign: "left",
              }}
            >
              Alumni Directory
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
          <Grid container spacing={3}>
            {filteredAlumni.map((alumni, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <AlumniCard alumni={alumni} />
              </Grid>
            ))}
            {filteredAlumni.length === 0 && (
              <Box sx={{ width: "100%", textAlign: "center", mt: 4 }}>
                <Typography variant="h6" color="text.secondary">
                  No alumni found matching your search.
                </Typography>
              </Box>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
