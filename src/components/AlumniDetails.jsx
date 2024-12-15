import React from "react";
import { Container, Typography, Grid, Avatar, Box, Link } from "@mui/material";

const AlumniDetails = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column - Avatar and Basic Info */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Avatar
              sx={{
                width: 200,
                height: 200,
                margin: "0 auto",
                mb: 2,
              }}
            />
            <Typography variant="h4" component="h1" gutterBottom>
              Jane Doe
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Software Engineer
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Biography
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Jane Doe is a passionate software engineer with a proven track
              record in developing cutting-edge web applications. She excels in
              React and Node.js, and has a keen interest in AI and machine
              learning. Throughout her career, Jane has led multiple successful
              projects, consistently delivering high-quality solutions that meet
              and exceed client expectations. Her innovative approach to
              problem-solving and her ability to adapt to new technologies
              quickly have made her a valuable asset in the ever-evolving field
              of software development.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column - Details and Social Media */}
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" color="text.secondary">
                  Current State
                </Typography>
                <Typography variant="body1" gutterBottom>
                  California
                </Typography>

                <Typography variant="subtitle1" color="text.secondary">
                  Education
                </Typography>
                <Typography variant="body1" gutterBottom>
                  M.S. in Computer Science
                </Typography>

                <Typography variant="subtitle1" color="text.secondary">
                  Email
                </Typography>
                <Typography variant="body1" gutterBottom>
                  jane.doe@example.com
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" color="text.secondary">
                  Current Company
                </Typography>
                <Typography variant="body1" gutterBottom>
                  TechInnovate Inc.
                </Typography>

                <Typography variant="subtitle1" color="text.secondary">
                  Graduation Year
                </Typography>
                <Typography variant="body1" gutterBottom>
                  2018
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Social Media
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" color="text.secondary">
                  LinkedIn
                </Typography>
                <Link href="#" underline="hover" color="primary">
                  LinkedIn
                </Link>

                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Github
                  </Typography>
                  <Link href="#" underline="hover" color="primary">
                    Github
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" color="text.secondary">
                  Instagram
                </Typography>
                <Link href="#" underline="hover" color="primary">
                  Instagram
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AlumniDetails;
