import React from "react";
import { Disclosure } from "@headlessui/react";

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
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="text-left w-full px-4 py-2 text-sm font-medium text-[#170312] hover:text-[#FF6F59]">
                {faq.question}
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#170312]">
                {faq.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
