import React from "react";
import { Grid2, Typography, Container, Box } from "@mui/material";
import ContactForm from "../components/ContactUsForm";
import { motion } from "framer-motion";

const ContactUsPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "grey.100",
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Box my={4}>
          <Grid2 container spacing={12}>
            {/* Left section with text */}
            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="body1" color="textSecondary">
                  Contact Us
                </Typography>
                <Typography variant="h5" component="h1" gutterBottom>
                  Feel free to reach out with any questions, suggestions, or
                  feedback. We're here to help and look forward to hearing from
                  you.
                </Typography>
              </motion.div>
            </Grid2>

            {/* Right section with the form */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <ContactForm />
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
