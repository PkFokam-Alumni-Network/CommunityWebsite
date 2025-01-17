import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const inAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px) rotate(90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0);
  }
`;

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Adjust time for splash screen duration
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ea2e49",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1000,
        opacity: 1,
        transition: "opacity 1s ease-out",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#fff",
          fontFamily: "'Georgia', sans-serif",
          fontSize: "52px",
          fontWeight: 600,
          textTransform: "uppercase",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          "w",
          "e",
          "l",
          "c",
          "o",
          "m",
          "e",
          " ",
          " ",
          "b",
          "a",
          "c",
          "k",
          " ",
          " ",
          "l",
          "e",
          "s",
          "l",
          "i",
          "e",
          "!",
          "🌸",
          "🌸",
          "🌸",
        ].map((char, index) => (
          <Box
            key={index}
            component="span"
            sx={{
              display: "inline-block",
              opacity: 0,
              transform: "translateY(20px) rotate(90deg)",
              transformOrigin: "left",
              animation: `${inAnimation} 0.5s forwards`,
              animationDelay: `${0.1 * index}s`,
              marginRight: index !== 0 && "10px",
            }}
          >
            {char}
          </Box>
        ))}
      </Typography>
    </Box>
  );
};

export default SplashScreen;
