import React from "react";
import colors from "../constants/colors";
import { Container, Typography, Box } from "@mui/material";
import backgroundImage2 from "../assets/bg.jpg";

export default function Banner() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "50vh",
        backgroundColor: colors.secondary.main,
        backgroundImage: `url(${backgroundImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "45% 20%",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      />
      <Container sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: colors.secondary.contrastText,
              fontWeight: 700,
              maxWidth: "500px",
              width: "100%",
              zIndex: 100,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Welcome to PkFokam Alumni Network
          </Typography>
          <Typography
            variant="h5"
            mt={2}
            sx={{
              color: "#FFFAFA",
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "1.5rem",
                zIndex: 100,
              }, // Responsive font size
            }}
          >
            Connecting generations of excellence
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
