"use client"
import WorldMap from "@/components/ui/world-map"
import { motion } from "motion/react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const countryConnections = [
  {
    start: { lat: 1.3521, lng: 103.8198, name: "Singapore" }, // Singapore
    end: { lat: 48.1351, lng: 11.582, name: "Munich" }, // Munich
  },
  {
    start: { lat: 48.1351, lng: 11.582, name: "Munich" }, // Munich
    end: { lat: 42.3601, lng: -71.0589, name: "Boston" }, // Boston
  },
  {
    start: { lat: 42.3601, lng: -71.0589, name: "Boston" }, // Boston
    end: { lat: 19.076, lng: 72.8777, name: "Mumbai" }, // Mumbai
  },
  {
    start: { lat: 19.076, lng: 72.8777, name: "Mumbai" }, // Mumbai
    end: { lat: 35.8617, lng: 104.1954, name: "China" }, // China
  },
  {
    start: { lat: 35.8617, lng: 104.1954, name: "China" }, // China
    end: { lat: 36.2048, lng: 138.2529, name: "Japan" }, // Japan
  },
  {
    start: { lat: 36.2048, lng: 138.2529, name: "Japan" }, // Japan
    end: { lat: 46.8182, lng: 8.2275, name: "Switzerland" }, // Switzerland
  },
  {
    start: { lat: 46.8182, lng: 8.2275, name: "Switzerland" }, // Switzerland
    end: { lat: 1.3521, lng: 103.8198, name: "Singapore" }, // Singapore
  },
]

export default function WorldMapWeb() {
  return (
    <div className="py-20 dark:bg-gray-950 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, index) => (
              <motion.span
                key={index}
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
          start: { lat: connection.start.lat, lng: connection.start.lng },
          end: { lat: connection.end.lat, lng: connection.end.lng },
          tooltipContent: `${connection.start.name} to ${connection.end.name}`,
        }))}
      />
      <div className="max-w-7xl mx-auto mt-8">
        <ul className="text-neutral-500 text-sm md:text-lg">
          {countryConnections.map((connection, index) => (
            <TooltipProvider>
            <Tooltip key={index}>
              <TooltipTrigger>
                <li>
                  {connection.start.name} to {connection.end.name}
                </li>
              </TooltipTrigger>
              <TooltipContent>
                <span>
                  {connection.start.name} to {connection.end.name}
                </span>
              </TooltipContent>
            </Tooltip>
            </TooltipProvider>
          ))}
        </ul>
      </div>
    </div>
  )
}