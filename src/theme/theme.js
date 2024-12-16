import { createTheme } from "@mui/material/styles";
import colors from "../utils/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrastText,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
      hint: colors.text.hint,
    },
    neutral: {
      light: colors.neutral.light,
      main: colors.neutral.main,
      dark: colors.neutral.dark,
      contrastText: colors.neutral.contrastText,
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "16px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: colors.primary.main, // bittersweet
            },
            "&:hover fieldset": {
              borderColor: colors.secondary.main, // licorice
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary.main, // bittersweet
            },
          },
          "& .MuiFormLabel-root": {
            color: colors.primary.main, // bittersweet
            "&.Mui-focused": {
              color: colors.primary.main, // bittersweet
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primary.main, // bittersweet
          "&:hover": {
            backgroundColor: colors.secondary.main, // licorice
          },
        },
      },
    },
  },
});

export default theme;
