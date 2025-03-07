// src/components/EnquirySection.jsx
"use client";
import React from "react";
import Container from "@/components/Container";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";

export default function EnquirySection() {
  return (
    <div className="py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20 dark:opacity-10"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <Container>
        <FAQSection/>
        <ContactSection />
      </Container>
    </div>
  );
}
