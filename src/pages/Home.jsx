import React from "react";
import Banner from "../components/Banner";
import HighlightsGrid from "../components/HighlightsGrid";
import Footer from "../components/Footer";
import { Typography, Container, Box } from "@mui/material";
import FAQAccordion from "../components/FAQAccordion";
import ContactUsPage from "./ContactUsPage";

import { highlightsData } from "../constants/highlightsdata";

export default function Home() {
  return (
    <Box sx={{}}>
      {/* Banner Section */}
      <Banner />

      {/* Events Section with subtle spacing */}
      <Box sx={{ py: 10 }} textAlign="center">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "text.primary",
            mb: 3,
          }}
        >
          Hightlights of the Week
        </Typography>
        <HighlightsGrid highlights={highlightsData} />
      </Box>

      {/* FAQ Section with proper spacing */}
      <Box id={"faq-home-main"} sx={{ py: 10 }}>
        <Container maxWidth="md">
          <FAQAccordion />
        </Container>
      </Box>

      {/* Connect Section with minimal design */}
      <Box
        sx={{
          bgcolor: "grey.100",
          py: 12,
          borderTop: 1,
          borderBottom: 1,
          borderColor: "grey.100",
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "text.primary",
                mb: 3,
              }}
            >
              Connect Across Generations
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Join our vibrant community of alumni and current students. Share
              experiences, mentor, and grow together.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box id={"contact-us-home-main"} sx={{ py: 10 }}>
        <ContactUsPage />
      </Box>

      <Footer />
    </Box>
  );
}
