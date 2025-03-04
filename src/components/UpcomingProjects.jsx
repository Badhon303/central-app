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
    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm dark:border dark:border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <h4 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h4>
      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
        {project.status}
      </span>
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-500 dark:text-gray-400">Progress</span>
        <span className="text-gray-700 dark:text-gray-300">{project.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-primary h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
      </div>
    </div>
    <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
      <span className="text-sm text-gray-500 dark:text-gray-400">Timeline</span>
      <span className="font-medium text-gray-700 dark:text-gray-200">{project.timeline}</span>
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
      status: "Planning",
      progress: 25,
    },
    {
      title: "Global Healthcare Partnership",
      description:
        "Expanding our network of international partners to improve access to essential medications.",
      timeline: "Q3 2025",
      status: "Accepting Partners",
      progress: 40,
    },
    {
      title: "Sustainable Packaging Research",
      description:
        "Developing eco-friendly pharmaceutical packaging solutions without compromising product integrity.",
      timeline: "Ongoing",
      status: "Research",
      progress: 60,
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
          Upcoming <span className="text-primary">Projects</span>
        </h3>
        <div className="h-1 w-24 bg-primary rounded-full md:hidden"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingProjectsData.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
