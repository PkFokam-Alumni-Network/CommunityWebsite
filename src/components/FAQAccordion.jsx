import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const faqData = [
  {
    question: "How can I become a member of the Pkfokam Alumni Association?",
    answer:
      "All graduates of Pkfokam Institute of Excellence automatically become members of the Alumni Association. If you're a graduate and haven't received information about your membership, please contact our membership office.",
  },
  {
    question: "What benefits do I get as a Pkfokam Alumni member?",
    answer:
      "As a member, you get access to networking events, career resources, continuing education opportunities, and exclusive alumni discounts. You also stay connected with your alma mater and fellow graduates.",
  },
  {
    question: "How can I update my contact information?",
    answer:
      "You can update your contact information by logging into your alumni account on our website or by contacting our alumni office directly via email or phone.",
  },
  {
    question: "Are there opportunities to volunteer or give back to Pkfokam?",
    answer:
      "Yes! We have various volunteering opportunities including mentoring current students, participating in career fairs, and helping organize alumni events. For more information, please visit our 'Get Involved' page.",
  },
  {
    question: "How can I make a donation to Pkfokam?",
    answer:
      "You can make a donation through our secure online portal, by mail, or by contacting our development office. Your generous contributions help support scholarships, research, and campus improvements.",
  },
];

export default function FAQAccordion() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            mb: 4,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </Typography>

        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 1,
              boxShadow: "none",
              "&:before": { display: "none" },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "8px !important",
              overflow: "hidden",
              "&:not(:last-child)": { mb: 2 },
              "&.Mui-expanded": {
                margin: 0,
                mb: 2,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: "16px 0",
                },
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.02)",
                },
                "&.Mui-expanded": {
                  bgcolor: "rgba(0, 0, 0, 0.02)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "#170312",
                  "&:hover": { color: "text.dark" },
                  transition: "color 0.2s",
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.01)",
                borderTop: "1px solid",
                borderColor: "divider",
                py: 3,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#170312",
                  lineHeight: 1.6,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
