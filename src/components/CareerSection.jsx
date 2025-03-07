// src/components/CareersSection.jsx
"use client";
import React from "react";
import Container from "@/components/Container";
import JoinCSCOSection from "./JoinCSCOSection";
import JobListingsSection from "./JobListingsSection";
import BenefitsSection from "./BenefitsSection";

export default function CareersSection() {
  return (
    <div className="relative py-16 md:py-24" id="careers">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Join Our{" "}
            <span className="text-primary dark:text-white">Team</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 md:w-48 bg-primary rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's transforming the pharmaceutical industry
            with innovation, integrity, and excellence.
          </p>
        </div>

        <JoinCSCOSection />
        <JobListingsSection />
        <BenefitsSection />
      </Container>
    </div>
  );
}
