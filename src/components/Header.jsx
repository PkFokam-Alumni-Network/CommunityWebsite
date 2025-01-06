import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem,
} from "@mui/material";

const Header = () => {
  const location = useLocation();
  const menu = ["Membership", "Graduation", "Events", "Donate", "Onboarding"];

  return (
    <AppBar position="static" elevation={0} color="primary">
      <div className="flex">
        <div className="flex items-center pl-6">
          <Link to={"/"}>
            <Typography
              variant="h6"
              style={{ fontWeight: 700 }}
              color="secondary"
              mr={2}
            >
              PK FOKAM | ALUMNI
            </Typography>
          </Link>
        </div>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexGrow: 1,
          }}
        >
          <div className="flex items-center justify-end">
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
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                ))}
                {location.pathname !== "/faq" && (
                  <ListItem>
                    <Typography
                      variant="body1"
                      color="secondary"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "white",
                        },
                        fontWeight: 600,
                      }}
                    >
                      <Link to="/faq">FAQ</Link>
                    </Typography>
                  </ListItem>
                )}
              </List>
            </nav>
          </div>
          <Button component={Link} to="/login" variant="contained">
            Login
          </Button>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Header;
