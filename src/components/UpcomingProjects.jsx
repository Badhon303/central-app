"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectItem = ({ project, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm dark:border dark:border-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    {/* Image Section */}
    <div className="relative h-48 md:h-60 overflow-hidden rounded-t-xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/50 to-purple-500/30 mix-blend-multiply z-10"></div>
      {project.img && (
        <img
          src={`/events/expo.png`}
          alt={project.img.alt || project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      )}
      {!project.img && (
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 group-hover:scale-105 transition-transform duration-500 flex justify-center items-center">No Image</div>
      )}
    </div>

    {/* Content Section */}
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h4>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-sm text-gray-500 dark:text-gray-400">Timeline</span>
        <span className="font-medium text-gray-700 dark:text-gray-200">{project.timeline}</span>
      </div>
    </div>
  </motion.div>
);

export default function UpcomingProjects() {
  const upcomingProjectsData = [
    {
      title: "Next-Gen Distribution Hub",
      description:
        "Launching a state-of-the-art distribution center with AI-powered inventory management.",
      timeline: "Q2 2025",
      img: {
        url: "/events/expo", // Example image URL
        alt: "Next-Gen Distribution Hub",
      },
    },
    {
      title: "Global Healthcare Partnership",
      description:
        "Expanding our network of international partners to improve access to essential medications.",
      timeline: "Q3 2025",
      img: {
        url: "/events/expo", // Example image URL
        alt: "Global Healthcare Partnership",
      },
    },
    {
      title: "Sustainable Packaging Research",
      description:
        "Developing eco-friendly pharmaceutical packaging solutions without compromising product integrity.",
      timeline: "Ongoing",
      // No image provided, fallback will be used
    },
  ];

  return (
    <section className="mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-between mb-8"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-0">
          Upcoming Projects
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingProjectsData.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}