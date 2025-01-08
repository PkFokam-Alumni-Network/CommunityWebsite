import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export function FAQAccordion() {
  return (
    <div className="w-full">
      {faqData.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
