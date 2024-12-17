import React from "react";
import Banner from "../components/Banner";
import Events from "../components/Events";

import { Container, Typography } from "@mui/material";
import colors from "../utils/colors";

export default function Home() {
  return (
    <>
      <Banner />
      <Events />
      <div
        style={{ backgroundColor: colors.secondary.main }}
        className="p-14 text-center"
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ color: colors.secondary.contrastText }}
        >
          Connect Across Generations
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: colors.secondary.contrastText }}
          mt={1}
        >
          Join our vibrant community of alumni and current students. Share
          experiences, mentor, and grow together.
        </Typography>
      </div>
      <footer></footer>
    </>
  );
}
