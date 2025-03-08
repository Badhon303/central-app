import React from "react";
import { motion } from "framer-motion";

export default function WhatsNew() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="mb-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeIn}
        className="flex flex-col md:flex-row-reverse items-center justify-between mb-8"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-0">
          What's New
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Central Scientific Company Expands European Presence",
            date: "February 28, 2025",
            description:
              "Our new branch office in Berlin strengthens our commitment to serving European healthcare markets.",
            tag: "Company Growth",
            color: "#4361EE",
          },
          {
            title: "New Partnership with Leading Research Institution",
            date: "January 15, 2025",
            description:
              "Strategic collaboration aims to accelerate pharmaceutical innovation and improve patient outcomes.",
            tag: "Partnership",
            color: "#F72585",
          },
          {
            title: "Sustainability Milestone: 50% Carbon Reduction Achieved",
            date: "December 5, 2024",
            description:
              "Our commitment to environmental stewardship reaches important milestone ahead of schedule.",
            tag: "Sustainability",
            color: "#4CC9F0",
          },
        ].map((newsItem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4"
            style={{ borderColor: newsItem.color }}
          >
            <div className="p-6">
              {/* <div className="mb-3">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: newsItem.color }}
                >
                  {newsItem.tag}
                </span>
              </div> */}
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2 hover:text-primary transition-colors duration-300">
                {newsItem.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {newsItem.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {newsItem.description}
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center transition-colors duration-300"
                style={{ color: newsItem.color }}
              >
                <span className="mr-1">Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
