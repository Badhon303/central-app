"use client";
import React from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import AreaOfFocus from "./AreaOfFocus";
import UpcomingProjects from "./UpcomingProjects";
import UpcomingEvents from "./UpcomingEvents";
import WhatsNew from "./WhatsNew";
import Blog from "@/components/Blog";

export default function NewsAndEventsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative py-16 md:py-24" id="news-events">
      <Container>
        <div className="relative">
          {/* Section heading */}
          <motion.div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              News And {" "}
              <span className="text-primary dark:text-white">
              Upcoming Events
              </span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-44 md:w-60 bg-secondary rounded-full"></div>
          </motion.div>

          {/* <AreaOfFocus /> */}
          <UpcomingEvents />
          {/* <UpcomingProjects /> */}
          <Blog />
          <WhatsNew />
        </div>
      </Container>
    </div>
  );
}
