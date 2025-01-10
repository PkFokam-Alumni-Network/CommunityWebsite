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
    accent: {
      main: colors.accent.main,
      light: colors.accent.light,
      dark: colors.accent.dark,
      contrastText: colors.accent.contrastText,
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
      light: colors.text.light,
      dark: colors.text.dark,
      muted: colors.text.muted,
      white: colors.text.white,
      black: colors.text.black,
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
              borderColor: colors.neutral.light, // bittersweet
            },
            "&:hover fieldset": {
              borderColor: colors.primary.main, // licorice
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary.main, // bittersweet
            },
          },
          "& .MuiFormLabel-root": {
            color: colors.text.muted,
            "&.Mui-focused": {
              color: colors.primary.main, // bittersweet
              fontWeight: "500",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          color: colors.secondary.main,
          "&:hover": {
            backgroundColor: colors.primary.light, // licorice
          },
          "&.MuiButton-contained": {
            backgroundColor: colors.primary.main,
            color: colors.primary.contrastText,
            "&:hover": {
              backgroundColor: colors.primary.light,
            },
            "&.Mui-disabled": {
              backgroundColor: colors.neutral.light,
              color: colors.text.disabled,
            },
          },
        },
      },
    },
  },
});

export default theme;
