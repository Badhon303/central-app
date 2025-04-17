"use client";

import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const partnerLogos = {
  "UNITED PHARMA INDUSTRIES CO., LTD": "/logos/united-pharma.png",
  "KINHOO PHARMACEUTICAL CO., LTD": "/logos/kinhoo-logo.png",
  "SUZHOU CRH NEW MATERIAL TECHNOLOGY CO., LTD": "/logos/sozhou.png",
  "GLOBE QUIMICA": "/logos/globe-cumica.png",
  "ZHUHAI UNITED LABORATORIES CO., LTD": "/logos/zhunhai.png",
  "ALPHA GROUP": "/logos/alpha-group.jpeg",
  KOEL: "/logos/KOEL.png",
  "RC ENTERPRISE": "/logos/RC-enterprises.jpg",
  "BOROSIL SCIENTIFIC LIMITED": "/logos/borosil.jpeg",
  "SVAM TOYAL PACKAGING INDUSTRIES LTD": "/logos/svam.jpeg",
  "RAVI RAJ FOILS LTD": "/logos/raviraj.png",
  "DR. MAISCH": "/logos/dr-maisch.jpeg",
  "KARL HECHT GMBH": "/logos/glaswarenfabrik.jpeg",
  "DORSAN FILTRATION": "/logos/dorsan.jpeg",
  "LIVEO RESEARCH": "/logos/liveo.jpeg",
  "PT. ONEJECT": "/logos/oneject.jpeg",
};

const countryConnections = [
  {
    start: {
      lat: 1.3521,
      lng: 103.8198,
      name: "Singapore",
      flag: "https://flagcdn.com/sg.svg",
    },
    end: {
      lat: 48.1351,
      lng: 11.582,
      name: "Munich",
      flag: "https://flagcdn.com/de.svg",
    },
  },
  {
    start: {
      lat: 48.1351,
      lng: 11.582,
      name: "Munich",
      flag: "https://flagcdn.com/de.svg",
    },
    end: {
      lat: 42.3601,
      lng: -71.0589,
      name: "Boston",
      flag: "https://flagcdn.com/us.svg",
    },
  },
  {
    start: {
      lat: 42.3601,
      lng: -71.0589,
      name: "Boston",
      flag: "https://flagcdn.com/us.svg",
    },
    end: {
      lat: 19.076,
      lng: 72.8777,
      name: "Mumbai",
      flag: "https://flagcdn.com/in.svg",
    },
  },
  {
    start: {
      lat: 19.076,
      lng: 72.8777,
      name: "Mumbai",
      flag: "https://flagcdn.com/in.svg",
    },
    end: {
      lat: 35.8617,
      lng: 104.1954,
      name: "China",
      flag: "https://flagcdn.com/cn.svg",
    },
  },
  {
    start: {
      lat: 35.8617,
      lng: 104.1954,
      name: "China",
      flag: "https://flagcdn.com/cn.svg",
    },
    end: {
      lat: 36.2048,
      lng: 138.2529,
      name: "Japan",
      flag: "https://flagcdn.com/jp.svg",
    },
  },
  {
    start: {
      lat: 36.2048,
      lng: 138.2529,
      name: "Japan",
      flag: "https://flagcdn.com/jp.svg",
    },
    end: {
      lat: 46.8182,
      lng: 8.2275,
      name: "Switzerland",
      flag: "https://flagcdn.com/ch.svg",
    },
  },
  {
    start: {
      lat: 36.2048,
      lng: 138.2529,
      name: "Japan",
      flag: "https://flagcdn.com/jp.svg",
    },
    end: {
      lat: 1.3521,
      lng: 103.8198,
      name: "Singapore",
      flag: "https://flagcdn.com/sg.svg",
    },
  },
];

export default function WorldMapWeb() {
  // Sorting connections by longitude
  const sortedConnections = [...countryConnections].sort(
    (a, b) => a.start.lng - b.start.lng
  );

  return (
    <div className="dark:bg-gray-950 bg-white w-full">
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
        <p className=" text-neutral-500 max-w-5xl mx-auto py-4">
          With a global network of trusted manufacturers, we bring together
          expertise from around the world. Our smart collaboration ensures
          seamless integration, innovation, and quality across
          borders—empowering us to deliver excellence, no matter where you are.
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
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 px-4 items-center justify-center self-center justify-items-center">
          {Object.entries(partnerLogos).map(([name, logo]) => (
            <TooltipProvider key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center p-4 rounded-lg">
                    {/* Logos */}
                    <img
                      src={logo}
                      alt={name}
                      className="w-16 h-10 sm:w-20 sm:h-14 md:w-28 md:h-20 border border-black/90 dark:border-gray-300 object-fill rounded-sm"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-white dark:bg-gray-800">
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
}
