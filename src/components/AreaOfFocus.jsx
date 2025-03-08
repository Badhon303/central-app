"use client";
import React from "react";
import { motion } from "framer-motion";

const AreaOfFocusItem = ({ item, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
  >
    <div
      className="absolute inset-0 bg-black/5 dark:bg-black/20 z-10"
      style={{ backgroundColor: `${item.color}20` }}
    ></div>
    <div className="p-6 relative z-20">
      <div className="mb-6">
        <div
          className="w-16 h-16 flex items-center justify-center text-3xl rounded-xl"
          style={{ backgroundColor: item.color }}
        >
          {item.icon}
        </div>
      </div>
      <div
        className="absolute top-6 right-6 text-5xl opacity-10 dark:opacity-20"
        style={{ color: item.color }}
      >
        {item.icon}
      </div>
      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
        {item.title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
      {/* <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium"
          style={{ color: item.color }}
        >
          Learn more
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div> */}
    </div>
  </motion.div>
);

export default function AreaOfFocus() {
  const areaOfFocusData = [
    {
      title: "Pharmaceutical Innovation",
      description:
        "Advancing healthcare solutions through cutting-edge pharmaceutical technology and research partnerships.",
      color: "#FFD166",
      image: "/images/innovation.svg",
      icon: "💊",
    },
    {
      title: "Global Supply Chain",
      description:
        "Building resilient networks to ensure timely delivery of essential healthcare products worldwide.",
      color: "#EF476F",
      image: "/images/supply-chain.svg",
      icon: "🌐",
    },
    {
      title: "Sustainable Healthcare",
      description:
        "Developing eco-friendly approaches to pharmaceutical supply while maintaining quality and efficacy.",
      color: "#06D6A0",
      image: "/images/sustainable.svg",
      icon: "🌿",
    },
  ];

  return (
    <section className="mb-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-between mb-8"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-0">
          Our Area of Focus
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {areaOfFocusData.map((item, index) => (
          <AreaOfFocusItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
