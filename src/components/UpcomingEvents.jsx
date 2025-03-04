"use client";
import React from "react";
import { motion } from "framer-motion";

const EventItem = ({ event, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="overflow-hidden rounded-xl shadow-lg h-full bg-white dark:bg-gray-800">
      <div className="relative h-48 md:h-60 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/50 to-purple-500/30 mix-blend-multiply z-10"></div>
        <img src={event.image} alt={event.title} className="" />
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 group-hover:scale-105 transition-transform duration-500"></div>
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
            Event
          </span>
        </div>
        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {event.title}
        </h4>
        <div className="mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-1">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            {event.location}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12z"
              ></path>
            </svg>
            {event.date}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium group-hover:text-primary transition-colors duration-300"
          >
            Read more
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
        </div>
      </div>
    </div>
  </motion.div>
);

export default function UpcomingEvents() {
  const upcomingEventsData = [
    {
      title: "Pharmaceutical Innovation Summit",
      location: "Houston, TX",
      date: "May 15-18, 2025",
      description:
        "Join us in Houston. Explore our latest innovations on display and meet our team.",
      image: "/events/Pharmaceutical-Innovation-Summit.png",
    },
    {
      title: "Global Supply Chain Conference",
      location: "New York, NY",
      date: "July 10-12, 2025",
      description:
        "Join us in New York. Discover our global supply chain solutions and meet our experts.",
      image: "/events/PharmaceuticalInnovationSummit.png",
    },
    {
      title: "Healthcare Technology Expo",
      location: "Las Vegas, NV",
      date: "September 22-25, 2025",
      description:
        "Join us in Las Vegas. Experience our cutting-edge healthcare technologies and meet our team.",
      image: "/events/expo2.png",
    },
  ];

  return (
    <section className="mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row-reverse items-center justify-between mb-8"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-0">
          Upcoming <span className="text-primary">Events</span>
        </h3>
        <div className="h-1 w-24 bg-primary rounded-full md:hidden"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingEventsData.map((event, index) => (
          <EventItem key={index} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}
