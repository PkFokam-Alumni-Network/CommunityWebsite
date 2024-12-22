import React from "react";
import colors from "../utils/colors";
import { Container, Typography } from "@mui/material";

export default function Banner() {
  return (
    <div style={{ height: "50vh", backgroundColor: colors.secondary.main }}>
      <Container sx={{ height: "100%" }}>
        <div className="h-full flex flex-col text-center justify-center items-center">
          <Typography
            variant="h3"
            sx={{
              color: colors.secondary.contrastText,
              fontWeight: 700,
              maxWidth: "500px",
            }}
          >
            Welcome to PKFokam Alumni Society
          </Typography>
          <Typography
            variant="h5"
            mt={2}
            sx={{
              color: colors.secondary.contrastText,
            }}
          >
            Connecting generations of excellence
          </Typography>
        </div>
      </Container>
    </div>
  );
}
