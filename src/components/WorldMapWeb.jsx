"use client"
import WorldMap from "@/components/ui/world-map"
import { motion } from "motion/react"

export default function WorldMapWeb() {
  return (
    <div className=" py-20 dark:bg-gray-950 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
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
  dots={[
    {
      start: { lat: 1.3521, lng: 103.8198 }, // Singapore
      end: { lat: 1.3521, lng: 103.8198 },
    },
    {
      start: { lat: 48.1351, lng: 11.582 }, // Munich
      end: { lat: 48.1351, lng: 11.582 },
    },
    {
      start: { lat: 42.3601, lng: -71.0589 }, // Boston
      end: { lat: 42.3601, lng: -71.0589 },
    },
    {
      start: { lat: 19.076, lng: 72.8777 }, // Mumbai
      end: { lat: 19.076, lng: 72.8777 },
    },
    {
      start: { lat: 35.8617, lng: 104.1954 }, // China
      end: { lat: 35.8617, lng: 104.1954 },
    },
    {
      start: { lat: 36.2048, lng: 138.2529 }, // Japan
      end: { lat: 36.2048, lng: 138.2529 },
    },
    {
      start: { lat: 46.8182, lng: 8.2275 }, // Switzerland
      end: { lat: 46.8182, lng: 8.2275 },
    },
  ]}
/>

    </div>
  )
}
