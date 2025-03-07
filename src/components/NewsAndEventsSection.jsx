"use client";
import React from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import AreaOfFocus from "./AreaOfFocus";
import UpcomingProjects from "./UpcomingProjects";
import UpcomingEvents from "./UpcomingEvents";
import WhatsNew from "./WhatsNew";

export default function NewsAndEventsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative py-16 md:py-24" id="news-events">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <Container>
        <div className="relative">
          {/* Section heading */}
          <motion.div
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              News, Upcoming {" "}
              <span className="text-primary dark:text-white">Projects and Events</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-32 md:w-48 bg-primary rounded-full"></div>
          </motion.div>

          <AreaOfFocus />
          <UpcomingEvents />
          <UpcomingProjects />
          <WhatsNew/>
        </div>
      </Container>
    </div>
  );
}
