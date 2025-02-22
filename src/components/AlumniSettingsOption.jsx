import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import {
  Lock as LockIcon,
  Email as EmailIcon,
  Person as PersonIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";

const AlumniSettingsOptions = () => {
  const navigate = useNavigate();

  const options = [
    { title: "Modify Password", icon: <LockIcon />, path: "/modify-password" },
    { title: "Modify Email", icon: <EmailIcon />, path: "/modify-email" },
    {
      title: "Modify Personal Information",
      icon: <PersonIcon />,
      path: "/edit-profile",
    },
  ];

  const handleOptionClick = (path) => {
    navigate(path);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle farthest-corner at 0.8% 3.1%, rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(255,188,224,1) 100.2%)",
      }}
    >
      <Paper elevation={3} sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <IconButton onClick={handleGoBack} sx={{ mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" component="h1">
            Settings Options
          </Typography>
        </Box>
        <List>
          {options.map((option, index) => (
            <ListItem
              key={index}
              button
              onClick={() => handleOptionClick(option.path)}
              sx={{ "&:hover": { backgroundColor: "action.hover" } }}
            >
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.title} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default AlumniSettingsOptions;
