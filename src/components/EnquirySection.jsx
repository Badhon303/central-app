"use client";
import React from "react";
import Container from "@/components/Container";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";

export default function EnquirySection() {
  return (
    <div className="relative py-16 md:py-24" id="about">
      <Container className="relative z-10">
        {/* <FAQSection /> */}
        <ContactSection />
      </Container>
    </div>
  );
}
