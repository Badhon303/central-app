"use client"
import React from "react"
import Container from "@/components/Container"
import JoinCSCOSection from "./JoinCSCOSection"
import JobListingsSection from "./JobListingsSection"
import BenefitsSection from "./BenefitsSection"

export default function CareersSection() {
  return (
    <div className="relative py-16 md:py-24" id="careers">
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Launch{" "}
            <span className="text-primary dark:text-white">Your Career</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 md:w-48 bg-secondary rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center sm:px-8 mt-8 max-w-5xl leading-relaxed mx-auto">
            We believe that with the right mindset and dedication, you’re ready
            to define your path and make a meaningful impact within our growing
            team.
          </p>
        </div>

        <JoinCSCOSection />
        <JobListingsSection />
        <BenefitsSection />
      </Container>
    </div>
  )
}
