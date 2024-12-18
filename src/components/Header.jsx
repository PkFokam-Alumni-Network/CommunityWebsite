import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem,
} from "@mui/material";

const Header = () => {
  const menu = ["Membership", "Graduation", "Events", "Donate", "Onboarding"];

  return (
    <AppBar position="static" elevation={0} color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div className="flex items-center">
          <Typography
            variant="h6"
            style={{ fontWeight: 700 }}
            color="secondary"
            mr={2}
          >
            PKFOKAM ALUMNI
          </Typography>
          <nav>
            <List orientation="horizontal" sx={{ display: "flex" }}>
              {menu.map((item, index) => (
                <ListItem key={index}>
                  <Typography
                    variant="body1"
                    color="secondary"
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </ListItem>
              ))}
              {
                <ListItem key={"yo"}>
                <Typography
                  variant="body1"
                  color="secondary"
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <Link to="/alumni-details">Alumni Detail</Link>
                </Typography>
              </ListItem>
              }
            </List>
          </nav>
        </div>
        <Button component={Link} to="/login" variant="contained">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
