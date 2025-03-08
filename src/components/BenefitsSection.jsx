"use client";
import React from "react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Competitive Compensation",
      description:
        "We offer industry-leading salaries and comprehensive benefits packages.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      ),
    },
    {
      title: "Professional Development",
      description:
        "Continuous learning opportunities and career advancement paths.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M2 3h20v6H2z" />
          <path d="M2 15h20v6H2z" />
          <path d="M6 3v18" />
          <path d="M18 3v18" />
        </svg>
      ),
    },
    {
      title: "Work-Life Balance",
      description:
        "Flexible work arrangements and a supportive environment.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l3 3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold">
          <span className="text-gray-700 dark:text-white">
            Why Join CSCO?
          </span>
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We offer more than just a job. Join us and be part of a team that
          values innovation, growth, and well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-3">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                {benefit.title}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
