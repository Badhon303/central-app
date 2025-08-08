"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export const EventItem = ({ event, index }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = { month: "long", day: "numeric", year: "numeric" }
    return date.toLocaleDateString("en-US", options)
  }

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={event.link ? `${event.link}` : "#"} target="blank">
        <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 h-full bg-white dark:bg-gray-800 cursor-pointer">
          <div className="relative h-48 md:h-60 overflow-hidden">
            <div className="absolute inset-0 z-10 border-b-2"></div>
            {event.img && (
              <img
                src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${event.img.url}`}
                alt={event.img.alt || event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
            {!event.img && (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 group-hover:scale-105 transition-transform duration-500"></div>
            )}
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
              <div className="flex text-gray-600 dark:text-gray-300 text-sm mb-1">
                <svg
                  className="w-4 h-4 mr-2 flex-shrink-0 mt-[2px]"
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
                <span>{event.location}</span>
              </div>
              <div className="flex text-gray-600 dark:text-gray-300 text-sm">
                <svg
                  className="w-4 h-4 mr-2 flex-shrink-0 mt-[2px]"
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
                {formatDate(event.startDate)} -- {formatDate(event.endDate)}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {event.description}
            </p>
            {/* <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
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
          </div> */}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
