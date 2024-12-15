import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6f59ff", // bittersweet
    },
    secondary: {
      main: "#170312ff", // licorice
    },
    background: {
      default: "#f5f1e3ff", // old-lace
    },
    text: {
      primary: "#373737ff", // jet
      secondary: "#ffffffff", // white
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
});

export default theme;
