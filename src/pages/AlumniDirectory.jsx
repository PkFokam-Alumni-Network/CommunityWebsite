import React from "react";
import { Container, Box, Typography, Toolbar, Grid2 } from "@mui/material";
import alumniFakeData from "../utils/alumnidata";
import AlumniCard from "../components/AlumniCard";

const alumniData = new Array(10).fill(alumniFakeData);

export default function AlumniDirectory() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Add the title here */}
        <Typography variant="h4" gutterBottom align="center">
          Meet Your Fellow Alumni 🎓👩🏾‍🎓👨🏾‍🎓
        </Typography>
        <Grid2 container spacing={3}>
          {alumniData.map((alumni, index) => (
            <Grid2 item key={index} xs={12} sm={6} md={4}>
              <AlumniCard alumni={alumni} />
            </Grid2>
          ))}
          {alumniData.length === 0 && (
            <Box sx={{ width: "100%", textAlign: "center", mt: 4 }}>
              <Typography variant="h6" color="text.secondary">
                No alumni found matching your search.
              </Typography>
            </Box>
          )}
        </Grid2>
      </Container>
    </Box>
  );
}
