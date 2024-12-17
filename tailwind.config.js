/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        licorice: "#170312",
        bittersweet: "#FF6F59",
        "old-lace": "#F5F1E3",
        white: "#FFFFFF",
        jet: "#373737",
        lightPeach: "#FFE6E1",
        softBlue: "#E8F0FF",
      },
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
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
