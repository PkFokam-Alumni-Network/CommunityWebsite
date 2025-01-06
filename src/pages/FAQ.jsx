import React from "react";
//import Header from "../components/Header";
import Footer from "../components/Footer";
import { FAQAccordion } from "../components/FAQAccordion";

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E3]">
      {/* <Header /> */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-[#170312]">
          Frequently Asked Questions
        </h1>
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
}
