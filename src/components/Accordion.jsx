import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

// Custom styled components using the styled function
const AccordionItem = styled(Accordion)`
  margin-bottom: 1rem;
  border-radius: 30px;
  overflow: hidden;
  background-color: #f3f3f3;
  border: 1px solid #191a23;
  border-bottom: 3px solid #191a23;
`;

const AccordionSummaryCustom = styled(AccordionSummary)`
  background-color: #f3f3f3;
  padding: 20px 40px;
  border-bottom: 1px solid #191a23;
  & .MuiAccordionSummary-expandIconWrapper {
    color: #191a23;
  }
`;

const AccordionDetailsCustom = styled(AccordionDetails)`
  padding: 20px 40px;
`;

const AccordianNumbers = styled('span')`
  font-size: 44px;
  padding-right: 20px;
`;

// Example faqData array
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

const TestAccordion = () => {
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


        <div className="row">
          <div className="accordion mt-5">
            {faqData.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionSummaryCustom
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography sx={{ fontSize: '22px', textAlign: 'center' }}>
                    <AccordianNumbers>{`0${index + 1}`}</AccordianNumbers> {item.question}
                  </Typography>
                </AccordionSummaryCustom>
                <AccordionDetailsCustom>
                  <Typography>{item.answer}</Typography>
                </AccordionDetailsCustom>
              </AccordionItem>
            ))}
          </div>
        </div>
        </Box>
        </Container>
  );
};

export default TestAccordion;
