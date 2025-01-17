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

const SplashScreen = ({ onComplete, username }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Adjust time for splash screen duration
    return () => clearTimeout(timer);
  }, [onComplete]);

  const message = "Hello  " + username;
  var usernameArray = message.split("").concat(["🌸", "🌸", "🌸"]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle farthest-corner at 0.8% 3.1%, rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(165,255,205,1) 100.2%)",
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
          fontWeight: 600,
          textTransform: "uppercase",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          fontSize: {
            xs: "36px",
            sm: "48px",
            md: "52px",
            lg: "60px",
          },
        }}
      >
        {usernameArray.map((char, index) => (
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
              marginRight: index !== 0 && "10px", // Add margin between letters
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
