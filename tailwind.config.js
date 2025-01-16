/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#ffba08",
          light: "#ffd95b",
          dark: "#c78a00",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#170312",
          light: "#3a0a3a",
          dark: "#0d0009",
          contrastText: "#f5f1e3",
        },
        accent: {
          main: "#ff6f59",
          light: "#ff9a85",
          dark: "#c43f33",
          contrastText: "#ffffff",
        },
        background: {
          default: "#f5f1e3",
          paper: "#ffffff",
        },
        text: {
          primary: "#373737",
          secondary: "#ffffff",
          disabled: "#bdbdbd",
          hint: "#9e9e9e",
          light: "#e0e0e0",
          dark: "#212121",
          muted: "#757575",
          white: "#ffffff",
          black: "#000000",
        },
        neutral: {
          light: "#d1d5db",
          main: "#64748b",
          dark: "#1e293b",
          contrastText: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["Times New Roman", "Arial", "sans-serif"],
        serif: ["'Source Serif 4'", "serif"],
      },
      backgroundImage: {
        "gradient-top": "linear-gradient(0deg, #F8F9FA, #E9ECEF, #DEE2E6)",
        "gradient-right": "linear-gradient(90deg, #F8F9FA, #E9ECEF, #DEE2E6)",
        "gradient-bottom": "linear-gradient(180deg, #F8F9FA, #E9ECEF, #DEE2E6)",
        "gradient-left": "linear-gradient(270deg, #F8F9FA, #E9ECEF, #DEE2E6)",
        "gradient-top-right":
          "linear-gradient(45deg, #F8F9FA, #E9ECEF, #DEE2E6)",
        "gradient-bottom-right":
          "linear-gradient(135deg, #F8F9FA, #E9ECEF, #DEE2E6)",
        "gradient-top-left":
          "linear-gradient(225deg, #F8F9FA, #E9ECEF, #DEE2E6)",
        "gradient-bottom-left":
          "linear-gradient(315deg, #F8F9FA, #E9ECEF, #DEE2E6)",
        "gradient-radial": "radial-gradient(circle, #F8F9FA, #E9ECEF, #DEE2E6)",
      },
    },
  },
  plugins: [],
};
