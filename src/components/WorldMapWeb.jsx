"use client";

import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const countryConnections = [
  {
    start: { lat: 1.3521, lng: 103.8198, name: "Singapore", flag: "https://flagcdn.com/sg.svg" },
    end: { lat: 48.1351, lng: 11.582, name: "Munich", flag: "https://flagcdn.com/de.svg" },
  },
  {
    start: { lat: 48.1351, lng: 11.582, name: "Munich", flag: "https://flagcdn.com/de.svg" },
    end: { lat: 42.3601, lng: -71.0589, name: "Boston", flag: "https://flagcdn.com/us.svg" },
  },
  {
    start: { lat: 42.3601, lng: -71.0589, name: "Boston", flag: "https://flagcdn.com/us.svg" },
    end: { lat: 19.076, lng: 72.8777, name: "Mumbai", flag: "https://flagcdn.com/in.svg" },
  },
  {
    start: { lat: 19.076, lng: 72.8777, name: "Mumbai", flag: "https://flagcdn.com/in.svg" },
    end: { lat: 35.8617, lng: 104.1954, name: "China", flag: "https://flagcdn.com/cn.svg" },
  },
  {
    start: { lat: 35.8617, lng: 104.1954, name: "China", flag: "https://flagcdn.com/cn.svg" },
    end: { lat: 36.2048, lng: 138.2529, name: "Japan", flag: "https://flagcdn.com/jp.svg" },
  },
  {
    start: { lat: 36.2048, lng: 138.2529, name: "Japan", flag: "https://flagcdn.com/jp.svg" },
    end: { lat: 46.8182, lng: 8.2275, name: "Switzerland", flag: "https://flagcdn.com/ch.svg" },
  },
  {
    start: { lat: 46.8182, lng: 8.2275, name: "Switzerland", flag: "https://flagcdn.com/ch.svg" },
    end: { lat: 1.3521, lng: 103.8198, name: "Singapore", flag: "https://flagcdn.com/sg.svg" },
  },
];

export default function WorldMapWeb() {
  // Sort connections by longitude
  const sortedConnections = [...countryConnections].sort(
    (a, b) => a.start.lng - b.start.lng
  );

  return (
    <div className="py-20 dark:bg-gray-950 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, index) => (
              <motion.span
                key={`connectivity-letter-${index}`}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap
        dots={countryConnections.map((connection, index) => ({
          key: `connection-dot-${index}`,
          start: { lat: connection.start.lat, lng: connection.start.lng },
          end: { lat: connection.end.lat, lng: connection.end.lng },
          tooltipContent: `${connection.start.name} to ${connection.end.name}`,
        }))}
      />
      <div className="max-w-screen mx-auto mt-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {sortedConnections.map((connection, index) => (
            <div
              key={`connection-flag-${index}`}
              className="flex flex-col items-center"
            >
              {/* Responsive Flag Sizes */}
              <img
                src={connection.start.flag}
                alt={connection.start.name}
                className="w-8 h-5 sm:w-16 sm:h-12"
              />
              <span className="text-[8px] sm:text-sm text-neutral-500 mt-2">
                {connection.start.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
